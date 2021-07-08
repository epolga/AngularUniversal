import {Component, Input, OnInit} from '@angular/core';
import {Design} from '../model/design';
import {Album} from '../model/album';

@Component({
  selector: 'app-albums-tag-list',
  templateUrl: './albums-tag-list.component.html',
  styleUrls: ['./albums-tag-list.component.css']
})
export class AlbumsTagListComponent implements OnInit {

  constructor() { }
  @Input()
  albums: Album[];

  ngOnInit(): void {
  }

}
