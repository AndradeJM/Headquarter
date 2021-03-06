import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { WorkSessionService } from './services/work-session.service';
import { OfficeComponent } from './office/office.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [WorkSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
