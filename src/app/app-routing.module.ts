import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from 'src/task/task/task.component';
import { AddTaskComponent } from 'src/addtask/addtask.component';
import { UpdateTaskComponent } from 'src/update-task/update-task.component';
import { DeleteTaskComponent } from 'src/delete-task/delete-task.component';
import { TestComponent } from 'src/test/test.component';


const routes: Routes = [
  {path: 'tasks', component: TaskComponent},
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'addTask', component: AddTaskComponent},
  {path: 'update/:id', component: UpdateTaskComponent},
  {path: 'delete/:id', component: DeleteTaskComponent},
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
