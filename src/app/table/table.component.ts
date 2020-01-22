import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

	MyDataSource: any;  
	displayedColumns = ['id', 'employee_name', 'employee_salary', 'employee_age'];
	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;  
	@ViewChild(MatSort, {static: true}) sort: MatSort; 

	constructor( public contentService: ContentService) {}

	ngOnInit() {
		this.contentService.getAllData().subscribe(response=>{
			this.MyDataSource = new MatTableDataSource();  
			this.MyDataSource.data = response.data;  
			this.MyDataSource.sort = this.sort;  
			this.MyDataSource.paginator = this.paginator;
		});
	}
}