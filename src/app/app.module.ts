import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TestComponent} from './test/test.component';

@NgModule({
  imports:      [ 
  BrowserModule, 
  ReactiveFormsModule,
  RouterModule.forRoot([
      { path: '', component: ChapterListComponent },
      { path: 'chapters/:chapterId', component: TestComponent},
    ])
  ],
  declarations: [ 
    AppComponent, ChapterListComponent, TopBarComponent, TestComponent
    ],
  bootstrap:    [ 
    AppComponent 
    ]
})
export class AppModule { }
