import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotComponent } from './spot/spot.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [ CommonModule, HttpClientModule ],
	declarations: [ SpotComponent ],
	exports: [ SpotComponent ]
})
export class ComponentesModule {}
