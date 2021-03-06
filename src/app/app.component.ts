import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
              <button [routerLink] = "['/clubs']">Click me to see the list of clubs</button>
              <button [routerLink] = "['/posters']">Click me to see the list of poster</button>
              <router-outlet></router-outlet>`,
})
export class BasicComponent  { name = 'Hello world'; }
