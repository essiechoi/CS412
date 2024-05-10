import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { DataItem } from './data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: DataItem[] = [];
  dataLoaded = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.fetchData().subscribe({
      next: (data) => {
        this.data = data;
        this.dataLoaded = true;
      },
      error: (err) => console.error('Failed to fetch data: ', err)
    });
  }
}
