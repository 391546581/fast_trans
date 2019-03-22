import { Component, OnInit,ViewChild,ElementRef, AfterViewInit,Inject } from '@angular/core';
import { Renderer2} from '@angular/core';
import { Sentences } from '../sentences';
import { ListService } from '../list.service';
import { SENTENCES } from '../mock-sentences';

import { Injectable } from '@angular/core';

import { TranslateDirective} from '../translate.directive'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements AfterViewInit {
  list: Sentences[];
  listS = SENTENCES;

  chooseOne : Sentences;

  @ViewChild('div1') div: ElementRef; // @ViewChild通过模板变量名获取



  constructor(private listService: ListService,private render2: Renderer2) { }

  ngOnInit() {
    // this.getLists();
    // const child = this.render2.selectRootElement("div1");
 
  }

  
  ngAfterViewInit(){
    // const child = this.render2.selectRootElement("div1");
    // console.log(this.div);
  }

}
