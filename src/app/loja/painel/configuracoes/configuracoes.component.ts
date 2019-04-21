import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DadosEmpresa } from '../../compartilhados/dadosEmpresa';
import { ConfigEmail } from './../../compartilhados/configEmail';
import { Categoria } from './../../compartilhados/categoria';
import { Funcionario } from './../../compartilhados/funcionario';
import { ReplaySubject } from 'rxjs';
@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {

  constructor(private crud: CrudService, private modalService: NgbModal, private fb: FormBuilder) {
    window.document.body.style.backgroundColor = '#F45D01';

  }

  formConfiguracaoDadosLoja: FormGroup = null;
  formAdicionaFuncionario: FormGroup = null;
  configuracaoDadosLoja: DadosEmpresa = null;
  erro: string;
  idDadosLoja: string = null;
  msgConfigDadosLoja: string = null;
  categorias: Categoria[] = null;
  formConfigEmail: FormGroup = null;
  configEmail: ConfigEmail = null;
  idDadosEmail: string = null;
  msgConfigEmail: string = null;
  funcionarios: Funcionario[] = [];
  msgModalFuncionarios: string = null;
  destruido: ReplaySubject<boolean> = new ReplaySubject(1);
  botaoClicado: number;

  ngOnInit() {
    this.montaFormConfig();
    this.verificaInfoDadosLoja();
    this.verificaInfoDadosEmail();
  }

  leCategorias() {
    this.crud.leRegistro('/categoria').takeUntil(this.destruido).subscribe((data) => {
      this.categorias = data;
      console.log(this.categorias);
    }, error => {
      this.erro = error;
    });
  }


  montaFormConfig() {
    this.formConfiguracaoDadosLoja = this.fb.group({
      nomeFantasia: ['', Validators.required],
      cnpj: ['', Validators.required],
      site: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      cep: ['', Validators.required],
      cidade: ['', Validators.required]
    });

    this.formConfigEmail = this.fb.group({
      servidor: ['', Validators.required],
      porta: ['', Validators.required],
      conta: ['', Validators.required],
      senha: ['', Validators.required],
      tls: ['', Validators.required]
    });

    this.formAdicionaFuncionario = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cargo: ['', Validators.required]
    });
  }

  verificaInfoDadosLoja() {
    this.crud.leRegistro('/configuracaos').subscribe((data) => {
      if (data.length != 0) {
        console.log('Dados da loja já configurados', data.length);
        this.msgConfigDadosLoja = `Dados da loja já configurados`;
        this.idDadosLoja = data[0].id;
        console.log(data);
        this.formConfiguracaoDadosLoja.patchValue(data[0]);
      } else {
        console.log('Sem dados cadastrados ainda na loja');
        alert('Por favor, cadastre suas informações da Loja');
      }
    }, error => {
      this.erro = error;
      console.log(this.erro);
    })
  }

  enviaFormConfigDadosLoja() {
    this.configuracaoDadosLoja = this.formConfiguracaoDadosLoja.value;

    console.table(this.configuracaoDadosLoja);

    if (this.idDadosLoja != undefined) {
      console.log('Atualizando dados loja', this.formConfiguracaoDadosLoja.value);
      this.crud.atualizaRegistro('/configuracaos', this.idDadosLoja, this.configuracaoDadosLoja).subscribe((data) => {
        console.log('Foram atualizadas');
        this.msgConfigDadosLoja = `Dados da loja atualizados`;
        this.formConfiguracaoDadosLoja.patchValue(this.configuracaoDadosLoja);
        localStorage.removeItem('nomeLoja');
        localStorage.setItem('nomeLoja', this.configuracaoDadosLoja.nomeFantasia);
      }, error => {
        console.log('Não foi possível atualizar as configurações da loja');
        this.erro = error;
      });
    } else {
      console.log('Registrando loja pela primeira vez');
      this.crud.criaRegistro('/configuracaos', this.configuracaoDadosLoja).subscribe((data) => {
        console.log('Configuração criada com sucesso');
        this.msgConfigDadosLoja = `Dados da loja configurados com sucesso.`
        this.formConfiguracaoDadosLoja.patchValue(this.configuracaoDadosLoja);
        localStorage.setItem('nomeLoja', this.configuracaoDadosLoja.nomeFantasia);
      }, error => {
        this.erro = error;
        console.log('Não foi posssivel gravar as informações', error.messsage);
      });
    }
  }

  verificaInfoDadosEmail() {
    this.crud.leRegistro('/configEmails').subscribe((data) => {
      if (data.length != 0) {
        console.log('Email da loja já configurado', data.length);
        this.msgConfigEmail = `Email da loja já configurado`;
        this.idDadosEmail = data[0].id;
        console.log(data);
        this.formConfigEmail.patchValue(data[0]);
      } else {
        console.log('Sem dados de email cadastrados na loja');
        alert('Por favor, cadastre suas informações de Email');
      }
    }, error => {
      this.erro = error;
      console.log(this.erro);
    })
  }

  enviaFormConfigDadosEmail() {
    this.configEmail = this.formConfigEmail.value;

    console.table(this.configEmail);

    if (this.idDadosEmail != undefined) {
      console.log('Atualizando email loja', this.formConfigEmail.value);
      this.crud.atualizaRegistro('/configEmails', this.idDadosEmail, this.configEmail).subscribe((data) => {
        console.log('Email atualizado');
        this.msgConfigEmail = `Email da loja atualizado`;
        this.formConfigEmail.patchValue(this.configEmail);
      }, error => {
        console.log('Não foi possível atualizar o email da loja');
        this.erro = error;
      });
    } else {
      console.log('Registrando email pela primeira vez');
      this.crud.criaRegistro('/configEmails', this.configEmail).subscribe((data) => {
        console.log('Email configurado com sucesso.');
        this.msgConfigEmail = `Email da loja configurado com sucesso.`
        this.formConfigEmail.patchValue(this.configEmail);
      }, error => {
        this.erro = error;
        console.log('Não foi posssivel criar as informações de email', error.messsage);
      });
    }
  }

  abreModalEdicaoCategorias(modalCategorias) {
    this.crud.leRegistro('/categoria').takeUntil(this.destruido).subscribe((data) => {
      this.categorias = data;
      console.log(this.categorias);
      this.modalService.open(modalCategorias, { centered: true });
    }, error => {
      this.erro = error;
    });
  }

  leFuncionarios() {
    this.crud.leRegistro('/funcionarios').takeUntil(this.destruido).subscribe((data) => {
      if (data.length == 0) {
        this.msgModalFuncionarios = 'Não há funcionários cadastrados';
      } else {
        this.msgModalFuncionarios = null;
        this.funcionarios = data;
        console.table(this.funcionarios);
      }
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  abreModalAdicionaFuncionario(modalFuncionarios) {
    this.crud.leRegistro('/funcionarios').takeUntil(this.destruido).subscribe((data) => {
      if (data.length == 0) {
        this.msgModalFuncionarios = 'Não há funcionários cadastrados';
      } else {
        this.msgModalFuncionarios = null;
        this.funcionarios = data;
        console.table(this.funcionarios);
      }
      this.modalService.open(modalFuncionarios, { centered: true, size: 'lg' });
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  adicionaFuncionario() {
    let funcionario: Funcionario = this.formAdicionaFuncionario.value;
    console.log(funcionario);

    this.crud.criaRegistro('/funcionarios', funcionario).takeUntil(this.destruido).subscribe((data) => {
      console.log('Funcionario adicionado com sucesso');
      this.leFuncionarios();
      this.funcionarios.push(funcionario);
      this.formAdicionaFuncionario.reset();
    }, error => {
      this.erro = error;
      console.log(this.erro);
    });
  }

  deletaFuncionario(event, index){
    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(`${id}`);

    console.log(index);

    let confirma = confirm('Deseja realmente deletar o funcionario?');

    if(confirma){
      this.crud.deletaRegistro('/funcionarios', id).takeUntil(this.destruido).subscribe((data) => {
        alert('Usuario removido com sucesso');
        this.funcionarios.splice(index, 1);
      }, error => {
        this.erro = error;
        console.log(this.erro);
      });
    } else {
      alert('Operacao cancelada pelo usuario.');
      return false;
    }

  }

  ngOnDestroy() {
    this.destruido.next(true);
    this.destruido.complete();
  }

  deletaCategoria(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    let id = target.attributes.id.value;

    console.log(`${id}`);

    let op = confirm('Deseja realmente deletar a categoria?');

    if (op) {
      this.crud.deletaRegistro('/categoria', id).takeUntil(this.destruido).subscribe((data) => {

        for (let i = 0; i < this.categorias.length; i++) {
          if (this.categorias[i].id) {
            this.categorias.splice(i, 1);
          }
        }
        this.leCategorias();
      }, error => {
        this.erro = error;
        console.log(this.erro);
      });
    } else {
      console.log('Operação cancelada');
      return false;
    }
  }
}
