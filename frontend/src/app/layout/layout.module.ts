import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './components/content-layout/content-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';

@NgModule({
	declarations: [
		ContentLayoutComponent,
		AuthLayoutComponent,
		DashboardLayoutComponent,
		FooterComponent,
		NavbarComponent,
		NavbarDashboardComponent
	],
	imports: [ CommonModule ]
})
export class LayoutModule {}
