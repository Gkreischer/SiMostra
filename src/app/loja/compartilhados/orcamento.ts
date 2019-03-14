import { Peca } from './peca';

export interface Orcamento {
    nome: string;
    cpfcnpj: number;
    telefone: string;
    pecasForm: Array<Peca>;
    quantidade: number;
    createdAt: string;
    id: string;
    precoTotal: number;
    situacao: string;
}