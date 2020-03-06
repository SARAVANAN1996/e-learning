import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { MyCoursesComponent } from 'src/app/my-courses/my-courses.component';
import { CourseDetailsComponent } from 'src/app/course-details/course-details.component';
import { CartComponent } from 'src/app/cart/cart.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"myCourses",component:MyCoursesComponent},
  {path:"coursedetail/:id",component:CourseDetailsComponent},
  {path:"login", component:LoginComponent},
  {path:"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
