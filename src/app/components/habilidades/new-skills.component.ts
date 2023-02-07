import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsService } from '../../service/skills.service';
import { Skills } from 'src/app/model/skills';

@Component({
    selector: 'app-new-skills',
    templateUrl: './new-skills.component.html',
    styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
    nombre: string;
    porcentaje: number;

    constructor(private skillsS: SkillsService, private router: Router) { }

    ngOnInit(): void {

    }

    onCreate(): void {

        const skill = new Skills(this.nombre, this.porcentaje);
        this.skillsS.save(skill).subscribe(
            data => {
                alert("Habilidad creada correctamente");
                this.router.navigate(['']);
            }, err => {
                    alert("Fallo al Añadir la Habilidad");
                    this.router.navigate(['']);
            }
        )
    }
}
