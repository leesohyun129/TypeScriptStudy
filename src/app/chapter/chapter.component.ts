import { Component, OnInit } from '@angular/core';
import { IChapter } from '../chapter-interface';
import { TestPaperComponent } from '../test-paper/test-paper.component';
import { TestExamComponent } from '../test-exam/test-exam.component';


@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements IChapter {

  chapterIndex : number;
  paper: TestPaperComponent;
  exam: TestExamComponent;

  private paperNameSuffix ="-test.";
  private examNameSuffix ="-exam.";

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