import { TipoFornecedor } from "./tipo-fornecedor";

export interface Fornecedor {
  id: string,
  nome?: string,
  documento?: string,
  tipoFornecedor: TipoFornecedor,
  ativo: boolean,
  // TODO: Add Endereço e Produtos
}
