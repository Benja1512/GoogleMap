
import faker from 'faker';
import { Person } from './Person';


export  class Passenger extends Person {
    private readonly name: string;
    private readonly location: {
        lat: string;
        lng: string;
    }

    Constructor(){

        super(faker.name.firstName(), {
            lat: faker.address.latitude(),
            lng: faker.address.longitude(),
        } );       

        }
    }    

    var p = new Person();