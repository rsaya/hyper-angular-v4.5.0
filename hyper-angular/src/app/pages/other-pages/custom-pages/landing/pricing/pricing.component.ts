import { Component, OnInit } from '@angular/core';

// types
import { PricingPlan } from 'src/app/shared/widget/pricing-card/pricing-card.model';

// data
import { PLANS } from './data';

@Component({
  selector: 'app-landing-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  pricingPlans: PricingPlan[] = [];

  constructor () { }

  ngOnInit(): void {
    this.pricingPlans = PLANS;
  }

}
