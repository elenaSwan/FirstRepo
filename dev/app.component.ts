import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
       <div class="container">
        <div class="row main-template">
            <div class="col-xs-4">
                <h4 [class.clicked]="show">{{details.ime}} {{details.prezime}}</h4>
            </div>
            <div class="col-xs-4">
                <input type="text" [(ngModel)]="details.ime" class="form-control" /> 
            </div>
            <div class="col-xs-4">
                <button class="btn btn-default" (click)="showDetails()">{{show==true ? "Hide Details" : "Show Details"}}</button>
            </div>
            <div class="col-xs-12 details" *ngIf="show">
                <p>Phone Number: {{details.phone}}</p>
                <p>Email: {{details.email}}</p>
            </div>
        </div>
    </div>
    `,
})
export class AppComponent {
    public details = {
        ime:"Elena", prezime:"Trajkovska", phone: "123457456", email: "elena@gmail.com" 
    }
    public show = false;
    showDetails(){
        if (!this.show){
            this.show = true;
        }
        else {
            this.show = false;
        }
    }
}