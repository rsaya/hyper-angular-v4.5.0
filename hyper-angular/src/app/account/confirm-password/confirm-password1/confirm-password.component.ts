import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {

  today: number = Date.now();

  constructor () { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    document.body.classList.add('authentication-bg');
  }

}
