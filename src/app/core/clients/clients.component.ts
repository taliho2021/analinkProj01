import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { DynamicTableService } from '../../services/dynamic-table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableData } from 'src/app/models/dynamic-table.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'street', 'city', 'latitude', 'username', 'email'];
  clientData: any;

  dataSource: any;

  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?:MatPaginator;

  constructor(private service: DynamicTableService) { }

  ngOnInit(): void {
     this.getTableData();

  }

  getTableData() {
    this.service.getTableDatas().subscribe((res) => {
      this.clientData = res as TableData[];  // response comes as data schema defined in model interface
      this.dataSource= new MatTableDataSource(this.clientData);
  })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  }

