import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddAddressComponent } from './add-address/add-address.component';
import { AddressListComponent } from './address-list/address-list.component';
import { SelectMapComponent } from './select-map/select-map.component';

@NgModule({
  declarations: [
    AppComponent,
   AddAddressComponent,
   AddressListComponent,
   SelectMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
