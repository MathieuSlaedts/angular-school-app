import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/core/services/page-title.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  pageTitle: string = "Contenu introuvable";

  constructor(private pageTitleService: PageTitleService) {
    this.pageTitleService.setTitle(this.pageTitle);
  }

  ngOnInit(): void {
  }

}
