import {Component} from 'angular2/core';

@Component ({
    selector: 'contact-details',
    template: `<h3>I am Contact Details Component</h3>
        <div class="showDetails">
            <p>{{contactDetails.FirstName}}</p>
            <p>{{contactDetails.LastName}}</p>
            <p>{{contactDetails.Phone}}</p>
            <p>{{contactDetails.email}}</p>
        </div>
    `,
    inputs: ["contactDetails"]
})
export class contactDetailsComponent {
    public contactDetails ={};
}