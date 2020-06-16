import { Component, OnInit, HostListener } from '@angular/core';
import mapStyle from 'variables/mapStyle.json';
import data from 'variables/appData.json';
import { Place } from 'src/shared/models/place.model';
import { CommonModule } from "@angular/common";
import { MapStyles } from 'src/shared/mapStyles/map.style';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  public innerHeight: any;
  public places: Place[];
  placesData = data;
  mapStyles;
  zoom: number = 14;
  center: google.maps.LatLngLiteral = {
    lat: 54.262210,
    lng: 18.636135
  }
  label = {
    color: 'red',
    text: 'Marker label '
  }
  options: google.maps.MapOptions;

  constructor() { }

  ngOnInit(): void {
    this.innerHeight = window.innerHeight;
    //console.log(JSON.stringify(mapStyle));
    this.getData();
    this.setOptions();
    console.log(this.places);
   
  }

  setOptions() {
    let mapStyles = new MapStyles();
    this.options = {
      maxZoom: 15,
      minZoom: 8,
      styles: mapStyles.mapTypeStyle
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
  }

  getData() {
    this.places = data;
  }

  
}
