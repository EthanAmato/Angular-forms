import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { NgForm } from '@angular/forms'
import {ViewChild} from '@angular/core'
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {


  @ViewChild('myForm', {static:true}) myForm:any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    console.log(this.myForm)
    this.myForm.reset();
  }


}
