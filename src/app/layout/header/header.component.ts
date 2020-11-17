import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenuItem } from 'primeng-lts/api';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = '';
  isAdmin = false;
  items: MenuItem[];

  constructor(authService: AuthService, private router: Router) {
    this.isAdmin = authService.isAdmin();
    this.items = [
      {
        label: 'Logout', icon: 'pi pi-refresh', command: () => {
          this.logout();
        }
      }];
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
