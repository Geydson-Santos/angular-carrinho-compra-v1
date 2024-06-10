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

  title = "ADM";

  constructor(private router: Router) {

  }

  home() {
    this.router.navigateByUrl('index');
  }
}
