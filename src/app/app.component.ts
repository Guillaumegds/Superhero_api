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
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get('https://akabab.github.io/superhero-api/api/all.json').subscribe(
      heroes => {
        console.log(heroes);
        this.heroes = heroes;
      });
  }
}

