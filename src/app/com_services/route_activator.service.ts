import { Injectable } from '@angular/core';
import { 
  CanActivate,
  ActivatedRouteSnapshot,
  Router 
} from '@angular/router'
import { TitlesService } from './titles.service';

//This service make use of CanActivate fetures of Angular Router
//if true the allows to navigate on the said route
//if false does not allows to navigate on the said route
@Injectable()
export class RouteActivatorService implements CanActivate{

  constructor(
      private titlesService: TitlesService,
      private router: Router) { 

  }

  canActivate(route: ActivatedRouteSnapshot){
    //'!!' casting value to boolean
    let titleValid = !!this.titlesService.getTitle(+route.params['id']);
    let titleActive = this.titlesService.getTitle(+route.params['id']);

    if (!titleValid)
      this.router.navigate(['/404'])

    if(!titleActive.isActive)
      this.router.navigate(['/404'])

    return true;
  }
}
