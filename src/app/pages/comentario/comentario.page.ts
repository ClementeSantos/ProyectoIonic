import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TasksService } from '../../service/tasks.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.page.html',
  styleUrls: ['./comentario.page.scss'],
})
export class ComentarioPage implements OnInit {

  tasks: Task[] = [];
  task: Task = {title: '', description: ''};


  constructor(private taskService: TasksService,  ) { }

  saveTask() {
    this.taskService.saveTask(this.task);
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.taskService.getTasks().then(
      data => this.tasks = data
    );
  }
}
