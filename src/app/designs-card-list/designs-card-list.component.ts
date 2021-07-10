import {Component, Input, OnInit} from '@angular/core';
import {Design} from '../model/design';
import {DesignsService} from "../services/designs.service";

@Component({
  selector: 'app-designs-card-list',
  templateUrl: './designs-card-list.component.html',
  styleUrls: ['./designs-card-list.component.css']
})
export class DesignsCardListComponent implements OnInit {

  constructor(private designsService: DesignsService) { }

  @Input()
  designs: Design[];

  ngOnInit(): void {
  }

  scrollToElement($element): void {
    this.designsService.getNextRandomDesigns(3)
      .subscribe(result => this.designs = result);
    $element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
