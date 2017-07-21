import {Component} from 'angular2/core';
import {contactService} from './contact-service';
import {contactInterface} from './contact-interface';
import {Router} from 'angular2/router';
import{RouteParams} from 'angular2/router';
import {OnInit} from 'angular2/core';
import {ControlGroup} from 'angular2/common';
import{FormBuilder} from 'angular2/common';
import {Validators} from "angular2/common";
@Component ({
    template: `<h3>Create new component</h3>
     <div class="create-contact row">
     <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
            <div class="details">
                <label class="label col-xs-3 col-md-1 ">First Name: </label>
                <div class="col-xs-9 col-md-11">
                    <input type="text" [ngFormControl]="myForm.controls['FirstName']" #firstName="ngForm" />
                    <span *ngIf="!firstName.valid">Not Valid</span>
                    </div>
            </div>
            <div class="details">
                <label class="label col-xs-3 col-md-1">Last Name: </label>
                <div class="col-xs-9 col-md-11"> 
                    <input type="text" [ngFormControl]="myForm.controls['LastName']"/>
                </div>
            </div>
            <div class="details">
                <label class="label col-xs-3 col-md-1">Phone: </label>
                <div class="col-xs-9 col-md-11"> 
                    <input type="text" [ngFormControl]="myForm.controls['Phone']"/>
                </div>
            </div>
            <div class="details">
                <label class="label col-xs-3 col-md-1">Email: </label>
                <div class="col-xs-9 col-md-11"> 
                    <input type="text" [ngFormControl]="myForm.controls['email']"/>
                </div>
            </div>
            <div class="btn-create">
                <button class="btn btn-default" type="submit" [disabled]="!myForm.valid">Create Contact</button>
            </div>
            </form>
        </div>
    `,
    providers: [contactService]
})

export class CreateContactcomponent implements OnInit{
    
    myForm: ControlGroup;
    constructor(private _contactServices: contactService, private _router: Router, private _routeParams: RouteParams, private _formBuilder: FormBuilder){
    }
    onSubmit(value){
        this._contactServices.insertContacts(value);
        this._router.navigate(['ContactsRoute']); //Navigate Back
    }
    ngOnInit():any{
        this.myForm = this._formBuilder.group({
            'FirstName': ['', Validators.required],
            'LastName':[this._routeParams.get('lastName'), Validators.required],
            'Phone': ['', Validators.required],
            'email':['', Validators.required]
        });
    }
}