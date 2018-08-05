import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Spot } from './spot.model';

@Component({
	selector: 'app-spots-list',
	templateUrl: './spots-list.component.html',
	styleUrls: [ './spots-list.component.scss' ]
})
export class SpotsListComponent implements OnInit {
	private selectedSpots: Spot[] = [];
	public spots: Spot[] = require('./spots.json');

	constructor(private router: Router) {}

	ngOnInit() {
		this.selectedSpots = JSON.parse(localStorage.getItem('spots') || '');
		this.updateModel();
	}

	addSpot($event: Spot) {
		const pos: number = this.selectedSpots.findIndex((spot) => spot.id === $event.id);

		if (pos < 0) {
			this.selectedSpots.push($event);
		} else {
			this.selectedSpots.splice(pos, 1);
		}
		this.updateModel();
	}

	addSpots() {
		localStorage.setItem('spots', JSON.stringify(this.selectedSpots));
		this.router.navigate([ '' ]);
	}

	updateModel() {
		this.spots.map((spot) => {
			return this.selectedSpots.find((sSpot) => sSpot.id === spot.id)
				? (spot._selected = true)
				: (spot._selected = false);
		});
	}
}
