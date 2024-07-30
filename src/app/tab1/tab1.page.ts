import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from
'@angular/forms';
@Component({
selector: 'app-tab1',
templateUrl: 'tab1.page.html',
styleUrls: ['tab1.page.scss'],
standalone: true,
imports: [IonicModule, ExploreContainerComponent, ReactiveFormsModule],
})
export class Tab1Page {
formGroup: FormGroup = this.fb.group({
nome: ['', Validators.required],
telefone: [''],
email: ['', Validators.email],
hobie: ['']
})
constructor(private fb: FormBuilder) { }
salvar() {
if (this.formGroup.valid) {
alert('Formulário salvo com sucesso')
} else {
  alert('Formulário inválido')
  }
  }
  }
  