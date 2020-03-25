import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormContactComponent } from './components/form-contact/form-contact.component';

const routes: Routes = [
	{
		path: '',
		children: [ { path: '', component: FormContactComponent } ]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ContactRoutingModule {}
