import { Peca } from './peca';

export interface Orcamento {
    nome: string;
    cpfcnpj: number;
    telefone: string;
    pecasForm: Array<Peca>;
    quantidade: number;
    createdAt: string;
    id: string;
    formaPagamento: string;
    precoTotal: string;
    situacao: string;
    numeroParcelas: number;
    nomeFuncionario: string;
    parcelado: boolean;
}