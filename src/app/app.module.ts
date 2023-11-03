import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BackgroundComponent } from './background/background.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { VisualizationsComponent } from './visualizations/visualizations.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// const appRoutes: Routes = [
//   { path: 'app', component: AppComponent },
//   { path: 'visualization', component: VisualizationsComponent }, // Replace 'AboutComponent' with your actual component name
// ];
//   // Add more routes as needed

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    BackgroundComponent,
    FormComponent,
    VisualizationsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
