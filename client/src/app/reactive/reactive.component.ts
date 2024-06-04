import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent {
  userForm: FormGroup;

  ngOnInit() {
    this.userForm = new FormGroup<any>(
      {
        uName: new FormControl(null, [Validators.required]),
        uAge: new FormControl('12')
      }
    )
  }
  handleFormSubmit() {
      console.log(this.userForm)
    console.log(this.userForm.value)
  }

}
