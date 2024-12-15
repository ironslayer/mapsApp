import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'maplibre-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{
  

  @ViewChild('map') 
  public divMap?: ElementRef;
  public zoom: number = 9;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.5, 40);



  ngAfterViewInit(): void {

    

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado.';

      this.map = new Map({
      // container: 'map', // container id
      container: this.divMap.nativeElement, // Referencia al contenedor HTML
      style: 'https://demotiles.maplibre.org/style.json', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners();
    // map.addControl(new maplibregl.NavigationControl(), 'top-right');
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListeners(){
    if (!this.map) {
      throw 'Mapa no inicializado.'
    }
    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      if( this.map!.getZoom() < 13 ) return;
      this.zoom = this.map!.getZoom();
      this.map!.zoomTo(13);
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
    });

    // Los listener se deben destruir


  }

  zoomIn(){
    this.map?.zoomIn();

  }

  zoomOut(){
    this.map?.zoomOut();
    
  }

  zoomChanged( value:string ){
    this.zoom = Number(value);
    this.map?.zoomTo( this.zoom );
  }


}
