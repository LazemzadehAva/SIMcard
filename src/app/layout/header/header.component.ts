import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = '';
  isAdmin = false;

  constructor(private authService: AuthService, private router: Router) {
    this.isAdmin = authService.isAdmin();
  }

  ngOnInit() {
    console.log('header init');
    this.user = localStorage.getItem('name');
  }

  logout() {
    localStorage.clear();
    this.user = null;
    this.router.navigate(['']);
  }
}
