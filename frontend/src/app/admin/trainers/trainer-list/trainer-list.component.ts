import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Pagination } from 'src/app/models/pagination';
import { Trainer } from 'src/app/models/trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  trainers: Trainer[]  = [];

  pagination: Pagination = new Pagination();

  totalElements: number = 0;

  constructor(private trainerService: TrainerService) {

    this.pagination.linesPerPage = 3;
  }

  ngOnInit(): void {
  }

  list(page: number = 0): void {
    this.pagination.page = page;
    this.trainerService
      .list(this.pagination)
      .subscribe((data) => {
        this.trainers = data.content;
        this.totalElements = data.totalElements;
      });
  }

  changePage(event: LazyLoadEvent) {
    const page = event!.first! / event!.rows!;
    this.list(page);
  }

}
