import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { ProductService } from '../../commons/service/product.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [Button],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  produtos: any[];

  title = "ADM";

  constructor(private router: Router, private service: ProductService) {
    this.getAll();
  }

  home() {
    this.router.navigateByUrl('index');
  }

  getAll() {
    this.service.getAll().subscribe((prod) => this.produtos = prod);
  }

  
}
