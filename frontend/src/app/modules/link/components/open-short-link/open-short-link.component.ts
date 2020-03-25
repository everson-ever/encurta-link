import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinkService } from '../../services/link.service';

@Component({
	selector: 'app-open-short-link',
	templateUrl: './open-short-link.component.html',
	styleUrls: [ './open-short-link.component.css' ]
})
export class OpenShortLinkComponent {
	public short: string;

	constructor(private route: ActivatedRoute, private linkService: LinkService) {
		this.route.params.subscribe(({ short }) => {
			this.short = short;
		});

		this.show();
	}

	public show() {
		this.linkService.show(this.short).subscribe((response) => {
			window.location = response.body.url;
		});
	}
}
