import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { ProfessorsComponent } from './modules/professors/pages/professors.component';
import { NavComponent } from './core/nav/nav.component';
import { UserBoxComponent } from './core/user-box/user-box.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ListComponent } from './shared/components/list/list.component';
import { NavTabsComponent } from './shared/components/nav-tabs/nav-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ProfessorsComponent,
    NavComponent,
    UserBoxComponent,
    ModalComponent,
    ListComponent,
    NavTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
