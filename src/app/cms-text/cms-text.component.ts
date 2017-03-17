import { Component, OnInit, Input } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-cms-text',
  templateUrl: './cms-text.component.html',
  styleUrls: ['./cms-text.component.css']
})
export class CmsTextComponent implements OnInit {
   @Input() textpath;
   @Input() node;

  content: FirebaseObjectObservable<any>;
  edit:Boolean = false;
  
  constructor(public af: AngularFire) {
    // this.contentTest = this.af.database.object('/pages/home/section1');
  }

  add(newName: string) {
    this.content.set({ text: newName });
  }

  update(newText: string) {
    // this.edit = false;
    // Genius! using text allows us to be abstract!
    this.content.update({ text: newText });
  }

  delete(key: string) {    
    this.content.remove(); 
  }

  ngOnInit() {
    console.log(this.textpath);
    this.content = this.af.database.object(this.textpath);
  }

}
