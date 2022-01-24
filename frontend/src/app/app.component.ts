import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onesecondoneshot-ng';
  currentDate: Date = new Date();

  ngOnInit() {
   AOS.init();
  }
}
