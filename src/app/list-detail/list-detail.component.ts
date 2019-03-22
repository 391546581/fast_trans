import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) {     
  }

  ngOnInit() {
  }

  showContent(){
     const ele = +this.route.snapshot.paramMap.get('ele');
     console.log(ele);
  }
  
}
