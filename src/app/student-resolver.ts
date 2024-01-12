import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { StudentService } from "./student.service";
import { inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { Student } from "./student.model";

export const StudentResolver: ResolveFn<any> =
    (route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        studentService: StudentService = inject(StudentService)): Observable<Student> => {


        const studentId = route.paramMap.get("studentId");

        if (studentId) {
            // make api call and get data for given employee id
            return studentService.getStudent(Number(studentId));
        } else {
            // create and return empty student details

            const student: Student = {
                studentId: 0,
                studentName: '',
                studentContactNumber: '',
                studentAddress: '',
                studentGender: '',
                studentDepartment: '',
                studentCourses: ''
            }

            return of(student);

        }

    }