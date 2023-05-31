import { DeletepopupComponent } from './../deletepopup/deletepopup.component';
import { UpdatepopupComponent } from './../updatepopup/updatepopup.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './../service/auth.service';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css'],
})
export class UserlistingComponent {
  constructor(
    private AuthService: AuthService,
    private dialougeBox: MatDialog
  ) {
    this.loadUser();
  }
  userList: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;

  loadUser() {
    this.AuthService.GetAllAdmission().subscribe(res => {
      this.userList = res.map((e:any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sorting;
        })

    // this.AuthService.GetAll().subscribe((res) => {
    //   this.userList = res;
    //   this.dataSource = new MatTableDataSource(this.userList);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sorting;
    // });
  }

  displayColumns: string[] = [
    'username',
    'name',
    'email',
    'role',
    'status',
    'action'
  ];
  updateUser(code: any) {
   const popUp= this.dialougeBox.open(UpdatepopupComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width:'50%',
      data:{
        usercode:code
      }
    })
    popUp.afterClosed().subscribe(res=>{
      this.loadUser();
    });
  }
  deleteUser(code: any) {
    const popUp= this.dialougeBox.open(DeletepopupComponent,{
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'50ms',
      width:'50%',
      data:{
        usercode:code
      }
    })
    popUp.afterClosed().subscribe(res=>{
      this.loadUser();
    });
  }

  openDialogue() {}
}
