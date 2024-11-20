import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'],
})
export class ApiDataComponent implements OnInit {
  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getApiData().subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
  }
}
