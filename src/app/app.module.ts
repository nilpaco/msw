import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ComponentsModule } from './components/components.module';
import { SpotsListComponent } from './pages/spots-list/spots-list.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
	declarations: [ AppComponent, SpotsListComponent, HomeComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
		ComponentsModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
