import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';
import {
  ClarityIcons,
  userIcon,
  flameIcon,
  boltIcon,
  certificateIcon,
} from '@cds/core/icon';

ClarityIcons.addIcons(userIcon, flameIcon, boltIcon, certificateIcon);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule,
    CdsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
