import { Component, Input, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/core/services/page-title.service';
import { NavTabElement } from 'src/app/shared/models/nav-tabs.model';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss']
})
export class ProfessorsComponent implements OnInit {

  pageTitle: string = "Professeurs";
  
  subNav: NavTabElement[] = [
    {
      target: "/professeurs",
      label: "Liste des professeurs"
    },
    {
      target: "/professeurs/ajouter",
      label: "Ajouter un professeur"
    }
  ]

  constructor(private pageTitleService: PageTitleService) {
    this.pageTitleService.setTitle(this.pageTitle);}

  ngOnInit(): void {
  }

}
