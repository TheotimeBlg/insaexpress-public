import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { CharteComponent } from './charte/charte.component';
import { DefisComponent } from './defis/defis.component';

import {TeamDetailsComponent} from './team-details/team-details.component';




const routes: Routes = [
	{ path: '', component: NewComponent },
	{ path: 'charte', component: CharteComponent},
	{ path: 'team/:id', component: TeamDetailsComponent},
	{ path: 'defis', component: DefisComponent},
	//{ path: 'classement', component: TeamDetaiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
