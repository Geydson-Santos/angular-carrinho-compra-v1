import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [Button],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  title = "Carrinho de Compra";

  constructor(private router: Router) {

  }

  user() {
    this.router.navigateByUrl('user');
  }

  adm() {
    this.router.navigateByUrl('adm');
  }
}
