import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/shared/Course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: Course;

  constructor(private coursesService : CoursesService,private route : ActivatedRoute) { }

  ngOnInit() {

    let id = this.route.snapshot.params['id'];
    this.coursesService.getCourse(id).subscribe(course => this.course = course);
  }

}
