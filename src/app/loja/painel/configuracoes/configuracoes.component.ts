import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  constructor(private crud: CrudService, private modalService: NgbModal) {
    window.document.body.style.backgroundColor = '#F45D01';
   }

  ngOnInit() {
  }

}
