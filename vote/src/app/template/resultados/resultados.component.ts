import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  


  constructor() { }

 
  votosJedi: number = 0;
  votosEmpire: number = 0;

  

  ngOnInit(): void {
  }

  @Input() resultadoInicialJedi: number = 10;

  @Input() resultadoInicialEmpire: number = 10;

}
