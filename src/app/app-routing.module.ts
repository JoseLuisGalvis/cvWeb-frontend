import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewSkillsComponent } from './components/habilidades/new-skills.component';
import { EditSkillsComponent } from './components/habilidades/edit-skills.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'login', component: LoginComponent },
    { path:'nuevaexp', component: NewExperienciaComponent },
    { path:'editexp/:id', component: EditExperienciaComponent },
    { path:'nuevaedu', component: NeweducacionComponent },
    { path:'editedu/:id', component: EditeducacionComponent },
    { path:'nuevaskills', component: NewSkillsComponent },
    { path:'editskills/:id', component: EditSkillsComponent },
    { path:'editacercade/:id', component: EditAcercaDeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
