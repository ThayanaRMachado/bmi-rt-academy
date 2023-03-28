import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  trainers: Trainer[]  = []

  constructor(private trainerService: TrainerService) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.trainerService
      .list()
      .subscribe((data) => {
        this.trainers = data.content;
      });
  }

}
