import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  resultadoJedi = 2;
  resultadoEmpire = 1;


  constructor() { }

  ngOnInit(): void {
  }

}
