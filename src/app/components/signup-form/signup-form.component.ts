import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { UsernameValidators } from 'src/app/common/validators/username.validator';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',[ 
        Validators.required,
        Validators.minLength(3),
        // UsernameValidators.cannotContainSpace,
        //UsernameValidators.shouldBeUnique
      ]),
        password: new FormControl('', Validators.required)
    })
  });

  get prop() {
    return {
      username: this.form.get('account.username'),
      password: this.form.get('account.password')
    }
     
  }
}
