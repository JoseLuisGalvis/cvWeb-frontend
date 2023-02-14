import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditSkillsComponent } from './components/habilidades/edit-skills.component';
import { NewSkillsComponent } from './components/habilidades/new-skills.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';


@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      AcercaDeComponent,
      ExperienciaComponent,
      EducacionComponent,
      HabilidadesComponent,
      ProyectosComponent,
      HomeComponent,
      LoginComponent,
      NewExperienciaComponent,
      EditExperienciaComponent,
      NeweducacionComponent,
      EditeducacionComponent,
      EditSkillsComponent,
      NewSkillsComponent,
      EditAcercaDeComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }


