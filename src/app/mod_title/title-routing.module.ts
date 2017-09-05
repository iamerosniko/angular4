import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title.component';
import { TitleDetailsComponent } from './smd_title_details/title_details.component'
import { RouteActivatorService } from '../com_services/route_activator.service'
import { TitlesResolverService } from '../com_services/titles-resolver.service'

const routes: Routes = [
    { path: 'title', component: TitleComponent,
            resolve: {titles: TitlesResolverService} },
    // use a service that is define in the provider
    { path: 'title/:id', component: TitleDetailsComponent,
            canActivate: [RouteActivatorService]}
];

@NgModule ({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})



export class TitleRoutingModule {}