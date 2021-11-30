import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-app-component',
  templateUrl: './main-app-component.component.html',
  styleUrls: ['./main-app-component.component.scss']
})
export class MainAppComponentComponent implements OnInit {
  value = 'Clear me';
  constructor() { }

  ngOnInit(): void {
  }

}
