import {provideRouter, RouterConfig} from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},

];

export const appRouterProviders = [
	provideRouter(routes)
]