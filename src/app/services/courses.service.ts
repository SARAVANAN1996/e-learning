import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/shared/Course';
import { COURSES } from 'src/app/shared/courses';
import { delay } from 'q';



@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() : Observable<Course[]> {
    return of(COURSES).pipe();
  }

  getCourse(id : string) : Observable<Course> {
    return of(COURSES.filter((dis) => (dis.id === id))[0]).pipe();
  }

}
