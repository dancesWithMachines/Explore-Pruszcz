import { Component, OnInit, HostListener } from '@angular/core';
import mapStyle from 'variables/mapStyle.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  public innerHeight: any;
  zoom: number = 14;
  center: google.maps.LatLngLiteral = {
    lat: 54.262210,
    lng: 18.636135
  }
  options: google.maps.MapOptions = {
    maxZoom: 15,
    minZoom: 8,
    styles: mapStyle
  }

  constructor() { }

  ngOnInit(): void {
    this.innerHeight = window.innerHeight;
    //console.log(JSON.stringify(mapStyle));
   
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
  }


}
