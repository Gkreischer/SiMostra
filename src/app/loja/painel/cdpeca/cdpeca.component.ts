import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PecaParaCadastro } from './../../compartilhados/cadastroPeca';
import { CrudService } from './../../services/crud.service';
import { Observable } from 'rxjs';
import { Categoria } from './../../compartilhados/categoria';

@Component({
  selector: 'app-cdpeca',
  templateUrl: './cdpeca.component.html',
  styleUrls: ['./cdpeca.component.css']
})
export class CdpecaComponent implements OnInit {

  constructor(private fb: FormBuilder, private modalService: NgbModal,
    private crud: CrudService) {
    document.body.style.background = 'linear-gradient(to bottom, #aebfbc 22%,#99afab 33%,#8ea6a2 50%,#829d98 67%,#4e5c5a 82%,#0e0e0e 100%)';

    this.leCategorias();
  }

  formCadastroPeca: FormGroup = null;
  dadosPeca: PecaParaCadastro;

  formCategoria: FormGroup = null;
  categorias: Observable<Categoria[]>;

  erro;
  ngOnInit() {
    this.montaForm();
    
  }

  montaForm() {
    this.formCadastroPeca = this.fb.group({
      nome: ['', Validators.required],
      marca: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['', Validators.required],
      linkImagem: ['', Validators.required],
      detalhes: ['', Validators.required]
    });

    this.formCategoria = this.fb.group({
      categorias: ''
    });

  }

  enviaForm() {
    this.dadosPeca = this.formCadastroPeca.value;
    console.log(this.dadosPeca);
  }

  leCategorias(){
    this.crud.leRegistro('/categoria').subscribe((data) => {
      this.categorias = data;
    }, error => {
      this.erro = error;
    });
  }

  cadastraCategoria() {
    this.categorias = this.formCategoria.value;
    console.log(`Enviando a categoria ${this.categorias} para o servidor`);

    this.crud.criaRegistro('/categoria', this.categorias).subscribe((data) => {
      console.log('Categoria criada com sucesso');
      this.categorias = data;
      console.log(this.categorias);
    }, error => {
      this.erro = error;
    });
    console.log(this.categorias);
  }

  exibeModalCadastroCategoria(cadastroCategoriaModal) {
    this.modalService.open(cadastroCategoriaModal, { centered: true });
  }



}
