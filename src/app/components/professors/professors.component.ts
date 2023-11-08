import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProfessor } from 'src/app/models/professor';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {
  professors: IProfessor[] = [];
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 5;
  

  constructor(private professorService: ProfessorService) {}

  ngOnInit(): void {
    this.getProfessors();
  }

  getProfessors(): void {
    this.professorService.getProfessors(this.currentPage, this.limit).subscribe(data => {
      this.professors = data.professors;
      this.totalPages = data.pageCount;
  },
  err => {
      console.error(err);
  });
  }

  delete(professor: IProfessor): void {
    if(confirm("Are you sure?") == true){
      this.professors = this.professors.filter(u => u !== professor);
      this.professorService.deleteProfessor(professor._id).subscribe();
    }
  }

 /*  pageChanged(newPage: number) {
    // Actualiza el valor de currentPage antes de obtener los usuarios
    this.currentPage = newPage;
    console.log('pagina: '+ this.currentPage);
    // Obtén los usuarios para la página actualizada
    this.getUsers();
  } */

  previousPage() {
    if (this.currentPage > 1) {
      --this.currentPage;
      this.getProfessors();
    }
  }
  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      ++this.currentPage;
      this.getProfessors();
    }
    
  }

}
