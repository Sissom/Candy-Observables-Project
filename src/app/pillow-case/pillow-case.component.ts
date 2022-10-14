import { Candy } from './../models/candy.model';
import { PillowCaseService } from './pillow-case.service';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pillow-case',
  templateUrl: './pillow-case.component.html',
  styleUrls: ['./pillow-case.component.css'],
})
export class PillowCaseComponent implements OnInit, OnDestroy {
  // Create local Subscription
  myCandies: Candy[] = [];
  private myCandiesSub: Subscription;

  constructor(private pillowCaseService: PillowCaseService) {}

  ngOnInit(): void {
    this.myCandies = this.pillowCaseService.getMySecretStash();
    this.myCandiesSub = this.pillowCaseService.addCandy.subscribe(data=>{
      console.log(data);
      this.myCandies=data;
    });
    // Subscribe to the a Subject on pillowCase and store in a local Subscription
  }

  onEatAllCandy(): void {
    this.pillowCaseService.clearCandy();
  }

  ngOnDestroy() {
    this.myCandiesSub.unsubscribe();
}
}
