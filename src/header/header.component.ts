import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  public isBack: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
  
  ngOnChanges() {
    this.route.paramMap.subscribe(params => {
      if (params.get('addTask')){
        this.isBack = true;
      }
    })

  }

}
