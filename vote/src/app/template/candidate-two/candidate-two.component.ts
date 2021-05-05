import { Component, OnInit, } from '@angular/core';

import { votosEmpire } from '../model/votosEmpire';

@Component({
  selector: 'spa-candidate-two',
  templateUrl: './candidate-two.component.html',
  styleUrls: ['./candidate-two.component.css'],
  
})


export class CandidateTwoComponent implements OnInit {

  title = 'O Império Galáctico'

  constructor() { }



  votosEmpire: number = 0;


  ngOnInit(): void {
    
    this.votosEmpire = 5;
  }

  
  adicionaVotoEmpire() {
    this.votosEmpire++;
  }
}
