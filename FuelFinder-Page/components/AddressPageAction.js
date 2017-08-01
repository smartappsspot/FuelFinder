import React from 'react'
import {connect} from 'react-redux'
import {fetchFuelDetails} from '../actions.js'
import AddressPage from './AddressPage.js'

const mapStateToProps = (state) => {
    return ({
        fuelStationDet:state.Fuelreducer.fuelStationDet,
        fetching:state.Fuelreducer.fetching,
        fetched:state.Fuelreducer.fetched
    })
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchFuelDetails: (zipCode) => {
            console.log("gg")
            dispatch(fetchFuelDetails(zipCode))
        }
    }
}

const AddressPageAction = connect(mapStateToProps,mapDispatchToProps)(AddressPage)
export default AddressPageAction