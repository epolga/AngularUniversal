import {Component, Input, OnInit} from '@angular/core';
import {Design} from "../model/design";

@Component({
  selector: 'app-designs-card-list',
  templateUrl: './designs-card-list.component.html',
  styleUrls: ['./designs-card-list.component.css']
})
export class DesignsCardListComponent implements OnInit {

  constructor() { }

  @Input()
  designs: Design[];

  ngOnInit(): void {
  }

}
