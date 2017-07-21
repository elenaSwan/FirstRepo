import {Component} from 'angular2/core';
import {contactDetailsComponent} from './contact-details-component';
import {contactService} from './contact-service';
import {contactInterface} from './contact-interface';
import {OnInit} from 'angular2/core';
@Component ({
    selector: 'contact-list-component',
    template: `
        <ul class="contact-list">
            <li *ngFor="#contact of contactList" (click)="showDetails(contact)">
            {{contact.FirstName}}
            {{contact.LastName}}
            </li>
        </ul>
        <contact-details [contactDetails]="selected"></contact-details>`,
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