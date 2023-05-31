import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-admsn',
  templateUrl: './create-admsn.component.html',
  styleUrls: ['./create-admsn.component.css'],
})
export class CreateAdmsnComponent {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private toastr: ToastrService
  ) {}

  admsnForm = this.builder.group({
    id: this.builder.control(''),
    admsnTitle: this.builder.control('', Validators.required),
    desc: this.builder.control('', Validators.required),
    notify: this.builder.control(''),
    eligibility: this.builder.control('', Validators.required),
    examDate: this.builder.control(''),
    resultDate: this.builder.control(''),
    startDate: this.builder.control(''),
    lastDate: this.builder.control(''),
    applyUrl: this.builder.control(''),
  });

  saveAdmsnForm() {
    if (this.admsnForm.valid) {
      this.service.addaddmission(this.admsnForm.value).then((res) => {
        this.toastr.success('Admission Details', 'Successfully Added')
      })
      // this.service.PostAdmission(this.admsnForm.value).subscribe((res) => {
      //   this.toastr.success('Admission Details', 'Successfully Added');
      // });
    } else {
      this.toastr.warning('Please Enter valid Data');
    }
  }
}
