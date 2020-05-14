import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usermgt';
constructor(){

}
   isValid: boolean= false;
   isTrue: boolean= false;
   view(){
     this.isValid=true;
   }
   add(){
     this.isTrue=true;
   }
  
}
