import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {
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

  onSubmit() {}
}
