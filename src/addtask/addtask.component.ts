import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/task/task/task.service';
import { Task } from 'src/task/task/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddTaskComponent implements OnInit {
  tasks = this.taskService.getDefaultTasks();

  constructor(private taskService: TaskService,
    private router: Router) { }

  ngOnInit() {
  }

  addTask() {
    var task: Task = {id: 0, taskName: ""}
    var taskExample = (<HTMLInputElement>document.getElementById("taskName"));
    var taskName: string = taskExample.value;

    task.taskName = taskName;
    if (this.tasks.length == 0) {
      task.id = 1
      
    } else {
      var latestId = this.getLatestIDFromTaskList();
      var newTaskId = latestId + 1;
      task.id = newTaskId;
    }
    
    this.taskService.addTask(task);
    this.router.navigate(['/tasks']);
  }
  
  getLatestIDFromTaskList() {
    var id;
    var taskList = this.taskService.getDefaultTasks();
    var taskListLength = taskList.length;

    var latestTaskId = taskList[taskListLength - 1].id;

    id = latestTaskId;
    return id;
  }

  goBack() {
    this.taskService.goBackToTasksHome();
  }

}
