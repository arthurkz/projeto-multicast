import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { Router } from '@angular/router';
import { URL_API } from "../../../app.api"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      primeiroNome:[''],
      segundoNome:[''],
      username:[''],
      senha:[''],
    })
  }

  signUp() {
    this.http.post<any>(`${URL_API}/users`, this.signupForm.value)
      .subscribe(response => {
        alert("Cadastro realizado com sucesso");
        this.signupForm.reset();
        this.router.navigate(['login'])
      }, error => {
        alert("Verifique os campos preenchidos!")
      })
  }
}
