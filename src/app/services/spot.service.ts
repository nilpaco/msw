import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SpotService {
	private static url = 'https://cors.io/?http://magicseaweed.com/api/3cbe4a12ee732e013131978bc7538089/forecast/?spot_id=4397';
	private bcnetaId = 3535;

	constructor(private http: HttpClient) {}

	getSpot(spotId): Observable<any> {
		return this.http.get(SpotService.url);
	}
}
