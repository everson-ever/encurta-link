import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinkModule } from '../modules/link/link.module';
import { ContactModule } from '../modules/contact/contact.module';
import { DashboardModule } from '../modules/dashboard/dashboard.module';
import { AuthModule } from '../modules/auth/auth.module';

@NgModule({
	declarations: [],
	imports: [ CommonModule, LinkModule, ContactModule, DashboardModule, AuthModule ],
	exports: []
})
export class CoreModule {}
