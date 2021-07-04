import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentfiveComponent } from './components/componentfive/componentfive.component';
import { ComponentfourComponent } from './components/componentfour/componentfour.component';
import { ComponentthreeComponent } from './components/componentthree/componentthree.component';
import { ComponenttwoComponent } from './components/componenttwo/componenttwo.component';

const routes: Routes = [
  { path: 'two', component: ComponenttwoComponent },
  { path: 'three', component: ComponentthreeComponent },
  { path: 'four', component: ComponentfourComponent },
  { path: 'five', component: ComponentfiveComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }