import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from 'src/task/task/task.component';
import { HeaderComponent } from 'src/header/header.component';
import { AddTaskComponent } from 'src/addtask/addtask.component';
import { UpdateTaskComponent } from 'src/update-task/update-task.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { DeleteTaskComponent } from 'src/delete-task/delete-task.component';
import { TestComponent } from 'src/test/test.component';

@NgModule({
   declarations: [
      AppComponent,
      TaskComponent,
      HeaderComponent,
      AddTaskComponent,
      UpdateTaskComponent,
      DeleteTaskComponent,
      TestComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FontAwesomeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
   constructor() {
      library.add(faArrowLeft)
   }
 }
