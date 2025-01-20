import { Component } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrl: './form-signup.component.css'
})
export class FormSignupComponent {

  form = new FormGroup({});
  model = { username: '', password: '', email: '' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      props: {
        label: 'Username',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      props: {
        label: 'Password',
        type: 'password',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email',
        type: 'email',
        required: true,
      },
    },
  ];

  // constructor(private http: HttpClient) {}

  onSubmit(model: any) {
    console.log(model);
    // if (this.form.valid) {
    //   this.http.post('http://localhost:3001/users', this.model)
    //     .subscribe(response => {
    //       console.log('User registered successfully!', response);
    //     });
    // }
  }

}
