import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'maplibre-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent  {
  @Input()
  public lngLat?: [number, number];
  @ViewChild('map') 
  public divMap?: ElementRef;
  
  ngAfterViewInit(): void {

    if ( !this.divMap?.nativeElement ) throw "Map div no found."
    if ( !this.lngLat ) throw "LngLat can'nt be null. "

    const map = new Map({
      // container: 'map', // container id
      container: this.divMap.nativeElement, // Referencia al contenedor HTML
      style: 'https://demotiles.maplibre.org/style.json', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false,
    });

    new Marker()
    .setLngLat( this.lngLat )
    .addTo( map )
    
  }

}
