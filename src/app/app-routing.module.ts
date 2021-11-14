import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddressListComponent } from './address-list/address-list.component';

const routes: Routes = [
  { path: '', component: AddAddressComponent },
  { path: 'address-list', component: AddressListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
