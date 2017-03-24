import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './../auth.service';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-cms-text',
  templateUrl: './cms-text.component.html',
  styleUrls: ['./cms-text.component.css'],
  providers: [AuthService]
})
export class CmsTextComponent implements OnInit {
   @Input() textpath;
   @Input() node;

  loggedIn: Boolean;
  content: FirebaseObjectObservable<any>;
  edit:Boolean = false;
  
  // TODO getting called for each component, can this be fixed with a service?

  constructor(public af: AngularFire, public Auth:AuthService) {
    // this.contentTest = this.af.database.object('/pages/home/section1');
  }

  add(newName: string) {
    this.content.set({ text: newName });
  }

  update(newText: string) {
    // this.edit = false;
    // Genius! using text allows us to be abstract!
    this.content.update({ text: newText }).then(
      result => console.log('result ' + result)
    ).catch(
      error => console.log('error ' + error),
    );
  }

  delete(key: string) {    
    this.content.remove(); 
  }

  ngOnInit() {
    console.log(this.textpath);
    this.af.auth.subscribe(auth => {
      if (auth != null) { this.loggedIn = true } else { this.loggedIn = false }
    });
    this.content = this.af.database.object(this.textpath);
  }
}