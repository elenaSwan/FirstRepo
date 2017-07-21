import {Component} from 'angular2/core';
import {contactService} from './contact-service';
import {contactInterface} from './contact-interface';
import {Router} from 'angular2/router';
import{RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';
@Component ({
    template: `<h3>Create new component</h3>
     <div class="create-contact row">
     <form #myForm="ngForm" (ngSubmit)="onSubmit()">
            <div class="details">
                <label class="label col-xs-3 col-md-1 ">First Name: </label>
                <div class="col-xs-9 col-md-11">
                    <input type="text" ngControl="firstName" [(ngModel)] ="newContact.FirstName" #firstNameError="ngForm" required/>
                    <span *ngIf="!firstNameError.valid">Enter your Name</span>
                    </div>
            </div>
            <div class="details">
                <label class="label col-xs-3 col-md-1">Last Name: </label>
                <div class="col-xs-9 col-md-11"> 
                    <input type="text" ngControl="lastName" [(ngModel)]="newContact.LastName" required />
                </div>
            </div>
            <div class="details">
                <label class="label col-xs-3 col-md-1">Phone: </label>
                <div class="col-xs-9 col-md-11"> 
                    <input type="text" ngControl="phone" [(ngModel)]="newContact.Phone" required />
                </div>
            </div>
            <div class="details">
                <label class="label col-xs-3 col-md-1">Email: </label>
                <div class="col-xs-9 col-md-11"> 
                    <input type="text" ngControl="email" [(ngModel)]="newContact.email" required />
                </div>
            </div>
            <div class="btn-create">
                <button class="btn btn-default" type="submit" [disabled]="!myForm.form.valid">Create Contact</button>
            </div>
            </form>
        </div>
    `,
    providers: [contactService]
})

export class CreateContactcomponent implements OnInit{
    
    newContact: contactInterface;

    constructor(private _contactServices: contactService, private _router: Router, private _routeParams: RouteParams){
    }
    onSubmit(){
        this._contactServices.insertContacts(this.newContact);
        this._router.navigate(['ContactsRoute']); //Navigate Back
    }
    ngOnInit():any{
        this.newContact = {FirstName:'', LastName: this._routeParams.get('lastName'), Phone:'', email:''}
    }
}