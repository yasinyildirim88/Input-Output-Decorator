import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Yasin YILDIRIM"
  LastName: string = "";

  setLastName(event:any): void {
    this.LastName = event;
  }
}
