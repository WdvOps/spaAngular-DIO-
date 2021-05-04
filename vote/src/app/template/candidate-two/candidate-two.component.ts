import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-candidate-two',
  templateUrl: './candidate-two.component.html',
  styleUrls: ['./candidate-two.component.css']
})
export class CandidateTwoComponent implements OnInit {

  title = 'O Império Galáctico'

  constructor() { }

  ngOnInit(): void {
  }

}
