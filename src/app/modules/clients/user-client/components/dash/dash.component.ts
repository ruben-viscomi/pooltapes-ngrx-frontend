import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  // TODO: replace any with proper interface
  categories: any = {};
  pins: any = {};

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ categories, pins }) => {
      this.categories = categories;
      this.pins = pins;
    });
  }

}
