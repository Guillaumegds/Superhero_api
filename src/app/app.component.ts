import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  results = '';
  heroes;
  selectPlayer = null;
  selectIa = null;
  healthPlayer = 100;
  healthIa = 100;

  getPerso(param) {
    this.selectPlayer = this.heroes[param];
    console.log(this.selectPlayer);
    this.getIa();
  }
  getIa() {
    const choice = Math.floor(Math.random() * 10);
    switch (choice) {
      case 0:
        this.selectIa = this.heroes[56];
        break;
      case 1:
        this.selectIa = this.heroes[55];
        break;
      case 2:
        this.selectIa = this.heroes[54];
        break;
      case 3:
        this.selectIa = this.heroes[53];
        break;
      case 4:
        this.selectIa = this.heroes[52];
        break;
      case 5:
        this.selectIa = this.heroes[51];
        break;
      case 6:
        this.selectIa = this.heroes[50];
        break;
      case 7:
        this.selectIa = this.heroes[49];
        break;
      case 8:
        this.selectIa = this.heroes[48];
        break;
      case 9:
        this.selectIa = this.heroes[47];
        break;
    }
    console.log(this.selectIa);
  }
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://akabab.github.io/superhero-api/api/all.json').subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes;
    });
  }
}
