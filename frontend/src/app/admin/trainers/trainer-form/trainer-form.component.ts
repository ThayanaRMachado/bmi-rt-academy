import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trainer } from 'src/app/models/trainer';

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css']
})
export class TrainerFormComponent implements OnInit {

  trainer: Trainer = new Trainer();

  constructor() { }

  ngOnInit(): void {
  }

    save(form: NgForm){
    console.log(form.value);
  }

}
