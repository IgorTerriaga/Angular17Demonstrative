import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../shared/services/products.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Product } from '../../shared/interfaces/IProduct';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  productService = inject(ProductsService);
  toastService = inject(ToastrService);
  product: Product = inject(ActivatedRoute).snapshot.data['product'];
  router = inject(Router);
  form = new FormGroup({
    title: new FormControl(this.product.title, { nonNullable: true, validators: Validators.required })
  });

  onSubmit() {
    const payload = { title: this.form.controls['title'].value };
    this.productService.updateProduct(this.product.id, payload).subscribe(() => {
      this.toastService.success('Produto editado com sucesso');
    }).add(() => this.router.navigateByUrl('/'))

  }
}
