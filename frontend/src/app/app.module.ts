import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

@NgModule({
	declarations: [ AppComponent, AuthLayoutComponent, ContentLayoutComponent ],
	imports: [ BrowserModule, AppRoutingModule, CoreModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
