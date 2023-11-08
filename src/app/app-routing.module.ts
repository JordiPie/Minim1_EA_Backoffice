import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ProfessorsComponent } from './components/professors/professors.component';
import { ProfessorCreateComponent } from './components/professor-create/professor-create.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { ScheduleDetailComponent } from './components/schedule-detail/schedule-detail.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { ScheduleCreateComponent } from './components/schedule-create/schedule-create.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { AsignaturasUserComponent } from './components/asignaturas-user/asignaturas-user.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'professors', component: ProfessorsComponent},
  {path: 'detail/:id', component: UserDetailComponent },
  {path: 'schedules', component: SchedulesComponent},
  {path: 'schedule_details/:id', component: ScheduleDetailComponent},
  {path: 'asignaturas', component: AsignaturasComponent},
  {path: 'user_create', component: UserCreateComponent},
  {path: 'schedule_create', component: ScheduleCreateComponent},
  {path: 'professor_create', component: ProfessorCreateComponent},
  {path: 'asignatura_user/:id', component: AsignaturasUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
