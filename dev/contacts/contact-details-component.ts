import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {contactService} from './contact-service';
import {contactInterface} from './contact-interface';
@Component ({
    selector: 'contact-details',
    template: `
            <hr>
        <div class="show-details row">
            <div class="details">
                <label class="label col-xs-3 col-md-1 ">First Name: </label>
                <div class="col-xs-9 col-md-11"><input type="text" [(ngModel)]="contactDetails.FirstName" /></div>
            </div>
            <div class="details">
                <label class="label col-xs-3 col-md-1">Last Name: </label>
                <div class="col-xs-9 col-md-11"> <input type="text" [(ngModel)]="contactDetails.LastName" /></div>
            </div>
            <div class="details">
                <label class="label col-xs-3 col-md-1">Phone: </label>
                <div class="col-xs-9 col-md-11"> <input type="text" [(ngModel)]="contactDetails.Phone" /></div>
            </div>
            <div class="details">
                <label class="label col-xs-3 col-md-1">Email: </label>
                <div class="col-xs-9 col-md-11"> <input type="text" [(ngModel)]="contactDetails.email" /></div>
            </div>

            <button class="btn btn-default" (click)="onCreateNew()">Create new Contact from this contact</button>
        </div>
    `,
    inputs: ["contactDetails"]
})
export class contactDetailsComponent {
    public contactDetails: contactInterface =null;
    constructor (private _router: Router){

    }
    onCreateNew(){
        this._router.navigate(['NewContactRoute', {lastName: this.contactDetails.LastName}])
    }
}