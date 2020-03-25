import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/components/content-layout/content-layout.component';
import { AuthLayoutComponent } from './layout/components/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layout/components/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
	{
		path: '',
		component: ContentLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: './modules/link/link.module#LinkModule'
			},

			{
				path: 'contato',
				loadChildren: './modules/contact/contact.module#ContactModule'
			}
		]
	},

	{
		path: 'auth',
		component: AuthLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: './modules/auth/auth.module#AuthModule'
			}
		]
	},

	{
		path: 'dashboard',
		component: DashboardLayoutComponent,
		children: [
			{
				path: 'dashboard',
				loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
			}
		]
	},

	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '/login'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
