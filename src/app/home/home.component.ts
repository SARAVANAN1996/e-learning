import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/shared/Course';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  course:Course;
  courses: Course[];
  constructor(private coursesService : CoursesService) { 
  }

  ngOnInit() {
    this.coursesService.getCourses().subscribe((courses) => this.courses = courses);
  }
}
