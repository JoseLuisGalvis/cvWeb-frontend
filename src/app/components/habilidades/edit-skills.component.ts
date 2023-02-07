import { Component, OnInit } from '@angular/core';
import { Skills } from '../../model/skills';
import { SkillsService } from '../../service/skills.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  skills : Skills = null;

  constructor(private skillsS: SkillsService, private activatedRouter: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        const id = this.activatedRouter.snapshot.params['id'];
        this.skillsS.detail(id).subscribe(
          data => {
              this.skills = data;
          }, err => {
            alert("Error al Modificar Habilidad");
            this.router.navigate(['']);
          }
        )
    }

    onUpdate(): void{
        const id = this.activatedRouter.snapshot.params['id'];
        this.skillsS.update(id, this.skills).subscribe(
            data => {
                this.router.navigate(['']);
            }, err => {
                alert("Error al Modificar Habilidad");
                this.router.navigate(['']);
            }
        )
    }

}







