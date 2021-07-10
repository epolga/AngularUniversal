import {Component, Input, OnInit} from '@angular/core';
import {Design} from '../model/design';
import {DesignsService} from '../services/designs.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-designs-card-list',
  templateUrl: './designs-card-list.component.html',
  styleUrls: ['./designs-card-list.component.css']
})
export class DesignsCardListComponent implements OnInit {

  constructor(private designsService: DesignsService) { }

  @Input()
  designs$: Observable<Design[]>;
  ngOnInit(): void {
    this.designs$  = this.designsService.designs$;
    this.designsService.getNextRandomDesigns(3);
  }

  loadMoreDesigns($element): void {
    this.designsService.getNextRandomDesigns(3);
    $element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
