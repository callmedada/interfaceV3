import { Component } from '@angular/core';
import { App, MenuController } from 'ionic-angular';


@Component({
  templateUrl: 'components.html'
})
export class ComponentsPage { 
    constructor(app: App, menu: MenuController) {
    menu.enable(true);
  }
}
