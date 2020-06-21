import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import mapStyle from 'variables/mapStyle.json';
import data from 'variables/appData.json';
import { Place } from 'src/shared/models/place.model';
import { CommonModule } from "@angular/common";
import { MapStyles } from 'src/shared/mapStyles/map.style';
import { TargetLocator } from 'selenium-webdriver';
import { GoogleMap } from '@angular/google-maps';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  public places: Place[];
  public filteredPlaces: Place[];
  public currentPlace: Place;
  searchBar: string = '';
  public innerHeight: any;
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  zoom: number = 14;
  placesData = data;
  mapStyles;
  options: google.maps.MapOptions;
  center: google.maps.LatLngLiteral = {
    lat: 54.262210,
    lng: 18.636135
  }
  label = {
    color: 'red',
    text: 'Marker label '
  }

  constructor() { }

  ngOnInit(): void {
    this.innerHeight = window.innerHeight;
    //console.log(JSON.stringify(mapStyle));
    this.getData();
    this.setOptions();
    this.setCurrentPlace(0);
    //console.log(this.places);
    this.search();
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

  setCurrentPlace(id: number) {
    this.currentPlace = this.places[id];
  }

  scroll() {
    const el: HTMLElement = document.getElementById('description');
    el.scrollIntoView();
  }

  search() {
    this.filteredPlaces = this.places.filter(c => c.title.toUpperCase().includes(this.searchBar.toUpperCase()) && c.id>0);
  }

  moveToCenter(center: google.maps.LatLngLiteral) {
    this.map.panTo(center);
  }

  
}
