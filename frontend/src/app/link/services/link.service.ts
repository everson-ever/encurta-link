import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { Link } from '../model/Link';

@Injectable({
	providedIn: 'root'
})
export class LinkService {
	constructor(private http: HttpClient, private apiService: ApiService) {}

	public show(short: string): Observable<any> {
		return this.http.get(`${this.apiService.getUrl()}/links/${short}`);
	}

	public store(link: Link): Observable<any> {
		return this.http.post(`${this.apiService.getUrl()}/links`, link);
	}
}
