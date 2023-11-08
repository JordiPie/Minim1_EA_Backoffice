import { IProfessor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-create',
  templateUrl: './professor-create.component.html',
  styleUrls: ['./professor-create.component.css']
})
export class ProfessorCreateComponent {

  professor: any={name:'',email:'',age:''}

  constructor(
    private route: ActivatedRoute,
    private professorService: ProfessorService,
    private location: Location,
    private router: Router
  ){}
  createProfessor(){
    if (this.professor) {
     const professorTO = {
        name: this.professor.name,
        email: this.professor.email,
        age: this.professor.age
     };
     this.professorService.createProfessor(professorTO).subscribe(()=> this.goBack());
   }
  }
  goBack(): void {
    this.location.back();
  }
}