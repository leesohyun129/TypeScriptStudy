import { Component, OnInit } from '@angular/core';
import { chapter1_test } from '../question-list/chapter1-test';
import { chapter2_test } from '../question-list/chapter2-test';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  
  chapter1_test = chapter1_test; //배열을 사용해보고싶다....
}