import { Component, OnInit } from '@angular/core';
import { Skills } from '../../model/skills';
import { SkillsService } from '../../service/skills.service';
import { TokenService } from '../../../../../../fProjAPYoProg/frontend/src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {
    skills: Skills[] = []

    constructor(private skillsS: SkillsService, private tokenService: TokenService) { }
    isLogged = false;

    ngOnInit(): void {
        this.cargarSkills();
        if(this.tokenService.getToken()){
            this.isLogged = true;
        } else {
            this.isLogged = false;
        }

    }

    cargarSkills(): void{
        this.skillsS.lista().subscribe(
            data => {
                this.skills = data;
            }
        )
    }

    delete(id: number){
        if(id != undefined){
            this.skillsS.delete(id).subscribe(
                data => {
                    this.cargarSkills();
                }, err => {
                    alert("No se pudo Borrar la Habilidad");
                }
            )
        }
    }

}
