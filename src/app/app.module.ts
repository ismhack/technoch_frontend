import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserModule,
    HeaderComponent, FooterComponent, ServicesComponent, AboutUsComponent, ReviewsComponent, ContactFormComponent

  ],
  providers: [ 

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }