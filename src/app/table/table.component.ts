import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core'
import { ContentService } from '../services/content.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

	private _data:any;

	displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age'];
	dataSource = new MatTableDataSource(this._data);

	@ViewChild(MatPaginator , {static: false}) paginator: MatPaginator;
	@ViewChild(MatSort , {static: false}) sort: MatSort;

	constructor( private contentService: ContentService) {
	}

	ngOnInit() {
		this.contentService.getAllData().subscribe(response=>{ 
			this._data = response.data;      
		});
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
}