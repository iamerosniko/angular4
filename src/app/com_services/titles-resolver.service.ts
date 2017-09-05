import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TitlesService } from './titles.service';

//this service will make that data is already loaded before showing to browser
@Injectable()
export class TitlesResolverService implements Resolve<any>{
  constructor(
      private titlesService: TitlesService) { }

  resolve() {
    return this.titlesService.getTitles().map(titles => titles)
  }
}