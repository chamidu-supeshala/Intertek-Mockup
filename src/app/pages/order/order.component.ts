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

  checked = false;

  sideOpen: boolean = true;

  displayedColumns = ['select', 'id', 'email', 'status', 'date', 'ip', 'action'];
  dataSource = new MatTableDataSource<Element>(null);  
  selection = new SelectionModel<Element>(true, []);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    @Inject('OrderService') private _service,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUserList();
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

  getUserList() {
    this._service.getUserList();
    this._service.userList$.subscribe(res => {
      this.dataSource.data = res;
    });
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
