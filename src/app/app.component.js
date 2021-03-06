"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BasicComponent = (function () {
    function BasicComponent() {
        this.name = 'Hello world';
    }
    return BasicComponent;
}());
BasicComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Hello {{name}}</h1>\n              <button [routerLink] = \"['/clubs']\">Click me to see the list of clubs</button>\n              <button [routerLink] = \"['/posters']\">Click me to see the list of poster</button>\n              <router-outlet></router-outlet>",
    })
], BasicComponent);
exports.BasicComponent = BasicComponent;
//# sourceMappingURL=app.component.js.map