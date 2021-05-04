import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-candidate-one',
  templateUrl: './candidate-one.component.html',
  styleUrls: ['./candidate-one.component.css']
})
export class CandidateOneComponent implements OnInit {

  title = 'A Ordem Jedi'

  constructor() { }

  ngOnInit(): void {
  }

}
