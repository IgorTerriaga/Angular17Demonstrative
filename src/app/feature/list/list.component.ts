import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/IProduct';
import { CardComponent } from '../../features/list/components/card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, MatButtonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  productService = inject(ProductsService);
  products: Product[] = [];

  ngOnInit() {
    this.productService.getAll().subscribe((p) => {
      this.products = p;
    })
  }

}
