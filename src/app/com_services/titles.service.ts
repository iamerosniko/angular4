import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/RX'

@Injectable()
export class TitlesService {
  getTitles() {
    //old style of getting data
    //return TITLES

    //using observables
    let subject = new Subject();
    //simulate delay
    setTimeout(() => {subject.next(TITLES); subject.complete();}, 2000);
    return subject;
  }

  getTitle(id:number) {
    return TITLES.find(title => title.id === id)
  }
  
  constructor() { }

}

const TITLES = [
  {
      id: 1,
      name: 'First Title',
      isActive: true
  },
  {
      id: 2,
      name: 'Second Title',
      isActive: true
  },
  {
      id: 3,
      name: 'Third Title',
      isActive: false
  }
]
