import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { MobileMenuComponent } from './components/layout/mobile-menu/mobile-menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IconsModule } from './icons/icons.module';
import { RestService } from './services/rest.service';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MobileMenuComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    IconsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    MobileMenuComponent,
    NotFoundComponent
  ],
  providers: [
    RestService
  ]
})
export class SharedModule { }
