import { Injectable } from '@angular/core';
import { Fornecedor } from './fornecedor';
import { Guid } from '../../helpers/guid';
import { Observable } from 'rxjs';

const FORNECEDOR_DATA: Fornecedor[] = [
  { id: Guid.newGuid(), nome: 'Fornecedor 1', documento: '13283555577', tipoFornecedor: 0, ativo: true },
  { id: Guid.newGuid(), nome: 'Fornecedor 2', documento: '13283555577', tipoFornecedor: 0, ativo: true },
  { id: Guid.newGuid(), nome: 'Fornecedor 3', documento: '13283555577', tipoFornecedor: 0, ativo: false },
  { id: Guid.newGuid(), nome: 'Fornecedor 4', documento: '13283555577', tipoFornecedor: 0, ativo: true },
  { id: Guid.newGuid(), nome: 'Fornecedor 5', documento: '13283555577', tipoFornecedor: 0, ativo: true },
  // { id: Guid.newGuid(), nome: 'Fornecedor 6', documento: '13283555577', tipoFornecedor: 0, ativo: false },
  // { id: Guid.newGuid(), nome: 'Fornecedor 7', documento: '13283555577', tipoFornecedor: 0, ativo: true },
  // { id: Guid.newGuid(), nome: 'Fornecedor 8', documento: '13283555577', tipoFornecedor: 0, ativo: true },
  // { id: Guid.newGuid(), nome: 'Fornecedor 9', documento: '13283555577', tipoFornecedor: 0, ativo: true },
  // { id: Guid.newGuid(), nome: 'Fornecedor 10', documento: '13283555577', tipoFornecedor: 0, ativo: true },
]

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor() { }

  obterFornecedores(): Observable<Fornecedor[]> {
    return new Observable<Fornecedor[]>(subscriber => {
      subscriber.next(FORNECEDOR_DATA); // Emite a lista de fornecedores
      subscriber.complete(); // Indica que a emissão está completa
    });
  }
}
