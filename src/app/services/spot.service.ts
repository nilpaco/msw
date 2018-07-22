import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SpotService {
	private static url = 'https://api.github.com/users';

	constructor(private http: HttpClient) {}

	getUsers(): Observable<any> {
		return this.http.get(SpotService.url);
	}
}
