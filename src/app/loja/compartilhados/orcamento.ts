import { Peca } from './peca';

export interface Orcamento {
    nome: string;
    cpfcnpj: number;
    telefone: string;
    pecas: Array<Peca>;
    quantidade: number;
    createdAt: string;
    id: string;
    precoTotal: number;
}