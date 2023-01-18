import { UserService } from '../../../services/auth/user.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private userService: UserService
  ) {
    this.loginFormGroup = this.fb.group({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    var value: { email: string; password: string } = this.loginFormGroup.value;
    this.userService.login(value.email, value.password);
  }
}
