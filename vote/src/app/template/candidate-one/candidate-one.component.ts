import { Component, OnInit, Input, Output  } from '@angular/core';
import { votosJedi } from '../model/votosJedi';

@Component({
  selector: 'spa-candidate-one',
  templateUrl: './candidate-one.component.html',
  styleUrls: ['./candidate-one.component.css']
})
export class CandidateOneComponent implements OnInit {

  title = 'A Ordem Jedi';

  constructor() { }

  votosJedi: number = 0;

  


  ngOnInit(): void {
    this.votosJedi = 0;
    
  }

  adicionaVotoJedi() {
    this.votosJedi++;
    
  }
}

