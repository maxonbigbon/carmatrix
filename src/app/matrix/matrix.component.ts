import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  GradationOfImpact = [
    "Critical",
    "Very hight",
    "Hight",
    "Rather hight",
    "Rather low",
    "Low"
  ];
  GradationOfProbability = [
    "Risk eliminated",
    "Low",
    "Rather low",
    "Rather high",
    "High",
    "Very high",
    "Critical",
    "Occurred"
  ];
}
