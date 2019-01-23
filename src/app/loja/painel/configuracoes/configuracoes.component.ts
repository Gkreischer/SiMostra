import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Configuracao } from './../../compartilhados/configuracao';
import { ConfigEmail } from './../../compartilhados/configEmail';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  constructor(private crud: CrudService, private modalService: NgbModal, private fb: FormBuilder) {
    window.document.body.style.backgroundColor = '#F45D01';

  }

  formConfiguracaoDadosLoja: FormGroup = null;
  configuracaoDadosLoja: Configuracao = null;
  erro: string;
  idDadosLoja: string = null;
  msgConfigDadosLoja: string = null;

  formConfigEmail: FormGroup = null;
  configEmail: ConfigEmail = null;
  idDadosEmail: string = null;
  msgConfigEmail: string = null;
  ngOnInit() {
    this.montaFormConfig();
    this.verificaInfoDadosLoja();
    this.verificaInfoDadosEmail();
  }


  montaFormConfig() {
    this.formConfiguracaoDadosLoja = this.fb.group({
      nomeFantasia: ['', Validators.required],
      cnpj: ['', Validators.required],
      site: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      cep: ['', Validators.required]
    });

    this.formConfigEmail = this.fb.group({
      servidor: ['', Validators.required],
      porta: ['', Validators.required],
      conta: ['', Validators.required],
      senha: ['', Validators.required],
      tls: ['', Validators.required]
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
}
