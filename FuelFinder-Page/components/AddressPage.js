import React from 'react'
import styles from '../styles/style.css'
import ReactDOM from 'react-dom'
import Map from './Map.js'
import {FormGroup,ControlLabel,FormControl,Panel,Glyphicon,Button,Well,Col,Row,Popover,Form} from 'react-bootstrap'

export default class AddressPage extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    
    handleSubmit() {
        const{fetchFuelDetails} = this.props
        var zip = ReactDOM.findDOMNode(this.refs.zipCodeField).value
        console.log("zip",zip)
        fetchFuelDetails(zip)
    }
    
    render(){
        
        var markers =[]
        var markers1 =[]
        var location
        
        var loginFormStyle = {
            margin: '0 auto',
            padding:'0',
            maxWidth: '220px'
        }
        var divStyle = {
            display:'block',
            textAlign:'center',
            marginBottom:'10px'
        }
        var mapDivStyle = {
            width:'100% ',
            height:500
        }
        
        console.log("fuelStationDet", this.props.fuelStationDet)
        const {fuelStationDet} = this.props
        if (fuelStationDet != undefined){
            console.log("lat lng val :", fuelStationDet)
            var temp = fuelStationDet.stations.map((station) => {
                markers.push({
                    position:{
                        lat: parseFloat(station.lat),
                        lng: parseFloat(station.lng)
                    },
                    defaultAnimation: 2
                })
            })
            console.log("temp1", markers)
            markers1 = [
                {
                    position:{
                        lat: parseFloat(fuelStationDet.stations[0].lat),
                        lng: parseFloat(fuelStationDet.stations[0].lng)
                    },
                    defaultAnimation: 2
                },
                {
                    position:{
                        lat: parseFloat(fuelStationDet.stations[0].lat),
                        lng: parseFloat(fuelStationDet.stations[0].lng)
                    },
                    defaultAnimation: 2
                }
            ]
            console.log("MMMM1", markers1)
            location = {
                lat: parseFloat(fuelStationDet.geoLocation.lat),
                lng: parseFloat(fuelStationDet.geoLocation.lng)
            }
        } else {
            markers = [
                {
                    position:{
                        lat: 40.7575285,
                        lng: -73.9884469
                    },
                    defaultAnimation: 2
                }
            ]
            location = {
                lat:40.7575285,
                lng:-73.9884469
            }
        }
        
                
        
        return (
            <div>
                <div style = {divStyle}>
                      <form style ={loginFormStyle} onSubmit={this.handleSubmit.bind(this)} >
                        <FormGroup
                          controlId="formBasicText">
                          <FormControl
                            type="text"
                            ref="zipCodeField"
                            placeholder="Enter zipcode to find fuel data"
                            required/>
                        </FormGroup>
                        <Button type="submit" bsStyle="success">
                          Submit
                        </Button>                
                      </form>
                  </div>
                  <div></div>
                  <div style = {mapDivStyle}>
                    <Map center={location} markers={markers}/>        
                  </div>
            </div>
            )
        
    }
    

    
}

