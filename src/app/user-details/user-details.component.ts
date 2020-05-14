import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Account } from '../model/account';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:User;
  constructor() { 
    this.user=new User();
    this.user.userId=1;
    this.user.userName="kislaya";
    this.user.password="kislaya";
    this.user.phoneNumber="123456789";
    this.user.loginName="kislaya";
  }

  ngOnInit(): void {
  }

}
