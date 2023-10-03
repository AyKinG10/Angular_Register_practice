import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute) {}

ngOnInit() {
  const userId = this.route.snapshot.params['id'];

  //айди арқылы ақпарат алу
  const storedUser = localStorage.getItem('users');
  if (storedUser) {
    const users = JSON.parse(storedUser);
    this.user = users.find(user => user.id === userId);
  }

}

}
