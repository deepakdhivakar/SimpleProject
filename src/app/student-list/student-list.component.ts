import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  dataSource: Student[] = [];

  displayedColumns: string[] = ['studentId', 'studentName', 'studentContactNumber', 'studentAddress', 'studentDepartment', 'studentGender', 'studentCourses', 'edit', 'delete'];

  constructor(private studentService: StudentService,
    private router: Router) {
    this.getStudentList();
  }

  ngOnInit(): void {

  }

  updateStudent(studentId: number): void {
    this.router.navigate(['/student', { studentId: studentId }]);
  }

  deleteStudent(studentId: number): void {
    console.log(studentId);
    this.studentService.deleteStudent(studentId).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.getStudentList();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );
  }

  getStudentList(): void {
    this.studentService.getStudents().subscribe(
      {
        next: (res: Student[]) => {
          this.dataSource = res;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      }
    );
  }

}
