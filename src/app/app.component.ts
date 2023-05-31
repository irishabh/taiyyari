import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  title = 'Taiyyari';
  isMenuRqrd = false;
  isRqrd = false;
  role = 'admin';
  isSignedIn = false;
  constructor(private Router: Router, private service: AuthService ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (localStorage.getItem('user')!==null){
      this.isSignedIn = true;
    }
    else
      this.isSignedIn = false
  }



  ngDoCheck(): void {
    let currentUrl = this.Router.url;

    if (currentUrl == '/login' || currentUrl == '/Registration') {
      this.isMenuRqrd = false;
    } else {
      this.isMenuRqrd = true;
    }
    if (this.service.GetUserRole()) {
      this.isRqrd = true;
    } else {
      this.isRqrd = false;
    }
  }


}
