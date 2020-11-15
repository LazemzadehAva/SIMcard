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
    private router: Router) { }

  ngOnInit() {
    this.signIn = new FormGroup({
      username: new FormControl(null, [Validators.required , this.forbiddenNames.bind(this), Validators.maxLength(5)]),
      password: new FormControl(null, [Validators.required , Validators.maxLength(5)]),
    });
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
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      // tslint:disable-next-line: object-literal-key-quotes
      return {'nameIsForbidden': true};
    }
    return null;
  }
}


