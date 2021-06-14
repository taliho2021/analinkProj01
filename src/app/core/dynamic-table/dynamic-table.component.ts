import { Component, OnInit } from '@angular/core';

import { DynamicTableService } from '../../services/dynamic-table.service';
import { TableData } from 'src/app/models/dynamic-table.model';

// to use the service we need to

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  tableData: any;   //storing the data in this variable

  constructor(private service: DynamicTableService) { }    //dependency injection

  ngOnInit(): void {
    this.getTableData();   // calling the getTableData() after the constructor when the ngOnInit(0 is envoked)
  }

  getTableData() {
    this.service.getTableDatas().subscribe((res) => {
      this.tableData = res as TableData[];  // response comes as data schema defined in model interface
    })
  }
}
