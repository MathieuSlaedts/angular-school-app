import { ChangeDetectorRef, Component } from '@angular/core';
import { PageTitleService } from './core/services/page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle: string;
  
  constructor(private pageTitleService: PageTitleService) {

    this.pageTitleService.onTitleChange.subscribe(value => this.pageTitle = value);
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log("test");
    console.log(this.pageTitle);
  }
}
