import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {
 @Input() name2: string = "";
 lastName: string ="";

 @Output() setAppEvent = new EventEmitter<string>();
 

 setAppComponent() {
  this.setAppEvent.emit(this.lastName);
 }

}
