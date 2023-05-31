import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { LatestJobComponent } from './latest-job/latest-job.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { DeletepopupComponent } from './deletepopup/deletepopup.component';
import { ResultPostsComponent } from './result-posts/result-posts.component';
import { AdmissionComponent } from './admission/admission.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { CreateAdmsnComponent } from './create-admsn/create-admsn.component';
import { enviroment } from './environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

export const firebase = enviroment.firebase;

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    ResultsComponent,
    LatestJobComponent,
    RegistrationComponent,
    LoginComponent,
    UserlistingComponent,
    UpdatepopupComponent,
    DeletepopupComponent,
    ResultPostsComponent,
    AdmissionComponent,
    CreateJobComponent,
    CreateAdmsnComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
