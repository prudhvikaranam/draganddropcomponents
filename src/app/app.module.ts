import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentoneComponent } from './components/componentone/componentone.component';
import { ComponenttwoComponent } from './components/componenttwo/componenttwo.component';
import { ComponentthreeComponent } from './components/componentthree/componentthree.component';
import { ComponentfourComponent } from './components/componentfour/componentfour.component';
import { ComponentfiveComponent } from './components/componentfive/componentfive.component';
import { AppRoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { DragDropModule } from '@angular/cdk/drag-drop';


import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ComponentoneComponent,
    ComponenttwoComponent,
    ComponentthreeComponent,
    ComponentfourComponent,
    ComponentfiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgDragDropModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
