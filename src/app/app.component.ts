import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    title: 'angular-core-deep-dive'
  };

  onLogoClick() {
    alert('Hello World');
  }

  onKeyUp(value: string) {
    this.data.title = value;
  }
}
