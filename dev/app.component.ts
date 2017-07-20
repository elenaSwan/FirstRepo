import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template:`
    <div class="container">
        <ul class="contact-list">
            <li *ngFor="#contact of contactList">
                {{contact.ime}}
                {{contact.prezime}}
                <a (click)="showDetails(contact)">Show Details</a>
            </li>
        </ul>
        <div class="showDetails" *ngIf="show">
            <p>{{selected.ime}}</p>
            <p>{{selected.prezime}}</p>
            <p>{{selected.phone}}</p>
            <p>{{selected.email}}</p>
            <button (click)="close()" class="btn btn-danger">close</button>
        </div>
    </div>
    `
})

export class AppComponent {
    public contactList = [
        {ime:"Elena", prezime:"Trajkovska", phone: "123457456", email: "elena@gmail.com"},
        {ime:"Bojan", prezime:"Simoski", phone: "123457456", email: "elena@gmail.com"},
        {ime:"Marija", prezime:"Milosevska", phone: "123457456", email: "elena@gmail.com"},
        {ime:"Oliver", prezime:"Trajkovski", phone: "123457456", email: "elena@gmail.com"},
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
    close (){
        this.show=false;
    }
}