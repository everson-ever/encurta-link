import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private url = 'http://localhost:3000/api';
	private ownUrl = 'http://localhost:4200';

	constructor() {}

	public getUrl(): string {
		return this.url;
	}

	public getOwnUrl(): string {
		return this.ownUrl;
	}
}
