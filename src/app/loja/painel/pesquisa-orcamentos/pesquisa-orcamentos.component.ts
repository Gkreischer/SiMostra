import { Component, OnInit, Input } from '@angular/core';
import { Orcamento } from './../../compartilhados/orcamento';
import { Cliente } from './../../compartilhados/cliente';
import { CrudService } from './../../services/crud.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-pesquisa-orcamentos',
  templateUrl: './pesquisa-orcamentos.component.html',
  styleUrls: ['./pesquisa-orcamentos.component.css']
})
export class PesquisaOrcamentosComponent implements OnInit {

  formPesquisaNomeOuCpf: FormGroup;
  nomeOuCpf: Orcamento;
  destruido: ReplaySubject<boolean> = new ReplaySubject(1);
  erro;
  clientes: Orcamento[];
  msg: string;

  constructor(private fb: FormBuilder, private crud: CrudService) {
    window.document.body.style.backgroundColor = '#474647';
    this.montaForm();
  }

  ngOnInit() {
  }

  montaForm() {
    this.formPesquisaNomeOuCpf = this.fb.group({
      nomeOuCpf: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(64)]]
    });
  }

  get f() {
    return this.formPesquisaNomeOuCpf.controls;
  }

  enviaForm(event) {
    const stringRecebida = (event.target as HTMLInputElement).value.toUpperCase();
    console.log(stringRecebida);

    this.executaConsulta(stringRecebida);
  }

  executaConsulta(palavraPesquisada: string) {
    this.clientes = null;
    
    this.crud.leRegistro('/montagemOrcamentos').takeUntil(this.destruido).subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data.length > 0) {
          if(data[i].nome == palavraPesquisada || data[i].cpfcnpj == palavraPesquisada){
            this.clientes = data;
          } else {
            this.clientes = null;
            this.msg = 'Nome ou CPF do cliente não achado.'
          }
        } else {
          console.log(`Nome ou CPF não encontrados`);
          this.msg = 'Nome ou CPF do cliente não achado.'
        }
      }
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });

    this.crud.leRegistroComFiltroOR('/orcamentos', 'nome', palavraPesquisada, 'cpfcnpj', palavraPesquisada).takeUntil(this.destruido).subscribe((data) => {
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          this.clientes.push(data[i]);
        } 
      } else {
        console.log(`Nome ou CPF não encontrados`);
        this.msg = 'Nome ou CPF do cliente não achado.'
      }
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });

  }
  
  ngOnDestory() {
    this.destruido.next(true);
    this.destruido.complete();
  }

}
