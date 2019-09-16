import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-name',
  templateUrl: './full-name.component.html',
  styleUrls: ['./full-name.component.css']
})
export class FullNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  states = [
    {value: 'ca', viewValue: 'California'},
    {value: 'wa', viewValue: 'washington'},
    {value: 'tx', viewValue: 'texas'}
  ];
}