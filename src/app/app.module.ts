import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { PackagesComponent } from './componentes/packages/packages.component';
import { PackageDetailsComponent } from './componentes/packages/package-details/package-details.component';
import { PackageListComponent } from './componentes/packages/package-list/package-list.component';
import { PackageItemComponent } from './componentes/packages/package-list/package-item/package-item.component';
import { FoodListComponent } from './componentes/food-list/food-list.component';
import { FoodEditComponent } from './componentes/food-list/food-edit/food-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    PackagesComponent,
    PackageDetailsComponent,
    PackageListComponent,
    PackageItemComponent,
    FoodListComponent,
    FoodEditComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
