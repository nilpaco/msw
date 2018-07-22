import { Component, OnInit } from '@angular/core';
import { SpotService } from '../../services/spot.service';

@Component({
	selector: 'app-spot',
	templateUrl: './spot.component.html',
	styleUrls: [ './spot.component.scss' ]
})
export class SpotComponent implements OnInit {
	public spots: any[] = [];
	public loading = true;

	constructor(private spotService: SpotService) {}

	ngOnInit() {
		// setTimeout(() => {
		// 	this.spots = [ 1, 2, 3 ];

		// 	this.loading = false;
		// }, 2000);
		this.spotService.getUsers().subscribe((res) => {
			this.loading = false;
			this.spots = res;
		});
	}
}
