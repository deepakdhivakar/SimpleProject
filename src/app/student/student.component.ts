import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  isCreateStudent: boolean = true;

  student: any;

  courses: string[] = [];

  constructor(private studentService: StudentService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.student = this.activatedRoute.snapshot.data['student'];

    console.log(this.student);

    if (this.student && this.student.studentId > 0) {
      this.isCreateStudent = false;
      if (this.student.studentCourses != '') {
        this.courses = [];
        this.courses = this.student.studentCourses.split(',');
      }
    } else {
      this.isCreateStudent = true;
    }

  }

  checkCourses(course: string) {
    return this.student.studentCourses != null && this.student.studentCourses.includes(course);
  }

  checkGender(gender: string) {
    return this.student.studentGender != null && this.student.studentGender == gender;
  }

  saveStudent(studentForm: NgForm): void {

    if (this.isCreateStudent) {
      this.studentService.saveStudent(this.student).subscribe(
        {
          next: (res: Student) => {
            console.log(res);
            studentForm.reset();
            this.student.studentGender = '';
            this.courses = [];
            this.student.studentCourses = '';
            this.router.navigate(["/student-list"]);
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
          }
        }
      );
    } else {
      this.studentService.updateStudent(this.student).subscribe(
        {
          next: (res: Student) => {
            this.router.navigate(["/student-list"]);
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
          }
        }
      );
    }
  }

  selectGender(gender: string): void {
    this.student.studentGender = gender;
  }

  onCoursesChanges(event: any): void {
    console.log(event);
    if (event.checked) {
      this.courses.push(event.source.value);
    } else {
      this.courses.forEach(
        (item, index) => {
          if (item == event.source.value) {
            this.courses.splice(index, 1);
          }
        }
      );
    }

    this.student.studentCourses = this.courses.toString();
  }

}
