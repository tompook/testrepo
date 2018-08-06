import { Routes } from '@angular/router';

import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/error404.component';
import { EventsResolverService } from './events/event-resolver.service';
import { CreateSessionComponent, EventsListResolverService } from './events';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent,
        resolve: { events: EventsListResolverService } },
    { path: 'events/:id', component: EventDetailsComponent,
        resolve: { event: EventsResolverService } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
];

