import { Taiyyari } from './../models/taiyyari.model';
import { AuthService } from './../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  id: any;
  name: any | null;
  password: any | null;
  email: any | null;
  gender: any;
  isactive: boolean | undefined;
  role: any;
  registerform: any;
  isSignIn = false;
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: DataService,
    private service2: AuthService,
    private route: Router
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.registerform = this.builder.group({
      id: this.builder.control(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      name: this.builder.control('', Validators.required),
      password: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
      email: this.builder.control(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      gender: this.builder.control('Male'),
      isactive: this.builder.control(false),
      role: this.builder.control(''),
    });
  }
  async onSignUp(email:string, password:string){
    await this.service2.signUp(email,password)
    if(this.service2.isLogIn)
    this.isSignIn = true;
  }
  proceedregistration() {
    if (this.registerform.valid) {
      this.onSignUp(this.registerform.value.email,this.registerform.value.password);
      this.service2.registerUser(this.registerform.value).then((res) => {
        this.registerform = res;
      });
      console.log(this.registerform.value);
      this.toastr.success(
        'Please Contact to Admin for Enable the Account',
        'Registered Successfully'
      );
      this.route.navigate([LoginComponent]);
    } else {
      this.toastr.warning('Please Enter valid Data');
      console.log(this.registerform.value);
    }
  }



  // FirebaseReg(value:any){

  //   set(ref(this.db,"/user"+ value.id),{
  //     id: value.id,
  // name: value.name,
  // password: value.password,
  // email: value.email,
  // gender: value.gender,
  // isactive: value.isactive,
  // role: value.role

  //   });
  //   this.toastr.success('User Created')
  // }
}
