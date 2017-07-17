import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { AvatarPage as ListAvatarPage } from '../../lists/avatar/pages';
import { BackgroundPage as CardBackgroundPage } from '../../cards/background/pages';
import { AdvancedSocialPage as CardAdvancedSocialPage } from '../../cards/advanced-social/pages';
import { IconPage as ListIconPage } from '../../lists/icon/pages';
import {ReportPage} from '../../report/report'; 
import {FeedbackPage} from '../../feedback/feedback'; 
import { ResourcesPage } from '../../resources/resources';
import { PeerPage } from '../../peer/peer';
import { AboutPage } from '../../about/about';


@Component({
  templateUrl: 'navigation-details.html',
})
export class NavigationDetailsPage {
  item;
    tab1Root: any = ListAvatarPage;


  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

@Component({
  template: `
<ion-header>
  <ion-navbar [color]="isAndroid ? 'royal' : 'primary'">
    <ion-title>Navigation</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <ion-list>
    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)" icon-start>
      <ion-icon [name]="  item.icon" [ngStyle]="{'color': item.color}" item-start></ion-icon>
      {{ item.title }}
    </button>
  </ion-list>
</ion-content>
`
})
export class BasicPage {
  items = [];

  constructor(public nav: NavController) {
    this.items = [
      {
        'title': 'My Profile',
        'icon': 'add',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135',
        'pagename': ListIconPage
      },
      {
        'title': 'Peer Support',
        'icon': 'help-buoy',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#E63135',
        'pagename': PeerPage

      },
      {
        'title': 'Map',
        'icon': 'navigate',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529',
        'pagename' : CardBackgroundPage
      },
      {
        'title': 'Resources',
        'icon': 'book',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439',
        'pagename': ResourcesPage
      },
      {
        'title': 'FAQ',
        'icon': 'help',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#CE6296'
      },
      {
        'title': 'Toturial',
        'icon': 'bulb',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#78BD43'
      },
      {
        'title': 'FeedBack',
        'icon': 'mail-open',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': '#3575AC',
        'pagename': FeedbackPage

      },
      {
        'title': 'Report',
        'icon': 'bug',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
        'color': '#412159',
        'pagename': ReportPage
      },
      {
        'title': 'Manager function',
        'icon': 'hammer',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
      {
        'title': 'About us',
        'icon': 'information-circle',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000',
        'pagename': AboutPage
      },
    ]
  }

  openNavDetailsPage(item) {
    this.nav.push(item.pagename);
  }

}
