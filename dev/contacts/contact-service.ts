import {Injectable} from 'angular2/core';
import {CONTACTS} from './contact-array-component'
@Injectable()

export class contactService {
    getContacts(){
       return Promise.resolve(CONTACTS);
    }
}