import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { icon, latLng, marker, Marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-select-map',
  templateUrl: './select-map.component.html',
  styleUrls: ['./select-map.component.css']
})
export class SelectMapComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { }

  @Output() mapSubmit = new EventEmitter();

  layers: any[] = [];
  latlng: any;
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  ngOnInit(): void {
  }

  onMapReady(event: any): void {
    event.on('click', this.onMapClick.bind(this));
  }

  onMapClick(event: any): void {
    const markerIcon = {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png"
      })
    };
    this.layers = [marker([event.latlng.lat, event.latlng.lng], markerIcon)];
    this.latlng = {
      lat: event.latlng.lat,
      lng: event.latlng.lng
    }
    this.cd.detectChanges();
  }

  onMapSubmit() {
    this.mapSubmit.emit(this.latlng)
  }
}
