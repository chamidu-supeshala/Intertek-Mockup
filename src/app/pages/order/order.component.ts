import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  dataList: any[] = [
    {
      "userId": 9,
      "loginName": "my order1",
      "loginCount": 39340,
      "state": "pending",
      "lastLoginTime": "2017-07-24 18:37:28",
      "lastLoginIp": "49.77.233.147",
      "createTime": "2017-04-13 12:15:43",
      "tenantId": 8
    },
    {
      "userId": 10,
      "loginName": "my order2",
      "loginCount": 8524,
      "state": "pending",
      "lastLoginTime": "2017-07-24 18:50:12",
      "lastLoginIp": "180.173.34.254",
      "createTime": "2017-04-13 12:30:59",
      "tenantId": 8
    },
    {
      "userId": 11,
      "loginName": "my order2",
      "loginCount": 3843,
      "state": "pending",
      "lastLoginTime": "2017-07-24 18:46:18",
      "lastLoginIp": "123.14.28.60",
      "createTime": "2017-04-14 15:19:09",
      "tenantId": 8
    },
    {
      "userId": 12,
      "loginName": "my order5",
      "loginCount": 1663,
      "state": "pending",
      "lastLoginTime": "2017-07-24 18:19:11",
      "lastLoginIp": "221.214.13.226",
      "createTime": "2017-04-14 15:19:43",
      "tenantId": 8
    },
    {
      "userId": 13,
      "loginName": "my order 6",
      "loginCount": 1648,
      "state": "pending",
      "lastLoginTime": "2017-07-24 17:48:35",
      "lastLoginIp": "171.221.227.31",
      "createTime": "2017-04-14 15:20:10",
      "tenantId": 8
    },
    {
      "userId": 14,
      "loginName": "my order 8",
      "loginCount": 1471,
      "state": "pending",
      "lastLoginTime": "2017-07-24 17:36:46",
      "lastLoginIp": "42.228.9.138",
      "createTime": "2017-04-14 15:20:39",
      "tenantId": 8
    },
    {
      "userId": 15,
      "loginName": "my order",
      "loginCount": 1459,
      "state": "pending",
      "lastLoginTime": "2017-07-24 16:55:04",
      "lastLoginIp": "123.118.189.185",
      "createTime": "2017-04-14 15:21:01",
      "tenantId": 8
    }
  ];

  checked = false;

  sideOpen: boolean = true;

  displayedColumns = ['select', 'id', 'email', 'status', 'date', 'ip', 'action'];
  dataSource = new MatTableDataSource<Element>(null);  
  selection = new SelectionModel<Element>(true, []);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource.data = this.dataList;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onEditTriggered(user) {
    console.log(user);
  }

  onDeleteTriggered(user) {
    let i = this.dataSource.data.indexOf(user);

    this.dataSource.data = [
      ...this.dataSource.data.slice(0, i),
      ...this.dataSource.data.slice(i + 1)
    ];
  }

  onSideTriggered() {
    this.sideOpen = false;
  }

  onNewOrderClicked() {
    this.router.navigate(['/order/detail']);
  }
}
