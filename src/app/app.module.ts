import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BackgroundComponent } from './background/background.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'home', component: AppComponent }, // Replace 'HomeComponent' with your actual component name
  { path: 'about', component: MainContentComponent }, // Replace 'AboutComponent' with your actual component name
  // Add more routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    BackgroundComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
