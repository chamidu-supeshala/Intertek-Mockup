import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  currentPage = 1;

  data;
  selectData;
  num = 0;

  constructor() {

  }

  ngOnInit() {
    // this.select();
    this.renderTable();
  }


  select() {
    this.data = {
      columns: [
        {key: 'id', title: 'id', type: 'selection'},
        {key: 'name', title: '姓名'},
        {key: 'name', title: '公司名称'},
        {key: 'name', title: '电话'},
      ],
      data: []
    };


    return this.data;
  }

  count() {
  }

  /*
   * 搜索事件
   * */
  onSearch(value) {

  }

  onSelect($event) {

  }

  onDelete() {
  }


  // table 数据渲染
  renderTable() {

  }

  // 分页事件
  onPage($event) {

  }

  getPageTotal() {
  }

}
