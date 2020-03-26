import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { LinkPost } from '../models/LinkPost';

@Injectable({
	providedIn: 'root'
})
export class LinkService {
	constructor(private http: HttpClient, private apiService: ApiService) {}

	public index(): Observable<any> {
		return this.http.get(`${this.apiService.getUrl()}/links`);
	}

	public show(short: string): Observable<any> {
		return this.http.get(`${this.apiService.getUrl()}/links/${short}`);
	}

	public store(link: LinkPost): Observable<any> {
		return this.http.post<any>(`${this.apiService.getUrl()}/links`, link);
	}
}
