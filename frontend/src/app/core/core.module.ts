import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LinkModule } from '../modules/link/link.module';

@NgModule({
	declarations: [ NavbarComponent ],
	imports: [ CommonModule, LinkModule ],
	exports: [ NavbarComponent ]
})
export class CoreModule {}
