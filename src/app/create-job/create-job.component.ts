import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css'],
})
export class CreateJobComponent {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private toastr: ToastrService
  ) {}

  jobForm = this.builder.group({
    id: this.builder.control(''),
    latestJob: this.builder.control('', Validators.required),
    desc: this.builder.control('', Validators.compose([Validators.required])),
    notify: this.builder.control(''),
    eligibility: this.builder.control('', Validators.required),
    examDate: this.builder.control(''),
    resultDate: this.builder.control(''),
    startDate: this.builder.control(''),
    lastDate: this.builder.control(''),
    applyUrl: this.builder.control(''),
  });

  saveJobForm() {
    if (this.jobForm.valid) {
      this.service.addjob(this.jobForm.value).then((res) => {
        this.toastr.success('Job Details', 'Successfully Added')})
      // this.service.PostAllLatestJob(this.jobForm.value).subscribe((res) => {
      //   this.toastr.success('Job Details', 'Successfully Added');
      // });
    } else {
      this.toastr.warning('Please Enter valid Data');
    }
  }
}
