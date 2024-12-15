import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'maplibre-gl';
// import 'maplibre-gl/dist/maplibre-gl.css';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit{

  @ViewChild('map') 
  public divMap?: ElementRef;

  constructor() {}
  
  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado.';

      const map = new Map({
      // container: 'map', // container id
      container: this.divMap.nativeElement, // Referencia al contenedor HTML
      style: 'https://demotiles.maplibre.org/style.json', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    // map.addControl(new maplibregl.NavigationControl(), 'top-right');
  }


}




  
