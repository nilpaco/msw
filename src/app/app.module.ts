import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentesModule } from './componentes/componentes.module';

@NgModule({
	declarations: [ AppComponent, NavbarComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
		ComponentesModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
