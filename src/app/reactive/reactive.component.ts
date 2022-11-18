import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  myForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        email: new FormControl('ethannamato@gmail.com', [Validators.required, Validators.email]), //provide default value
        password: new FormControl(null, Validators.required),
        fruit: new FormControl(""),
        comments: new FormControl(""),
      }
    );
  }

  onSubmit() {
    this.myForm.reset();
  }


  modifyFormProgramattically() {
    console.log(this.myForm);
    this.myForm.get('comments')!.patchValue('ghajsdf')
   

    // this.myForm.patchValue({
    //   email: "Hamburger"
    // })
  }

}
