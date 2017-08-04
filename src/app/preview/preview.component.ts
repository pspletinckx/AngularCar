import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'car-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() preview: String;

  constructor() { }

  ngOnInit() {
  }

}
