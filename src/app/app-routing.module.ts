import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { AppComponent } from './app.component'; // Example component
    import { AboutUsComponent } from './about-us/about-us.component'; // Example component

    const routes: Routes = [
      { path: '', component: AppComponent }, // Default route
      { path: 'about', component: AboutUsComponent }, // Example route
      // Add more routes as needed
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }