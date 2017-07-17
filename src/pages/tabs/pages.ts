import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { AvatarPage as ListAvatarPage } from '../lists/avatar/pages';
import { BasicPage as SearchbarBasicPage } from '../searchbars/basic/pages';
import { BasicPage as NavigationBasicPage, NavigationDetailsPage } from '../navigation/basic/pages';
import { ComponentsPage as ButtonComponentsPage } from '../buttons/components/pages';
import { BasicPage as GridBasicPage } from '../grid/basic/pages';


@Component({
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'royal' : 'primary'">
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
    </ion-content>
`})
export class TabIconTextContentPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}


@Component({
  template: `
    <ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'primary' : 'primary'">
      <ion-tab tabIcon="calendar" tabTitle="Event" [root]="tab1Root"></ion-tab>
      <ion-tab tabIcon="chatbubbles" tabTitle="Chat" [root]="tab2root" tabBadge="3" tabBadgeStyle="danger"></ion-tab>
      <ion-tab tabIcon="people" tabTitle="Forum" [root]="tab5root"></ion-tab>
      <ion-tab tabIcon="search" tabTitle="Search" [root]="tab3Root"></ion-tab>
      <ion-tab tabIcon="more" tabTitle="More" [root]="tab4Root"></ion-tab>
    </ion-tabs>
`})
export class IconTextPage {
  tab1Root: any = ButtonComponentsPage;
  tab2root: any = ListAvatarPage;
  tab3Root: any = SearchbarBasicPage;
  tab4Root: any = NavigationBasicPage;
  tab5root: any = GridBasicPage;

  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
