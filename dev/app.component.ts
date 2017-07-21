import {Component} from 'angular2/core';
import {contactListComponent} from './contacts/contact-list-component';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {CreateContactcomponent} from './contacts/create-contact-component';
@Component({
    selector: 'my-app',
    template:`
    <header>
        <nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand">Angular 2</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li class="active"> <a [routerLink]="['ContactsRoute']">Contacts </a></li>
                <li><a [routerLink]="['NewContactRoute']">New Contact </a></li>
            </ul>
        </div>
        <!--/.nav-collapse -->
    </div>
    <!--/.container-fluid -->
</nav>
    </header>
    <div class="main">
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [contactListComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/contacts', name: 'ContactsRoute', component: contactListComponent, useAsDefault: true},
    {path: '/newcontact', name: 'NewContactRoute', component: CreateContactcomponent},
    // {path: '/newcontact/:lastName', name: 'NewContactFromContact', component: CreateContactcomponent}
])

export class AppComponent {

}