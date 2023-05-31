import { Map } from "./Map";
import { Passenger } from "./Passenger";
import { Driver } from "./Driver";
import { Search } from '@mui/icons-material';

var map = new Map("map");
const driver = new Driver();
const passenger = new Passenger();
const myHome = new MyHome(passenger);

map.AddMarker(driver);
map.AddMarker(passenger);
map.AddMarker(MyHome);


map.SearchText()
{
    input: document.getElementById("address")!,
    searchButton: <HTMLButtonElement>document.getElementById("address")!,
};

/*new google.maps.Map(
    document.getElementById('map')!),
    {
        zoom: 1,
        center : {
            lat: 0,
            lng: 0,
        }
    }
*/

/* const element =document.getElementById("map");

if(element != null)
new google.maps.Map(document.getElementById("map")); */