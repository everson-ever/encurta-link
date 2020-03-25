import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthLayoutComponent } from './layout/components/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/components/content-layout/content-layout.component';
import { DashboardLayoutComponent } from './layout/components/dashboard-layout/dashboard-layout.component';

import { NavbarDashboardComponent } from './layout/components/navbar-dashboard/navbar-dashboard.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { FooterComponent } from './layout/components/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		AuthLayoutComponent,
		ContentLayoutComponent,
		DashboardLayoutComponent,
		NavbarComponent,
		NavbarDashboardComponent,
		FooterComponent
	],
	imports: [ BrowserModule, AppRoutingModule, CoreModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
