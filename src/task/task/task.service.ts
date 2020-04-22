import { Injectable } from '@angular/core';
import {TASKS} from './default-tasks';
import { Task } from './task';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private router: Router) { }

  getDefaultTasks(): Task[] {
    return TASKS;
  }

  addTask(task: Task) {
    TASKS.push(task);
  }

  addIdToTask(task: Task, id: number){
    task.id = id;
  }

  addTaskNameToTask(task: Task, name: string){
    task.taskName = name;
  }

  findTaskById(id: number){
    for (var i = 0; i < TASKS.length; i++){
      if (TASKS[i].id === id){
        return TASKS[i];
      }
    }
  }

  findTaskPositionInTaskList(task: Task){
    return TASKS.indexOf(task);
  }

  updateTask(task: Task, taskName: string) {
    task.taskName = taskName;
  }

  goBackToTasksHome(){
    this.router.navigate(['/tasks']);
  }

  deleteTask(task: Task) {
    const index: number = TASKS.indexOf(task);
    if (index !== -1){
      TASKS.splice(index, 1);
    }

  }

}
