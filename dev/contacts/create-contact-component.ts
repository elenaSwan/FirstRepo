import {Component} from 'angular2/core';
import {contactService} from './contact-service';
import {contactInterface} from './contact-interface';
import {Router} from 'angular2/router';
@Component ({
    template: `<h3>Create new component</h3>
     <div class="create-contact row">
            <div class="details">
                <label class="label col-xs-3 col-md-1 ">First Name: </label>
                <div class="col-xs-9 col-md-11"><input type="text" #firstName /></div>
            </div>
            <div class="details">
                <label class="label col-xs-3 col-md-1">Last Name: </label>
                <div class="col-xs-9 col-md-11"> <input type="text" #lastName/></div>
            </div>
            <div class="details">
                <label class="label col-xs-3 col-md-1">Phone: </label>
                <div class="col-xs-9 col-md-11"> <input type="text"#phone /></div>
            </div>
            <div class="details">
                <label class="label col-xs-3 col-md-1">Email: </label>
                <div class="col-xs-9 col-md-11"> <input type="text"#email /></div>
            </div>
            <div class="btn-create">
                <button class="btn btn-default"(click)="onAddContact(firstName.value, lastName.value, phone.value, email.value)">Create Contact</button>
            </div>
        </div>
    `,
    providers: [contactService]
})

export class CreateContactcomponent {
    constructor(private _contactServices: contactService, private _router: Router){
    }
    onAddContact (firstname, lastName, phone, email){
        // const dummyContact = {FirstName:"Dummy", LastName:"helloo", Phone:"", email:""};
        let contact: contactInterface={FirstName:firstname, LastName:lastName, Phone:phone, email:email};
        this._contactServices.insertContacts(contact);

        this._router.navigate(['ContactsRoute'])
    }
}