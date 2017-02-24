import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  templateUrl: './app/user/login.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
  `]
})
export class LoginComponent {
    loginInvalid = false;
    /*
        AOT CHANGE
        needed to add the below three properties. they are used in the template and for AOT to work, they need to be declared in the component as well.
     */
    public mouseoverLogin = false;
    public userName: string;
    public password: string;

    constructor(private authService: AuthService, private router: Router) {}

    login(formValues) {
        this.authService
            .loginUser(formValues.userName, formValues.password)
            .subscribe(response => {
                if (!response) {
                    this.loginInvalid = true;
                } else {
                    this.router.navigate(['events']);
                }
            });
        // console.log(formValues);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}