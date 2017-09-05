import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { CarouselModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,CarouselModule.forRoot(),
  ],
  declarations: [CarouselComponent, VideoPlayerComponent, PdfViewerComponent],
  exports: [CarouselComponent, VideoPlayerComponent, PdfViewerComponent]
})
export class ModCommonModule { }
