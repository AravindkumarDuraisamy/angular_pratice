import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	
	private _data:any;
  constructor( private contentService: ContentService) {


  }

	ngOnInit() {
		this.contentService.getAllData().subscribe(response=>{ 
			this._data = response.data;      
		});
	}
}