import { Component, OnInit } from '@angular/core';
import { travelofferfive } from '../travelfive';
import { travelofferfour } from '../travelfour';
import { travelofferone } from '../travelone';
import { traveloffersix } from '../travelsix';
import { traveloffertree } from '../traveltree';
import { traveloffertwo } from '../traveltwo';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  travelone = travelofferone;
  traveltwo = traveloffertwo;
  traveltree = traveloffertree; 
  travelfour = travelofferfour; 
  travelfive = travelofferfive;
  travelsix = traveloffersix


  constructor() { }

  ngOnInit(): void {
  }

}
