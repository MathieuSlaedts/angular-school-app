import { Component, Input, OnInit } from '@angular/core';
import { NavTabElement } from '../../models/nav-tabs.model';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {

  @Input()
  elements: NavTabElement[]

  constructor() { }

  ngOnInit(): void {
  }

}
