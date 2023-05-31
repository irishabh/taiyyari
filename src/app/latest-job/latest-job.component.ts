import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './../service/auth.service';
import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-latest-job',
  templateUrl: './latest-job.component.html',
  styleUrls: ['./latest-job.component.css']
})
export class LatestJobComponent {
  constructor(
    private AuthService: AuthService,
    private Router: Router,
    private builder: FormBuilder
  ) {
    this.laodResults();
  }
  editData: any;
  displayColumns: string[] = [
    'latestJob',
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
  jobList: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;
  laodResults() {

    this.AuthService.GetAllJobs().subscribe(res => {
      this.jobList = res.map((e:any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
      this.dataSource = new MatTableDataSource(this.jobList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sorting;
        })
    // this.AuthService.GetAllLatestJob().subscribe((res) => {
    //   this.jobList = res;
    //   this.dataSource = new MatTableDataSource(this.jobList);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sorting;
    // });
  }
}
