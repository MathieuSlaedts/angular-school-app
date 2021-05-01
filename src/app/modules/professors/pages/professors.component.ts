import { Component, Input, OnInit } from '@angular/core';
import { NavTabElement } from 'src/app/shared/models/nav-tabs.model';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss']
})
export class ProfessorsComponent implements OnInit {
  
  navTabsElements: NavTabElement[] = [
    {
      target: "/professeurs",
      label: "Liste des professeurs"
    },
    {
      target: "/professeurs/ajouter",
      label: "Ajouter un professeur"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
