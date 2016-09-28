import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ChartService } from './chart.service';


@Component({
  selector: 'chart',
  moduleId: module.id, //this sets the path to relative
  templateUrl: 'chart.component.html',
  styleUrls: ['chart.component.css'],
  providers:[ChartService]

})

export class Chart implements OnInit {
  constructor(private ChartService: ChartService) {}
  ngOnInit() {
    this.ChartService.chart();
  }
}



