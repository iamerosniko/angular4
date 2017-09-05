import { 
  Component, 
  OnInit 
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createtitle',
  templateUrl: './create_title.component.html',
  styleUrls: ['./create_title.component.css']
})
export class CreateTitleComponent implements OnInit {
  isDirty: boolean = true;
  title:any;

  constructor(
      private router: Router) { 
  }

  cancelClick() {
    this.router.navigate(['/title']);
  }

  ngOnInit() {
  }

}
