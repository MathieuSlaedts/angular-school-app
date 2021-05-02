import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/core/services/page-title.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pageTitle: string = "Tableau de bord"

  constructor(private pageTitleService: PageTitleService) {
    this.pageTitleService.setTitle(this.pageTitle);
  }

  ngOnInit(): void {
  }

}
