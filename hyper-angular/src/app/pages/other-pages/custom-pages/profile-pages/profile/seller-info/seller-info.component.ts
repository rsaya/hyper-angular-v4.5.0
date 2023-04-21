import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-profile-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.scss']
})
export class SellerInfoComponent implements OnInit {


  @Input() loggedInUser: any = {};
  constructor() { }

  ngOnInit(): void {
  }


}
