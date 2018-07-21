import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotComponent } from './spot/spot.component';

@NgModule({
	imports: [ CommonModule ],
	declarations: [ SpotComponent ],
	exports: [ SpotComponent ]
})
export class ComponentesModule {}
