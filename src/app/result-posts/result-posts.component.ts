import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-result-posts',
  templateUrl: './result-posts.component.html',
  styleUrls: ['./result-posts.component.css'],
})
export class ResultPostsComponent {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private toastr: ToastrService
  ) {}
  resultForm = this.builder.group({
    id: this.builder.control(''),
    resultTitle: this.builder.control('', Validators.required),
    desc: this.builder.control('', Validators.compose([Validators.required])),
    notify: this.builder.control(''),
    eligibility:this.builder.control('', Validators.required),
    examDate:this.builder.control(''),
    resultDate:this.builder.control(''),
    startDate: this.builder.control(''),
    lastDate: this.builder.control(''),
    applyUrl: this.builder.control(''),
  });
  saveResultForm() {
    if (this.resultForm.valid) {
      this.service.addResults(this.resultForm.value).then((res) => {
        this.toastr.success('Job Details', 'Successfully Added')})
      // this.service.addResult(this.resultForm.value).subscribe((res) => {
      //   this.toastr.success(
      //     'Result Details',
      //     'Successfully Added'
      //   );
      // });
    } else {
      this.toastr.warning('Please Enter valid Data');
      console.log(this.resultForm);
    }
  }
}
