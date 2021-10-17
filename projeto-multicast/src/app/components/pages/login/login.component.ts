import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URL_API } from "../../../app.api"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      senha:['']
    })
  }

  login() {
    this.http.get<any>(`${URL_API}/users`)
      .subscribe( response => {
        const user = response.find((a:any) => {
          return a.username === this.loginForm.value.username && a.senha === this.loginForm.value.senha
        });

        if(user){
          alert("Login realizado com sucesso!");
          this.loginForm.reset();
          this.router.navigate(['home']);
          
        } else {
          alert("Cadastro não encontrado!");
        }
      }, err => {
        alert("Algo de errado aconteceu!");
      })
  }
}
