import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'vbs-form',
  templateUrl: './vbs-form.component.html',
  styleUrls: ['./vbs-form.component.sass']
})
export class VbsFormComponent {

  vbsForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    children: new FormControl(Validators.required),
    important: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {}

  get nameGet() {
    return this.vbsForm.get('name')!
  }

  get emailGet() {
    return this.vbsForm.get('email')!
  }

  get phoneGet() {
    return this.vbsForm.get('phone')!
  }

  get childrenGet() {
    return this.vbsForm.get('children')!
  }

  get importantGet() {
    return this.vbsForm.get('important')!
  }


  sendForm() {
    console.log(this.vbsForm)
  }

}
