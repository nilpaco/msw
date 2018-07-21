import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-spot',
	templateUrl: './spot.component.html',
	styleUrls: [ './spot.component.scss' ]
})
export class SpotComponent implements OnInit {
	public spots: any[] = [];
	public loading = true;

	constructor() {}

	ngOnInit() {
		setTimeout(() => {
			this.spots = [ 1, 2, 3 ];

			this.loading = false;
		}, 2000);
	}
}
