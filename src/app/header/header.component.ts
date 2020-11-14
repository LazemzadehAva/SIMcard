import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = '';
  isAdmin = false;

  constructor(authService: AuthService) {
    this.isAdmin = authService.isAdmin();
  }

  ngOnInit() {
  }
}
