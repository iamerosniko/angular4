import { 
  Component, 
  OnInit 
} from '@angular/core';
import { TitlesService } from '../com_services/titles.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  titles: any;

  constructor(
      private eventService: TitlesService,
      private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    //old style of getting data
   // this.titles = this.eventService.getTitles();

    //using observables
    //this.eventService.getTitles().subscribe(titles => {this.titles = titles});

    //using Resolver Service
    this.titles = this.activatedRoute.snapshot.data['titles'];
  }

  
}
