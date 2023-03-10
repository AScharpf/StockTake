import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, transition, style, state, animate } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('fadeIn', [
      state('visible', style({
        opacity: '1',
        color: 'white',
      })),
      transition('void => visible', [
        animate('0.5s')
      ]),
    ])]
})


export class LandingPageComponent implements OnInit {
state: any;

  constructor() { }

  ngOnInit(): void {
  this.state='visible';
  }




}
