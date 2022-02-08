import { ModelModule } from './../model/model.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from './store.component';
// import { StoreComponent } from '../model/model.module';
@NgModule({
  imports: [BrowserModule,ModelModule],
  exports: [StoreComponent],
  declarations: [StoreComponent],
})
export class StoreModule { }
