import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  imports: [],
  templateUrl: './loading-indicator.component.html',
  styleUrl: './loading-indicator.component.scss'
})
export class LoadingIndicatorComponent implements OnInit {
  @Input() progress = 0;
  readonly radius = 45;
  readonly circumference = 2 * Math.PI * this.radius;

  ngOnInit(): void {
  }
}
