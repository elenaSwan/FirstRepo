import {Component} from 'angular2/core';
import {contactListComponent} from './contact-list-component';

@Component({
    selector: 'my-app',
    template:`
    <h3>I am Main app component</h3>
    <hr>
    <contact-list-component></contact-list-component>
    `,
    directives: [contactListComponent]
})

export class AppComponent {

}