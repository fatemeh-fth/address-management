import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../shared/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  addAddress(address: Address) {
    return this.http.post(environment.baseUrl + "/karfarmas/address", address)
  }

  getAddresses() {
    return this.http.get<Address[]>(environment.baseUrl + "/karfarmas/address")
  }
}
