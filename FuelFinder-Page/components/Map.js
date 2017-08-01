import React from 'react'
import styles from '../styles/style.css'
import ReactDOM from 'react-dom'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import {FormGroup,ControlLabel,FormControl,Panel,Glyphicon,Button,Well,Col,Row,Popover,Form} from 'react-bootstrap'


export default class Map extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    
    
  render(){
        var mapStyle = {
            height:'90%',
            width:'100%'
        }
        const {center} = this.props
        console.log(this.props.markers)
        console.log(this.props.center)
        const markers = this.props.markers.map((venue,i) => {
            return <Marker key={i} {...venue}/>            
        })
        
        const GettingStartedGoogleMap = withGoogleMap(props => (
                                        <GoogleMap
                                            defaultZoom={13}
                                            defaultCenter={center}
                                            options={{streetViewControl:true,mapTypeControl:true}}>
                                        {markers}
                                        </GoogleMap>
                                  ))
        
        const mapContainer = <div style={mapStyle}>
                             </div>    
        const mapElement = <div style = {mapStyle}>
                           </div>
       // console.log("load",withGoogleMap)
        //console.log("map",GoogleMap)
        return (
            <GettingStartedGoogleMap
                containerElement={mapContainer}
                mapElement={mapElement}
            />
            )
    }    
}

