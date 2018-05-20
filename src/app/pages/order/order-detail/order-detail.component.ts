import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { trigger, transition, style, animate, query, stagger, animateChild } from "@angular/animations";
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('0.7s cubic-bezier(.8, -0.6, 0.26, 1.6)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ]),
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(150, animateChild()))
      ]),
    ])
  ]
})
export class OrderDetailComponent implements OnInit {

  sideOpen: boolean = true;

  selectedId: number = 0;

  myControl: FormControl = new FormControl();

  navItems = new MatTableDataSource(NAV_ITEM_DATA);
  options = [
    'One',
    'Two',
    'Three'
  ];

  filteredOptions: Observable<string[]>


  //animation
  list = [1, 2, 3, 4, 5, 6, 7, 8];
  selectedList = []
  counter = this.list.length + 1;

  constructor() {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterOption(val))
    );
  }

  filterOption(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  add() {
    this.list.push(this.counter++);
  }

  remove(index) {
    if (!this.list.length) {
      return;
    }
    this.list.splice(index, 1);
    this.selectedList.push(index);
  }


  elementClicked(id) {
    this.list = [];
    this.selectedId = id;
    let length = Math.floor(Math.random() * 4) + 4;
    this.add();
    this.recursiveAdd(length);
  }

  recursiveAdd(length) {
    var self = this;
    setTimeout(function(){
      self.add();
      length--;
      if (length >0) {
        self.recursiveAdd(length);
      }else {
        return;
      }
    }, 100);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.navItems.filter = filterValue;
  }
}


export interface NAV_ITEM {
  id: number;
  name: string;
  icon: string;
}

const NAV_ITEM_DATA: NAV_ITEM[] = [
  {id: 0, name: 'Mechanical Testing', icon: 'mail'},
  {id: 1, name: 'Ageing Testing', icon: 'mail'},
  {id: 2, name: 'Analytical Service for Polymers', icon: 'mail'},
  {id: 3, name: 'PolymerChemistry', icon: 'mail'},
];

