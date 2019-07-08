import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, FlexLayoutModule, AngularFireModule, AngularFirestoreModule
  ],
  exports: [
    FlexLayoutModule, AngularFireModule, AngularFirestoreModule
  ]
})
export class SharedModule { }
