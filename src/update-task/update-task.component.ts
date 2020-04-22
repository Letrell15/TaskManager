import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/task/task/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {
  tasks = this.taskService.getDefaultTasks();
  task;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      params;
      this.task = this.taskService.findTaskById(+params.get('id'));
      var index = this.tasks.indexOf(this.task);
    })
    var taskName = (<HTMLInputElement>document.getElementById("taskName")).value = this.task.taskName;
  }

  updateTask() {
    var currentTask = this.taskService.findTaskById(this.task.id);
    var newTaskName = (<HTMLInputElement>document.getElementById("taskName")).value;
    this.taskService.updateTask(currentTask, newTaskName);
    this.taskService.goBackToTasksHome();
  }

  goBack() {
    this.taskService.goBackToTasksHome();
  }

}
