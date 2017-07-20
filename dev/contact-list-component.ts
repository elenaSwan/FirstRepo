import {Component} from 'angular2/core';
import {contactDetailsComponent} from './contact-details-component';
@Component ({
    selector: 'contact-list-component',
    template: `<h3>I am contact List Compoenent</h3>
        <ul>
            <li *ngFor="#contact of contactList">{{contact.ime}}{{contact.prezime}}
            <a (click)="showDetails(contact)">Show Details</a>
            </li>
        </ul>
        <contact-details [contactDetails]="selected" *ngIf="show"></contact-details>`,
    directives: [contactDetailsComponent]
})
export class contactListComponent {
    public contactList = [
        {ime:"Elena", prezime:"Trajkovska", phone: "123457456", email: "elena@gmail.com"},
        {ime:"Bojan", prezime:"Simoski", phone: "1235747456", email: "bojan@yahoo.com"},
        {ime:"Marija", prezime:"Milosevska", phone: "358457456", email: "marija@marija.com"},
        {ime:"Oliver", prezime:"Trajkovski", phone: "968457856", email: "oliver@yahoomail.com"},
    ];
    public selected = {};
    public show = false;
        showDetails(contact){
            this.selected = contact;
            if(this.selected){
                this.show = true;
            }
            else{
                this.show = false;
            }
        }
}