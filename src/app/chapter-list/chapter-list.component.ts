import { Component, OnInit } from '@angular/core';

import { chapters } from '../chapters';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent  {
  chapters = chapters;
  
}