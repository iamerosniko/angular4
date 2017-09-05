import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //sample={'ss':1,'ss2':2};
  ngOnInit(){
    //sessionStorage.setItem('user',JSON.stringify(this.sample));
  }
}
