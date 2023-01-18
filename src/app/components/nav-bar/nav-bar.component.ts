import { UserService } from 'src/app/services/auth/user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Input() selected!: string;
  @Input() isLoggedIn: boolean = false;
  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {}

  logOut() {
    this.userService.logout();
  }

  checkIsAdmin(): boolean {
    return localStorage.getItem('role') === 'Admin';
  }
}
