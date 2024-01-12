import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentResolver } from './student-resolver';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'student', component: StudentComponent, resolve: {student: StudentResolver} },
  {path: 'student-list', component: StudentListComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
