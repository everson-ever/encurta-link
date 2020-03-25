import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: './modules/link/link.module#LinkModule'
	},

	{
		path: 'dashboard',
		loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
	},

	{
		path: 'contato',
		loadChildren: './contact/contact/contact.module#ContactModule'
	},

	{
		path: 'login',
		loadChildren: './modules/auth/auth#AuthModule'
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
