import { AuthService } from './../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signIn: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];
  constructor(
    private authServive: AuthService,
    private router: Router) {
    this.signIn = new FormGroup({
      // tslint:disable-next-line: max-line-length
      username: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')]),
      // tslint:disable-next-line: max-line-length
      password: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')]),
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.signIn);

    if (this.authServive.logIn(this.signIn.value)) {
      //  this.router.navigate(['']);

      if (this.authServive.isAdmin()) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['']);
      }
    }
  }
}


