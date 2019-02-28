import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  humans = [
    { name: "chicken" },
    { name: "fish" },
    { name: "goat" },
    { name: "cow" }
  ];

  col1 = [
    { name: "wolf" },
  ];

  col2 = [
  ];

  col3 = [
  ];

  col4 = [
  ];

  constructor(private dnd: DragulaService) {

    this.dnd.createGroup("people", {
      // ...
    });

    this.dnd.dropModel("people").subscribe(args => {
      console.log(args);
    });
  }
}
