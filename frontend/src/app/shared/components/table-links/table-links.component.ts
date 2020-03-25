import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Link } from 'src/app/modules/link/model/Link';

@Component({
	selector: 'app-table-links',
	templateUrl: './table-links.component.html',
	styleUrls: [ './table-links.component.css' ]
})
export class TableLinksComponent implements OnInit {
	public timer: number = 180;
	@Input() links: Link[];

	constructor(public apiService: ApiService) {}

	ngOnInit(): void {
		this.timeUpdate();
	}

	public urlShort(ownUrl: string, short: string) {
		return `${ownUrl}/${short}`;
	}

	public timeUpdate() {
		setInterval(() => {
			this.timer--;
			if (this.timer === 0) {
				this.timer = 180;
			}
		}, 1000);
	}
}
