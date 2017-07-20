import {Component} from 'angular2/core';
import {contactDetailsComponent} from './contact-details-component';
import {contactService} from './contact-service';
import {contactInterface} from './contact-interface';
import {OnInit} from 'angular2/core';
@Component ({
    selector: 'contact-list-component',
    template: `<h3>I am contact List Compoenent</h3>
        <ul>
            <li *ngFor="#contact of contactList">
            {{contact.FirstName}}
            {{contact.LastName}}
            <a (click)="showDetails(contact)">Show Details</a>
            </li>
        </ul>
        <contact-details [contactDetails]="selected" *ngIf="show"></contact-details>`,
    directives: [contactDetailsComponent], 
    providers: [contactService]
})
export class contactListComponent implements OnInit {
    constructor(private _contactService: contactService){

    }
    public contactList: contactInterface[];
    getContacts(){
        this._contactService.getContacts().then((contactList: contactInterface[]) => this.contactList= contactList);
    }
    ngOnInit():any{
        this.getContacts();
    }
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