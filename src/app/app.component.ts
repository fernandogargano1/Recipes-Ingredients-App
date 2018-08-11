import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAEBEfmRpn8ItR2UKNb8KgDtb6FFaUzAzU",
      authDomain: "ng-recipe-book-ec14b.firebaseapp.com"      
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
