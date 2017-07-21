import {Injectable} from 'angular2/core';
import {CONTACTS} from './contact-array-component';
import {contactInterface} from './contact-interface';
@Injectable()

export class contactService {
    getContacts(){
       return Promise.resolve(CONTACTS);
    }
    insertContacts(contact: contactInterface){
        return Promise.resolve(CONTACTS).then((contacts: contactInterface[])=>contacts.push(contact));
    }
}