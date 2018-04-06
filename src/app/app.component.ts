import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fighting Heroes';
  results = '';
  heroes;
  hero;
  selectPlayer = null;
  selectIa = null;
  healthPlayer = 100;
  healthIa = 100;

  getPerso(param) {
    this.selectPlayer = this.heroes[param];
    console.log(this.selectPlayer);
   // this.getIa();
  }
  // getIa() {
  //   const choice = Math.floor(Math.random() * 10);
  //   switch (choice) {
  //     case 0:
  //       this.selectIa = this.heroes[560];
  //       break;
  //     case 1:
  //       this.selectIa = this.heroes[550];
  //       break;
  //     case 2:
  //       this.selectIa = this.heroes[540];
  //       break;
  //     case 3:
  //       this.selectIa = this.heroes[530];
  //       break;
  //     case 4:
  //       this.selectIa = this.heroes[520];
  //       break;
  //     case 5:
  //       this.selectIa = this.heroes[510];
  //       break;
  //     case 6:
  //       this.selectIa = this.heroes[500];
  //       break;
  //     case 7:
  //       this.selectIa = this.heroes[490];
  //       break;
  //     case 8:
  //       this.selectIa = this.heroes[480];
  //       break;
  //     case 9:
  //       this.selectIa = this.heroes[470];
  //       break;
  //   }
  //   console.log(this.selectIa);
  // }

  constructor(private http: HttpClient) {
  }

  getPerso(param)

  ngOnInit(): void {
    this.http.get('https://akabab.github.io/superhero-api/api/all.json').subscribe(
      heroes => {
        console.log(heroes);
        this.heroes = heroes;
      });
  }
}
// <div *ngIf='selectPlayer; then game else selectMenu'>
// </div>
// <div class='container'>
// <ng-template #selectMenu>
// <p>Choose your Hero ...</p>
// <div class='row'>
// <div class=' mx-auto'>
// <p>{{heroes[560].name}}</p>
// <img (click)='getPerso(560)' src="{{heroes[560].images.sm}}" />
// </div>
// <div class='mx-auto'>
// <p>{{heroes[550].name}}</p>
// <img (click)=' getPerso(550) ' src="{{heroes[550].images.sm}}" />
// </div>
// <div class='mx-auto'>
// <p>{{heroes[540].name}}</p>
// <img (click)='getPerso(540)' src="{{heroes[540].images.sm}}" />
// </div>
// <div class='mx-auto'>
// <p>{{heroes[530].name}}</p>
// <img (click)=' getPerso(530) ' src="{{heroes[530].images.sm}}" />
// </div>
// <div class='mx-auto'>
// <p>{{heroes[520].name}}</p>
// <img (click)='getPerso(520)' src="{{heroes[520].images.sm}}" />
// </div>
// <div class='mx-auto'>
// <p>{{heroes[510].name}}</p>
// <img (click)=' getPerso(510) ' src="{{heroes[510].images.sm}}" />
// </div>
// <div class='mx-auto'>
// <p>{{heroes[500].name}}</p>
// <img (click)='getPerso(500)' src="{{heroes[500].images.sm}}" />
// </div>
// <div class='mx-auto'>
// <p>{{heroes[490].name}}</p>
// <img (click)=' getPerso(490) ' src="{{heroes[490].images.sm}}" />
// </div>
// <div class='mx-auto'>
// <p>{{heroes[480].name}}</p>
// <img (click)='getPerso(480)' src="{{heroes[480].images.sm}}" />
// </div>
// <div class='mx-auto'>
// <p>{{heroes[470].name}}</p>
// <img (click)=' getPerso(470) ' src="{{heroes[470].images.sm}}" />
// </div>
// </div>
// </ng-template>

// <ng-template #game>
// <div class='row mx-auto'>
// <div class='offset-2 col-2'>
// <p>You</p>
// <img src='{{selectPlayer.images.sm}} ' />
// <p>vie : /100</p>
// </div>

// <div class='offset-2 col-2'>
// <p>Your enemy</p>
// <img src='{{selectIa.images.sm}} ' />
// <p>vie : /100</p>
// </div>
// </div>
// </ng-template>
// </div>
