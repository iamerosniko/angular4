import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitlesService } from '../../com_services/titles.service';

@Component({
  selector: 'app-title-details',
  templateUrl: './title_details.component.html',
  styleUrls: ['./title_details.component.css']
})
export class TitleDetailsComponent implements OnInit {
  DetailTitle: any;

  constructor(
      private eventService: TitlesService, 
      private route:ActivatedRoute) { }

  ngOnInit() {
    this.DetailTitle = this.eventService.getTitle(
        //'+= symbol cast the value to number
        +this.route.snapshot.params['id']);
  }

}
