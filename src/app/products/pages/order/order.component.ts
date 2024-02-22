import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | '' = '';
  public heroes: Hero[] = [
    {
      name: 'Super-Man',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    },
    {
      name: 'Wonder Woman',
      canFly: true,
      color: Color.red
    },
  ];

  toogleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  sortedBy( sorted: keyof Hero) {
    this.orderBy = sorted;
  }

}
