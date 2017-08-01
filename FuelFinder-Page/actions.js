
export const fetchFuelDetails = (zipCode) => {
    var geocoder = new google.maps.Geocoder()
    var lat
    var lng
    var latlngLocation
    
    return (dispatch) => {
        dispatch({type:"FETCHING_FUEL_DATA",payload:''})
        geocoder.geocode({address:zipCode},
                    (results_array,status) => {
        if (status == google.maps.GeocoderStatus.OK) {
             lat = results_array[0].geometry.location.lat()
             lng = results_array[0].geometry.location.lng()
             console.log("lat :",results_array)
             latlngLocation = {
                 latitude:lat,
                 longitude:lng
             }
             
             return fetch(`http://api.mygasfeed.com/stations/radius/${lat}/${lng}/5/reg/distance/5pf2pf32o3.json`
                         )
                 .then(resp => {console.log("resp", resp)
                                return resp.json()})
                 .then(json => {dispatch(returnGeoInfo(json))})
                 .catch(err => { console.log ("err",err)
                                dispatch({type:"FETCH_MESSAGE_ERROR",error:err})})
             
             
        } else {
            console.log("error in Google geocode :", status)
        }
    }
  )
}

}

function returnGeoInfo(fuelDet) {  
     return {
    type: "FETCH_GEOINFO_SUCCESS",
    payload:fuelDet
  } 
}