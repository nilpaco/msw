import { Component, OnInit } from '@angular/core';
import { SpotService } from '../../services/spot.service';
import { forkJoin } from 'rxjs';

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
		const spotsIds: number[] = JSON.parse(localStorage.getItem('spots'));
		const calls = spotsIds.map((id) => {
			return this.spotService.getSpot(id);
		});
		forkJoin(calls).subscribe((res) => {
			console.log(res);
			this.loading = false;
		});
	}
}
