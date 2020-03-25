import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateLinkComponent } from './components/generate-link/generate-link.component';
import { OpenShortLinkComponent } from './components/open-short-link/open-short-link.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{ path: '', component: GenerateLinkComponent },
			{ path: ':short', component: OpenShortLinkComponent }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class LinkRoutingModule {}
