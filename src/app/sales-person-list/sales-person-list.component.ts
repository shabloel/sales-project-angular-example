import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  salesPersonList: SalesPerson[] = [
    new SalesPerson("James", "Last", "last@gmail.com", 32), 
    new SalesPerson("Eva", "Cassidy", "cassidy@yahoo.com", 50),
    new SalesPerson("Clay", "Shaw", "shaw@outlook.com", 12),
    new SalesPerson("Marissa", "Landcook", "lc@gmail.com", 25)
  ];

  ngOnInit(): void {
  }

}
