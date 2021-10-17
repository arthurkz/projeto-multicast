import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PodcastsListComponent } from './components/pages/podcasts/podcasts-list/podcasts-list.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { LayoutComponent } from './components/pages/layout/layout.component';
import { PodcastComponent } from './components/pages/podcasts/podcast/podcast.component';

import { PodcastsService } from './services/podcast-service/podcasts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    PodcastsListComponent,
    SignUpComponent,
    LayoutComponent,
    PodcastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PodcastsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
