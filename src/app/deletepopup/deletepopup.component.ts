import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deletepopup',
  templateUrl: './deletepopup.component.html',
  styleUrls: ['./deletepopup.component.css']
})
export class DeletepopupComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toaster: ToastrService,
    private dialog: MatDialogRef<DeletepopupComponent>
  ) {}
  editData: any;

  ngOnInit(): void {
    // this.service.GetAll().subscribe(res => {
    //   this.userList = res;
    // });
    if (this.data.usercode != null && this.data.usercode != '') {
      // this.service.GetByCode(this.data.usercode).subscribe((res) => {
      //   this.editData = res;
      //   this.deleteform.setValue({id:this.editData.id,name:this.editData.name,
      //     email:this.editData.email,password:this.editData.password,gender:this.editData.gender,
      //     role:this.editData.role, isactive:this.editData.isactive})
      // });
    }
  }

  userList: any;

  deleteform = this.builder.group({
    id: this.builder.control('', Validators.required),
    name: this.builder.control(''),
    password: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control(''),
    isactive: this.builder.control(''),
    role: this.builder.control(''),
  });
  deleteUser() {
    if (this.deleteform.valid) {
      // this.service
      //   .deleteUser(this.deleteform.value.id, this.deleteform.value)
      //   .subscribe(res => {
      //     this.toaster.success('Deleted Successfully');
      //     this.dialog.close;
      //   });
    } else {
      this.toaster.warning('Please Select User');
    }
  }
}
