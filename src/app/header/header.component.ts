import { LocalStorageService } from './../services/local-storage.service';
import { Validators } from '@angular/forms';

import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   user = '';
  isAdmin = false ;
  constructor(private authService: AuthService,
              private router: Router) {
    this.isAdmin = authService.isAdmin();
    console.log(this.isAdmin);

  }

  ngOnInit() {
    this.user = localStorage.getItem('name');
  }

}
