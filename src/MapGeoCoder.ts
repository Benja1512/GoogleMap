export class MapGeoCoder {

    private map: google.maps.Map;
    private geocoder: google.maps.Geocoder;

    constructr(map: google.maps.Map){
        this.map = map;
        this.geocoder = new google.maps.Geocoder;
    }

    AddMarkerInfo(marker: google.maps.Marker) : void {
        marker.addListener('click', () => {
            const latlng = { 
                lat: marker.getPosition().lat(), 
                lng: marker.getPosition()!.lng}
            this.geocoder.geocode({'location' : latlng}),
            (results, status) => {
                if (status == "OK") {
                    const infoWindow = new google.maps.InfoWindow({
                        content: mappable.marketTitle(() => results[0].formatted_address)
                }
                )

                infoWindow.open(this.map, marker);

            } else  {
                window.alert ('error en la geolocalizacion: ' +  status);
            }

        });
    }

    SearchText(options: SearchOptions) : void {
        options.searchButton.addEventListener('click',  () =>  {
            const address = options.input.value;
            this.geocoder.geocode{"address": address}, (result, status) => {
                if(status === "OK")  {
                    new google.maps.Marker({
                        map.this.map.setCenter(results[0].geometry.location);
                        this.map.setZoom(16);
                        position: results[0].geometry.location
                    })
               } else {
                window.alert('error en la geolocalizacion: ' + status );
               }  
            });
            };
    }
