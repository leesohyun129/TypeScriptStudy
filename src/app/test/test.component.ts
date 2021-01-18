import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';
import { chapter1_test } from '../question-list/chapter1-test';
import { chapter2_test } from '../question-list/chapter2-test';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  answer : string ="";
  examForm = this.formBuilder.group({
    id: 0,
    answer: ''
  })
  chapter1_test = chapter1_test; //배열을 사용하고싶다....
  constructor(private formBuilder: FormBuilder){
  }
  onSubmit(){
    this.exam(JSON.parse(this.examForm.value.id),(this.examForm.value.answer));
  }
  exam(id: number, answer: string){
    if(chapter1_test[id].answer == answer){
      window.alert("정답");
    }
    else{
      window.alert("오답");
    }
  }
}