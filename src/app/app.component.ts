import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase cms';
  
  constructor() {  
  }

  // addItem(newName: string) {
  //   this.items.push({ text: newName });
  // }
  // updateItem(key: string, newText: string) {
  //   console.log('clicked save');
  //   this.edit = false;
  //   this.items.update(key, { text: newText });
  // }
  // deleteItem(key: string) {    
  //   this.items.remove(key); 
  // }


}
