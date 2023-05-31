import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css'],
})
export class UpdatepopupComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toaster: ToastrService,
    private dialog: MatDialogRef<UpdatepopupComponent>
  ) {}
  editData: any;

  ngOnInit(): void {
     this.service.getRole().subscribe((res) => {
     this.roleList = res.map((e:any)=>{
      const data = e.payload.doc.data()
    data.id=e.payload.doc.id;
  return data});

   }, (err) =>{
    alert('Error while fetching data')
   });
    if (this.data.usercode != null && this.data.usercode != '') {
      // this.service.GetByCode(this.data.usercode).subscribe((res) => {
      //   this.editData = res;
      //   this.registerform.setValue({id:this.editData.id,name:this.editData.name,
      //     email:this.editData.email,password:this.editData.password,gender:this.editData.gender,
      //     role:this.editData.role, isactive:this.editData.isactive})
      // });
    }
  }

  roleList: any;

  registerform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    password: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control(''),
    isactive: this.builder.control(false),
    role: this.builder.control('', Validators.required),
  });
  updateuser() {
    if (this.registerform.valid) {
      // this.service
      //   .Upadate(this.registerform.value.id, this.registerform.value)
      //   .subscribe((res) => {
      //     this.toaster.success('Updated Successfully');
      //     this.dialog.close;
      //   });
    } else {
      this.toaster.warning('Please Select Role');
    }
  }
}
