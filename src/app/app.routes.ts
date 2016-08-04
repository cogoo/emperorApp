import {provideRouter, RouterConfig} from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmperorDetailComponent } from './emperor-detail/emperor-detail.component';

const routes: RouterConfig = [
	{
		path: 'emperors',
		component: MainComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'detail/:id',
		component: EmperorDetailComponent
	},
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},

];

export const appRouterProviders = [
	provideRouter(routes)
]