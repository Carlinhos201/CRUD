import { AlunosService } from './alunos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import {FormsModule, ReactiveFormsModule}  from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [AlunosService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
