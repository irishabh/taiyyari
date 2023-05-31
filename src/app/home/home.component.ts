import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './../service/auth.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private AuthService: AuthService,
    private Router: Router,
    private builder: FormBuilder
  ) {
    this.laodResults();
    this.laodLatestJob();
    this.laodAdmission();
  }
  editData: any;
  displayColumns: string[] = [
    'resultTitle',
    'examDate',
    'resultDate',
    'startDate',
    'lastDate',

  ];
  displayColumns2: string[] = [
    'latestJob',
    'examDate',
    'resultDate',
    'startDate',
    'lastDate',

  ];
  displayColumns3: string[] = [
    'admsnTitle',
    'examDate',
    'resultDate',
    'startDate',
    'lastDate',

  ];
  resultList0: any;
  resultList1: any;
  resultList2: any;
  dataSource: any;
  dataSource1: any;
  dataSource2: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;
  laodResults() {
    this.AuthService.GetAllResults().subscribe(res => {
      this.resultList0 = res.map((e:any) => {
        const data1 = e.payload.doc.data();
        data1.id = e.payload.doc.id;
        return data1;
      })
      this.dataSource = new MatTableDataSource(this.resultList0);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sorting;
        })
    // this.AuthService.GetAllResults().subscribe((res) => {
    //   this.resultList = res;
    //   this.dataSource = new MatTableDataSource(this.resultList);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sorting;
    // });
  }

  laodLatestJob() {
    this.AuthService.GetAllJobs().subscribe(res => {
      this.resultList1 = res.map((e:any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
      this.dataSource1 = new MatTableDataSource(this.resultList1);
      this.dataSource1.paginator = this.paginator;
      this.dataSource1.sort = this.sorting;
    })
    // this.AuthService.GetAllLatestJob().subscribe((res) => {
    //   this.resultList1 = res;
    //   this.dataSource1 = new MatTableDataSource(this.resultList1);
    //   this.dataSource1.paginator = this.paginator;
    //   this.dataSource1.sort = this.sorting;
    // });
  }

  laodAdmission() {
    this.AuthService.GetAllAdmission().subscribe(res => {
      this.resultList2 = res.map((e:any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
      this.dataSource2 = new MatTableDataSource(this.resultList2);
      this.dataSource2.paginator = this.paginator;
      this.dataSource2.sort = this.sorting;
    })
    // this.AuthService.GetAllAdmsn().subscribe((res) => {
    //   this.resultList2 = res;
    //   this.dataSource2 = new MatTableDataSource(this.resultList2);
    //   this.dataSource2.paginator = this.paginator;
    //   this.dataSource2.sort = this.sorting;
    // });
  }
}
