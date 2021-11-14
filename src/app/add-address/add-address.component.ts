import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Address } from '../shared/address.model';

import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AddressService } from '../services/address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  currentStep = 1;
  form: FormGroup = new FormGroup({
    region: new FormControl(1),
    address: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    coordinate_mobile: new FormControl(null, [Validators.required, Validators.pattern(/09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}/)]),
    coordinate_phone_number: new FormControl(null, [Validators.required, Validators.pattern(/^0\d{2,3}\d{8}$/)]),
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
  })

  constructor(private addressService: AddressService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.currentStep = 2;
  }

  onMapSubmit(event: any) {
    this.addressService.addAddress({ ...this.form.value, lat: event.lat, lng: event.lng }).subscribe(res => {
      this.router.navigate(['/address-list'])
    });
  }
}
