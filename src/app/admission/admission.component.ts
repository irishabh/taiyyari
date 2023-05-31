import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent {
  constructor(
    private AuthService: AuthService,
    private Router: Router,
    private builder: FormBuilder
  ) {
    this.laodResults();
  }
  editData: any;
  displayColumns: string[] = [
    'admsnTitle',
    'desc',
    'eligibility',
    'Posts',
    'examDate',
    'resultDate',
    'startDate',
    'lastDate',
    'notify',
    'applyUrl',

  ];
  admsnList: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;
  laodResults() {
    this.AuthService.GetAllAdmission().subscribe(res => {
      this.admsnList = res.map((e:any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
      this.dataSource = new MatTableDataSource(this.admsnList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sorting;
        })




    }
    // this.AuthService.GetAllAdmsn().subscribe((res) => {
    //   this.admsnList = res;
    //   this.dataSource = new MatTableDataSource(this.admsnList);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sorting;
    // });
  }
