import { CreateAdmsnComponent } from './create-admsn/create-admsn.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { AuthGuard } from './guard/auth.guard';
import { AdmissionComponent } from './admission/admission.component';
import { ResultPostsComponent } from './result-posts/result-posts.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestJobComponent } from './latest-job/latest-job.component';
import { ResultsComponent } from './results/results.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';

const routes: Routes = [
  { path: 'results', component: ResultsComponent },
  { path: 'latest-job', component: LatestJobComponent },
  { path: '', component: HomeComponent },
  {
    path: 'Registration',
    component: RegistrationComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserlistingComponent, canActivate: [AuthGuard] },
  {
    path: 'result-posts',
    component: ResultPostsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'admission', component: AdmissionComponent },
  {
    path: 'create-job',
    component: CreateJobComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-admsn',
    component: CreateAdmsnComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
