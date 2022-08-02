import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-detail',
  templateUrl: './mini-detail.component.html',
  styleUrls: ['./mini-detail.component.css']
})
export class MiniDetailComponent implements OnInit {

  @Input() pin: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
