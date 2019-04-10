import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { CrudService } from './../services/crud.service';
import { DadosEmpresa } from '../compartilhados/dadosEmpresa';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf'
import 'jspdf-autotable';
import { ReplaySubject } from 'rxjs';
import { Orcamento } from '../compartilhados/orcamento';

@Injectable()
export class ImpressaoService {

  private readonly pdfFonts: any;

  API_URL: string = 'http://localhost:3000/api';
  dadoEmpresa: DadosEmpresa;
  dadosCliente: Orcamento;
  destruido: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private http: HttpClient, private router: Router, private crud: CrudService) {
    this.atribuiInfoEmpresaDocPDF();
  }

  atribuiInfoEmpresaDocPDF() {
    this.retornaInfEmpresa().subscribe((data) => {
      this.dadoEmpresa = data[0];
      if (this.dadoEmpresa == undefined) {
        alert('Cadastre suas informações primeiro em Configurações');
        this.router.navigate(['/configuracoes']);

      }
      console.log('Dados da empresa recebidos:', this.dadoEmpresa);
    })
  }

  retornaInfEmpresa(): Observable<any> {
    return this.http.get(this.API_URL + '/configuracaos').pipe(
      catchError(this.handleError)
    );
  }

  leDadosDadosCliente(id: string) {
    this.crud.leRegistroEspecifico('/orcamentos', id).takeUntil(this.destruido).subscribe((data) => {
      this.dadosCliente = data;
      console.log(data);
      this.criaDocumento();
    }, error => {
      console.log(error);
    });
  }

  destroyData(){
    this.destruido.next(true);
    this.destruido.complete();
  }

  recebeInfoGeraPdf(id: string) {

    this.leDadosDadosCliente(id);
    console.log(id);
  }

  criaDocumento(){
 
    let doc = new jsPDF();
    doc.setFontSize(35);
    doc.text(this.dadoEmpresa.nomeFantasia, 15, 25);
    doc.setFontSize(16);
    doc.text(this.dadoEmpresa.endereco, 15, 34);
    doc.text(`${this.dadoEmpresa.bairro}-${this.dadoEmpresa.cidade}`, 15, 41);
    doc.text(this.dadoEmpresa.site, 15, 48);
    //doc.addImage('', 'JPG', 140, 7, 55, 40);

    doc.line(15, 55, 195, 55);
    doc.setFontSize(20);
    doc.text("Aquisição de Produtos", 105, 68, null, null, 'center');

    doc.line(15, 250, 195, 250);
    doc.setFontSize(16);
    doc.text('Cliente:', 15, 260);
    doc.setFontSize(12);
    doc.text(this.dadosCliente.nome, 35, 260);
    doc.setFontSize(16);
    doc.text('Telefone:', 15, 268);
    doc.setFontSize(12);
    doc.text(this.dadosCliente.telefone.toString(), 39, 268);
    doc.setFontSize(16);
    doc.text('Forma de pagamento:', 120, 260);
    doc.setFontSize(12);
    doc.text(this.dadosCliente.formaPagamento, 177, 260);
    doc.setFontSize(16);
    doc.text('Data:', 120, 268);
    doc.setFontSize(12);

    doc.text(this.dadosCliente.createdAt.substr(0, 10), 135, 268);

    doc.line(15, 285, 90, 285);
    doc.text("Cliente", 40, 291);

    doc.line(120, 285, 195, 285);
    doc.text("Sigatec", 148, 291);

    doc.save('PDF');
  }

  criaTabelaDocPDF(informacoes) {
    let infoTabela = informacoes;

    let dadosDocumento = {

      pageSize: 'A4',
      content: [
        { text: this.dadoEmpresa.nomeFantasia, style: 'nomedaEmpresa' },
        { text: this.dadoEmpresa.telefone, style: 'informacoesEmpresa' },
        { text: this.dadoEmpresa.endereco, style: 'informacoesEmpresa' },
        { text: this.dadoEmpresa.cidade, style: 'informacoesEmpresa' },
        { text: this.dadoEmpresa.site, style: 'informacoesEmpresa', margin: [0, 0, 0, 50] }

      ],
      styles: {
        nomedaEmpresa: {
          fontSize: 22,
          bold: true
        },
        informacoesEmpresa: {
          fontSize: 14,
        }
      }
    };

  }


  table(data, columns) {
    return {
      headerRows: 1,
      // Para cada coluna, um tamanho
      widths: ['*', '*', '*', '*'],
      body: this.buildTableBody(data, columns)
    };
  }

  buildTableBody(data, columns) {
    var body = [];

    body.push(columns);

    data.forEach(function (row) {
      var dataRow = [];

      columns.forEach(function (column) {
        dataRow.push(row[column].toString());
      })

      body.push(dataRow);
    });

    return body;
  }


  // Tratamento de erro
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Um erro ocorreu', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend retornou a msg ${error.status}, ` +
        `body era: ${JSON.stringify(error.error)}`);
    }
    // return an observable with a user-facing error message
    return ErrorObservable.create(`${JSON.stringify(error.message)}`);
  };

}