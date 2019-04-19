import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PecaParaCadastro } from './../../compartilhados/cadastroPeca';
import { CrudService } from './../../services/crud.service';
import { ReplaySubject } from 'rxjs';
import { Categoria } from './../../compartilhados/categoria';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cdpeca',
  templateUrl: './cdpeca.component.html',
  styleUrls: ['./cdpeca.component.scss']
})
export class CdpecaComponent implements OnInit {

  constructor(private fb: FormBuilder, private modalService: NgbModal,
    private crud: CrudService, private router: ActivatedRoute) {
    window.document.body.style.backgroundColor = '#97CC04';
  }

  formCadastroPeca: FormGroup = null;
  dadosPeca: PecaParaCadastro;

  formCategoria: FormGroup = null;
  categorias: Categoria[] = [];
  categoriasOrdemAlfabetica = [];

  sucesso: boolean = false;
  erro;
  msg: string = null;
  id: string = null;

  destruido: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnInit() {
    this.montaForm();
    this.leCategorias();
    this.pegaIdEAtualizaForm();
  }

  montaForm() {
    this.formCadastroPeca = this.fb.group({
      nome: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      linkImagem: ['', [Validators.required]],
      detalhes: ['', [Validators.required]]
    });

    this.formCategoria = this.fb.group({
      categoria: ['', [Validators.required]]
    });

  }

  get f() {
    return this.formCadastroPeca.controls;
  }

  pegaIdEAtualizaForm() {
    this.router.params.subscribe((params) => {
      this.id = params.id;
      if (this.id) {
        console.log(`Id recebido ${this.id}`);
        this.crud.leRegistroEspecifico('/produtos', this.id).takeUntil(this.destruido).subscribe((data) => {
          console.table(`Peca da id recebida ${data}`);
          this.formCadastroPeca.patchValue(data);
        }, error => {
          this.erro = error;
          console.log(this.erro);
        });
      } else {
        console.log(`Nenhum id na rota`);
      }
    });
  }

  enviaForm() {
    
    this.dadosPeca = this.formCadastroPeca.value;
    console.table(this.dadosPeca);

    if (this.id) {
      this.crud.atualizaRegistro('/produtos', this.id, this.dadosPeca).takeUntil(this.destruido).subscribe((data) => {
        this.msg = 'Peca atualizada com sucesso';
        this.sucesso = true;
        console.log('Peca atualizada');
      }, error => {
        this.erro = error;
        console.log(`Erro ao atualizar a peca : ${this.erro}`);
      })
    } else {
      this.crud.criaRegistro('/produtos', this.dadosPeca).subscribe((data) => {
        this.msg = 'Peca criada com sucesso';
        this.sucesso = true;
        console.log('Peca criada com sucesso');
        this.formCadastroPeca.reset();
      }, error => {
        this.erro = error;
        console.log('Erro ao criar a peça');
      });
    }
  }

  leCategorias() {
    this.crud.leRegistro('/categoria').takeUntil(this.destruido).subscribe((categorias) => {
      this.categorias = categorias;
      
      for(let i = 0 ; i < this.categorias.length ; i++) {
        if(this.categorias[i].categoria){
          this.categoriasOrdemAlfabetica.push(this.categorias[i].categoria);
        }
      }
      return this.categoriasOrdemAlfabetica.sort();
    }, error => {
      this.erro = error;
    });
  }

  cadastraCategoria() {
    this.crud.criaRegistro('/categoria', this.formCategoria.value).takeUntil(this.destruido).subscribe((data) => {
      console.log('Categoria adicionada globalmente');
      this.categoriasOrdemAlfabetica.push(this.formCategoria.controls['categoria'].value);
      this.modalService.dismissAll();
    }, error => {
      this.erro = error;
    });
  }

  exibeModalCadastroCategoria(cadastroCategoriaModal) {
    this.modalService.open(cadastroCategoriaModal, { centered: true });
  }

  ngOnDestroy(){
    this.destruido.next(true);
    this.destruido.complete();
  }

}
