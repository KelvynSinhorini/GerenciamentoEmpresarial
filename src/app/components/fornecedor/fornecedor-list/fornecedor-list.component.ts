import { FornecedorService } from './../../../core/services/fornecedor/fornecedor.service';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Fornecedor } from '../../../core/services/fornecedor/fornecedor';

@Component({
  selector: 'app-fornecedor-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    FornecedorService
  ],
  templateUrl: './fornecedor-list.component.html',
  styleUrl: './fornecedor-list.component.scss'
})

export class FornecedorListComponent implements OnInit {
  fornecedores: Fornecedor[] = [];

  constructor(private fornecedorService: FornecedorService) {}

  displayedColumns: string[] = ['id', 'nome', 'documento', 'tipoFornecedor', 'ativo'];

  ngOnInit() {
    this.fornecedorService.obterFornecedores().subscribe({
      next: fornecedores => {
        this.fornecedores = fornecedores;
      },
      error: err => console.error('Ocorreu um erro ao obter a lista de produtos: ' + err),
      complete: () => console.log('Observable emitted the complete notification')
    })
  }
}
