import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [];

  constructor(private storage: Storage) {
    this.getTasks().then(
      data => this.tasks = data == null ?  [] : data
    );
  }

  public getTasks(): Promise<Task[]> {
    return this.storage.get('tasks');
  }

  public getTask(id: number): Task {
    return this.tasks.filter(t => t.id == id)[0];
  }

  public saveTask(t: Task): Promise<boolean> {
    if (t.id == undefined) {
      const maxId = this.tasks.reduce((max, t) => t.id > max? t.id : max, -1);
      const newTask = {id: maxId + 1, title: t.title, description: t.description};
      this.tasks.push(newTask);
    }
    return this.storage.set('tasks', this.tasks);
  }
}