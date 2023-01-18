import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../../../services/product/product.service';
import { Product } from './../../../models/product.model';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  formGroup: FormGroup;
  @Input() product!: Product;
  imageUrl!: string;
  isOnEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private toast: ToastrService
  ) {
    this.formGroup = this.fb.group({
      id: new FormControl(null),
      title: new FormControl(null),
      description: new FormControl(null),
      boughtUserId: new FormControl(null),
      price: new FormControl(null),
      imageUrl: new FormControl(null),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.isOnEdit) {
      this.productService.update(this.formGroup.value).subscribe((res) => {
        this.toast.success('Product updated');
        location.reload();
      });
    } else {
      this.productService.create(this.formGroup.value).subscribe((res) => {
        this.toast.success('Product added');
        // location.reload();
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    let product = changes.product.currentValue;
    if (product) {
      delete product['__v'];
      delete product['_id'];
      this.formGroup.setValue(product);
      this.isOnEdit = true;
    }
  }

  resetEdit() {
    this.isOnEdit = false;
    this.formGroup.reset();
    this.imageUrl = '';
  }
}
