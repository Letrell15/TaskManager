import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/task/task/task.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent implements OnInit {
  task;
  tasks = this.taskService.getDefaultTasks();

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.task = this.taskService.findTaskById(+params.get('id'));
    })
  }

  goBack() {
    this.taskService.goBackToTasksHome();
  }

  deleteTask(){
    this.taskService.deleteTask(this.task);
    this.taskService.goBackToTasksHome();

  }

}
