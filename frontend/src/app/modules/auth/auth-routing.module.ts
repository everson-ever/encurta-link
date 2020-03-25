import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{ path: 'login', component: FormLoginComponent },
			{ path: 'cadastro', component: FormRegisterComponent }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AuthRoutingModule {}
