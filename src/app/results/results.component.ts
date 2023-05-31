import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from './../service/auth.service';
import { Component, ViewChild, Inject } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  constructor(
    private AuthService: AuthService,
    private Router: Router,
    private builder: FormBuilder
  ) {
    this.laodResults();
  }
  editData: any;
  displayColumns: string[] = [
    'resultTitle',
    'desc',
    'eligibility',
    'examDate',
    'resultDate',
    'startDate',
    'lastDate',
    'notify',
    'applyUrl',

  ];
  resultList: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;
  laodResults() {
    this.AuthService.GetAllResults().subscribe(res => {
      this.resultList = res.map((e:any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
      this.dataSource = new MatTableDataSource(this.resultList);
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



}
