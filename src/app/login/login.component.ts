import { AuthService } from './../services/auth.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signIn: FormGroup;
  constructor(private authServive: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.signIn = new FormGroup ({
      username: new FormControl() ,
      password: new FormControl(),
    });
  }
  submit() {
  if (this.authServive.logIn(this.signIn.value)) {
  this.router.navigate(['']);
  }
  }
}


