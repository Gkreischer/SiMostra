import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { CrudService } from './../services/crud.service';
import { DadosEmpresa } from '../compartilhados/dadosEmpresa';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { Orcamento } from '../compartilhados/orcamento';
import { linkUrl } from '../compartilhados/logoLink';
import { BaseUrl } from '../compartilhados/baseurl';
declare var jsPDF: any;

@Injectable()
export class ImpressaoService {

  private readonly pdfFonts: any;

  API_URL: string = BaseUrl;
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

  destroyData() {
    this.destruido.next(true);
    this.destruido.complete();
  }

  recebeInfoGeraPdf(id: string) {

    this.leDadosDadosCliente(id);
    console.log(id);
  }

  criaDocumento() {

    let doc = new jsPDF();
    doc.setFontSize(35);
    doc.text(this.dadoEmpresa.nomeFantasia, 15, 25);
    doc.setFontSize(16);
    doc.text(this.dadoEmpresa.endereco, 15, 34);
    doc.text(`${this.dadoEmpresa.bairro}-${this.dadoEmpresa.cidade}`, 15, 41);
    doc.text(this.dadoEmpresa.site, 15, 48);
    doc.addImage(linkUrl, 'JPEG', 140, 7, 55, 40);

    doc.line(15, 55, 195, 55);
    doc.setFontSize(20);
    doc.text("Aquisição de Produtos", 105, 68, null, null, 'center');
    doc.setFontSize(12)
    doc.text("Data de entrega:", 15, 240);
    doc.setFontSize(12);
    doc.text(this.dadosCliente.updatedAt.substr(0, 10), 48, 240);
    doc.text("Garantia:", 15, 245);
    doc.text(this.dadosCliente.garantia.toString(), 33, 245);
    doc.text("dias", 39, 245);
    doc.setFontSize(12);
    doc.text("Valor Total:", 145, 245);
    doc.setFontSize(12);
    doc.text(this.dadosCliente.valorTotal.toString(), 173, 245);

    doc.autoTable({startY: 75, html: '#listaPecasOrcamento'});

    doc.line(15, 250, 195, 250);
    doc.setFontSize(14);
    doc.text('Cliente:', 15, 256);
    doc.setFontSize(12);
    doc.text(this.dadosCliente.nome, 33, 256);
    doc.setFontSize(14);
    doc.text('Telefone:', 15, 263);
    doc.setFontSize(12);
    doc.text(this.dadosCliente.telefone.toString(), 39, 263);
    doc.setFontSize(14);
    doc.text('Forma de pagamento:', 120, 256);
    doc.setFontSize(12);
    doc.text(this.dadosCliente.formaPagamento, 172, 256);
    doc.setFontSize(14);
    doc.text('N. de Parcelas:', 120, 263);
    doc.setFontSize(12);
    doc.text(this.dadosCliente.numeroParcelas.toString(), 155, 263);
    doc.setFontSize(14);
    doc.text('Valor Pago:', 120, 270);
    doc.setFontSize(12)
    doc.text(this.dadosCliente.valorPago.toString(), 146, 270);
    
    doc.setFontSize(12);
    doc.line(15, 285, 90, 285);
    doc.text("Cliente", 40, 291);
    doc.line(120, 285, 195, 285);
    doc.text("Sigatec", 148, 291);
    
    doc.save(`PDF`);
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