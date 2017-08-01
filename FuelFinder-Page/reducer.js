const INITIAL_STATE={
    fuelStationDet:'',
    fetching:false,
    fetched:false
}
export default function Fuelreducer(state={INITIAL_STATE},action){
    
    switch (action.type){
        case "FETCH_GEOINFO_SUCCESS":{
            console.log("ddddd",action.payload)
            return {...state, fuelStationDet:action.payload, fetching:false,fetched:true}
        }    
        case "FETCH_MESSAGE_ERROR":{
            console.log("errrrrr",action.payload)
            return {...state, fuelStationDet:null,fetching:false,fetched:false}
        }
        case "FETCHING_FUEL_DATA":{
            return {...state, fuelStationDet:null,fetching:true,fetched:false}
        }
    }
    return state
}