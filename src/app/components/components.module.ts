import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotComponent } from './spot/spot.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
	imports: [ CommonModule, HttpClientModule, RouterModule ],
	declarations: [ SpotComponent, NavbarComponent ],
	exports: [ SpotComponent, NavbarComponent ]
})
export class ComponentsModule {}
