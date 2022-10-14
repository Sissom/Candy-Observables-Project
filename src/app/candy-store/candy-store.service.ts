import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Candy } from '../models/candy.model';

@Injectable({
  providedIn: 'root',
})
export class CandyStoreService {
  // Create a new "Subject" that emits the list when a new delivery occurs
  addSale = new Subject<Candy[]>();

  private candiesForSale: Candy[] = [
    new Candy('Milky Way', 1),
    new Candy('Snickers', 2),
    new Candy('Twix', 1.5),
    new Candy('Skittles', 3),
    new Candy('M&M', 4),
  ];

  getCandiesForSale() {
    return this.candiesForSale.slice();
  }

  addFiveCandies() {
    this.candiesForSale.push(
      new Candy('Milky Way', 1),
      new Candy('Snickers', 2),
      new Candy('Twix', 1.5),
      new Candy('Skittles', 3),
      new Candy('M&M', 4)
    );

    this.addSale.next(this.candiesForSale);
  }
}
