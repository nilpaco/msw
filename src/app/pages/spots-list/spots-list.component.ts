import { Component } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
	selector: 'app-spots-list',
	templateUrl: './spots-list.component.html',
	styleUrls: [ './spots-list.component.scss' ]
})
export class SpotsListComponent {
	private selectedSpots = [];

	constructor(private router: Router) {}

	addSpot($event: number) {
		const pos = this.selectedSpots.indexOf($event);
		if (pos < 0) {
			this.selectedSpots.push($event);
		} else {
			this.selectedSpots.splice(pos, 1);
		}
	}

	addSpots() {
		localStorage.setItem('spots', JSON.stringify(this.selectedSpots));
		this.router.navigate([ '' ]);
	}
}
