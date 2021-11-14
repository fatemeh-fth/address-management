import { Component, OnInit } from '@angular/core';
import { AddAddressComponent } from '../add-address/add-address.component';
import { AddressService } from '../services/address.service';
import { Address } from '../shared/address.model';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  constructor(private addressService: AddressService) { }

  list: Address[] = [];

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe(res => {
      this.list = res;
    });
  }

}
