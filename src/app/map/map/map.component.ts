import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Coordinate } from '../../shared/coordinate.model';

import * as L from 'leaflet';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'map-view',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {
  /**
   * Center/marker coordinate.
   */
  @Input()
  coordinate: Coordinate = {lon: 0, lat: 0};

  map;

  zoom = 5;

  markers = [
    L.circle([0, 0], {radius: 1000})
  ];

  marker: L.Marker;

  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png'
    })
  };

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: this.zoom,
    center: L.latLng(0, 0)
  };

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.coordinate && changes.coordinate.currentValue) {
      const newCoordinate: [number, number] = [changes.coordinate.currentValue.lat, changes.coordinate.currentValue.lon];

      if (!this.marker) {
        this.marker = L.marker(newCoordinate, this.markerIcon)
        .addTo(this.map);
      } else {
        this.marker.setLatLng(newCoordinate);
      }

      this.map.panTo(newCoordinate);
    }
  }

  onMapReady(map: L.Map) {
    this.map = map;
  }
}
