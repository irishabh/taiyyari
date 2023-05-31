import { Component } from '@angular/core';
import { AuthService } from './../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isSignIn = false;
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private route: Router
  ) {
    sessionStorage.clear();
  }
  userData:any;

  loginForm = this.builder.group({
    email: this.builder.control('',Validators.required),
    password: this.builder.control('',Validators.required)
  });

  async onSignIn(email:any, password:any){
    await this.service.logIn(email,password)
    if(this.service.isLogIn)
    this.isSignIn = true;
  }

  login() {
    if (this.loginForm.valid) {
      this.onSignIn(this.loginForm.value.email, this.loginForm.value.password)
      this.route.navigate(['']);
      // this.service.GetByCode(this.loginForm.value.username).subscribe((res) => {
      //   this.userData = res;
      //   console.log(this.userData);
      //   if (this.userData.password === this.loginForm.value.password) {
      //     if (this.userData.isactive) {
      //       sessionStorage.setItem('username', this.userData.id);
      //       sessionStorage.setItem('userrole', this.userData.role);
      //       this.route.navigate(['']);
      //     } else {
      //       this.toastr.error('Contact to Admin,Invalid Credentials');
      //     }
      //   }else {
      //     this.toastr.error('Invalid Credentials');
      //   }
      // });

    }
  }
}
