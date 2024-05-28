import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Toast, ToastrService } from 'ngx-toastr';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  productService = inject(ProductsService);
  toastService = inject(ToastrService);

  form = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: Validators.required })
  });

  onSubmit() {
    const payload = { title: this.form.controls['title'].value };
    this.productService.createProduct(payload).subscribe(() => {
      this.toastService.success('Deu certo');
    })

  }

}
