import { Component, OnInit } from '@angular/core';
import { IChapter } from '../chapter-interface';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements IChapter {

  constructor() { }
  getTest(){

  }
  getExam(){

  }
  getChapterIndex(){

  }
  TestExam(){
    
  }
  ngOnInit() {
  }

}