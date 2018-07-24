import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotsListComponent } from './pages/spots-list/spots-list.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'spots',
		component: SpotsListComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
