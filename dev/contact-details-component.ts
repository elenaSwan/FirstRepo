import {Component} from 'angular2/core';

@Component ({
    selector: 'contact-details',
    template: `<h3>I am Contact Details Component</h3>
        <div class="showDetails">
            <p>{{contactDetails.ime}}</p>
            <p>{{contactDetails.prezime}}</p>
            <p>{{contactDetails.phone}}</p>
            <p>{{contactDetails.email}}</p>
        </div>
    `,
    inputs: ["contactDetails"]
})
export class contactDetailsComponent {
    public contactDetails ={};
}