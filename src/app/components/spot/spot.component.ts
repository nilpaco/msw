import { Component, OnInit } from '@angular/core';
import { SpotService } from '../../services/spot.service';
import { forkJoin } from 'rxjs';
import { Spot } from '../../pages/spots-list/spot.model';

@Component({
	selector: 'app-spot',
	templateUrl: './spot.component.html',
	styleUrls: [ './spot.component.scss' ]
})
export class SpotComponent implements OnInit {
	public spots: Spot[];
	public loading = true;

	constructor(private spotService: SpotService) {}

	ngOnInit() {
		const selectedSpots: Spot[] = JSON.parse(localStorage.getItem('spots') || '');
		console.log(selectedSpots);
		const calls = selectedSpots.map((selectedSpot) => {
			return this.spotService.getSpot(selectedSpot.id);
		});
		this.loading = calls.length ? true : false;
		forkJoin(calls).subscribe((res) => {
			this.spots = res;
			this.loading = false;
		});
	}
}
