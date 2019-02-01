import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { HomeComponent } from './home/home.component';
import { EditItemComponent } from './home/edit-item/edit-item.component';
import { ViewItemComponent } from './home/view-item/view-item.component';

const routes: Routes = [
  {path: 'student', component: StudentListComponent },
  {path: 'home', component: HomeComponent },
  {path: 'manage', component: EditItemComponent },
  {path: 'display', component: ViewItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
