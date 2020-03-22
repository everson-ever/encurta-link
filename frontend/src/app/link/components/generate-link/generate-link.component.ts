import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { Link } from '../../model/Link';
import { LinkService } from '../../services/link.service';

@Component({
	selector: 'app-generate-link',
	templateUrl: './generate-link.component.html',
	styleUrls: [ './generate-link.component.css' ]
})
export class GenerateLinkComponent implements OnInit {
	public link: Link = new Link();
	public generating = false;
	public url = '';

	constructor(private linkService: LinkService, private apiService: ApiService) {}

	ngOnInit(): void {}

	public generate(form: NgForm) {
		this.generating = true;
		this.linkService.store(this.link).subscribe((response) => {
			this.generating = false;
			let urlResponse = response.body.shortenedUrl;
			this.url = `${this.apiService.getOwnUrl()}/${urlResponse}`;
		});
	}
}
