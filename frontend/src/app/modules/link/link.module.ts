import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenerateLinkComponent } from './components/generate-link/generate-link.component';
import { OpenShortLinkComponent } from './components/open-short-link/open-short-link.component';
import { LinkRoutingModule } from './link-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [ GenerateLinkComponent, OpenShortLinkComponent ],
	imports: [ CommonModule, FormsModule, ReactiveFormsModule, LinkRoutingModule, HttpClientModule, SharedModule ],
	exports: [ GenerateLinkComponent, OpenShortLinkComponent ]
})
export class LinkModule {}
