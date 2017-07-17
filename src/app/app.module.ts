import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsPage as ButtonComponentsPage } from '../pages/buttons/components/pages';

import { AdvancedSocialPage as CardAdvancedSocialPage } from '../pages/cards/advanced-social/pages';
import { BackgroundPage as CardBackgroundPage } from '../pages/cards/background/pages';
import { IconPage as ListIconPage } from '../pages/lists/icon/pages';


// grid
import { BasicPage as GridBasicPage } from '../pages/grid/basic/pages';

// lists
import { AvatarPage as ListAvatarPage } from '../pages/lists/avatar/pages';

// loading
import { BasicPage as LoadingBasicPage } from '../pages/loading/basic/pages';


// navigation
import { BasicPage as NavigationBasicPage, NavigationDetailsPage } from '../pages/navigation/basic/pages';

// searchbar
import { BasicPage as SearchbarBasicPage } from '../pages/searchbars/basic/pages';

// tabs
import { IconTextPage as TabIconTextPage, TabIconTextContentPage } from '../pages/tabs/pages';

// pipes
import { DisplayRoutePipe } from '../pipes/display-route';

import {ReportPage} from '../pages/report/report'; 
import {FeedbackPage} from '../pages/feedback/feedback'; 
import { ResourcesPage } from '../pages/resources/resources';
import { PeerPage } from '../pages/peer/peer';
import { AboutPage } from '../pages/about/about';

import { LoginPage } from '../pages/login-page/login-page';


@NgModule({
  declarations: [
    MyApp,
LoginPage,
ListIconPage,
    ResourcesPage,
    PeerPage,
    AboutPage,
    FeedbackPage,
    ReportPage,

    ButtonComponentsPage,
    CardAdvancedSocialPage,
    CardBackgroundPage,
    GridBasicPage,
    ListAvatarPage,

    LoadingBasicPage,

    NavigationBasicPage,
    NavigationDetailsPage,

    SearchbarBasicPage,
    TabIconTextPage,
    TabIconTextContentPage,

    DisplayRoutePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp, {
      statusbarPadding: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListIconPage,
    AboutPage,
    ResourcesPage,
    FeedbackPage,
    PeerPage,
    ReportPage,
    ButtonComponentsPage,

    CardAdvancedSocialPage,
    CardBackgroundPage,

    GridBasicPage,
    ListAvatarPage,

    LoadingBasicPage,
    NavigationBasicPage,
    NavigationDetailsPage,
    SearchbarBasicPage,

    TabIconTextPage,
    TabIconTextContentPage,
  ],
  providers: []
})
export class AppModule { }
