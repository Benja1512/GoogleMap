 export  abstract class Person implements Mappable {
    name:string;
    location: {
        lat:string;
        lng:string;
    }

     get getLocation() {
        return this.location;
        position: {
            lat: parseInt (passenger.getLocation.lat),
            lng: parseInt (passenger.getLocantion.lng),
        },
        }
     }   

    constructor(name:string, location:{lat:string, lng: string}){
        this.name = name;
        this.location = {
            lat: location.lat,
            lng: location.lng,
        };
    }
    
    markerTitle(address: () => string) : string {
        return `la direccion de ${this.name} es ${}`
    
    }
 