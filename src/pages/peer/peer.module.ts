import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeerPage } from './peer';

@NgModule({
  declarations: [
    PeerPage,
  ],
  imports: [
    IonicPageModule.forChild(PeerPage),
  ],
  exports: [
    PeerPage
  ]
})
export class PeerModule {}
