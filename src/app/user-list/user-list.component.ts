import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  ngOnInit() {

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    this.users = storedUsers;
  }
}
