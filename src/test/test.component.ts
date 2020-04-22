import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div style="text-align: center;">
    <h1>This is a test</h1>
    </div>
  `,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
