import { Component, NgZone, ViewChild } from '@angular/core';
import { Config, Menu, NavController, Platform } from 'ionic-angular';

import * as helpers from '../directives/helpers';
import { IconTextPage as TabIconTextPage, TabIconTextContentPage } from '../pages/tabs/pages';
import { LoginPage } from '../pages/login-page/login-page';


@Component({
  templateUrl: 'app.template.html',
  selector : 'apptmp'
})
export class MyApp {
  isProductionMode: boolean = false;
  isLab: boolean = false;
  rootPage: any;
  nextPage: any;
  currentPlatform: string = 'ios';
  currentPageIndex: number = 1;

  @ViewChild('content') content: NavController;
  @ViewChild(Menu) menu: Menu;

  pages = [
    { title: 'Cat1', component: TabIconTextPage, icon : "football" , },
    { title: 'Cat1', component: TabIconTextPage, icon : "musical-note" ,  },
    { title: 'Cat1', component: TabIconTextPage, icon : "cash" , }
  ];

  constructor(public platform: Platform, public config: Config, public zone: NgZone) {
    this.rootPage = LoginPage;
  }

  ngAfterContentInit() {
    // if viewing the preview app in lab, hide the statusbars
    this.isLab = window.parent.location.pathname === '/ionic-lab';
    if (this.isLab) this.config.set('statusbarPadding', false);

    // production-only code
    // production is false unless viewed on the docs
    // http://ionicframework.com/docs/v2/components/
    if (this.platform.getQueryParam('production') === 'true') {
      this.isProductionMode = true;

      // Platform is ios by default
      // only change it if android or windows
      if (this.platform.is('android')) {
        this.currentPlatform = 'android';
      } else if (this.platform.is('windows')) {
        this.currentPlatform = 'windows';
      }

      if (helpers.hasScrollbar() === true) {
        setTimeout(function () {
          var body = document.getElementsByTagName('body')[0];
          body.className = body.className + ' has-scrollbar';
        }, 500);
      }

      window.parent.postMessage(this.currentPlatform, '*');
    }
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    helpers.debounce(this.content.setRoot(page.component), 60, false);
  }
}
