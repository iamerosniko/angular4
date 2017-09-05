import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer){}
  @Input() srcString : string; //this handles the path of the image
  
  ngOnInit() {
  }

}
