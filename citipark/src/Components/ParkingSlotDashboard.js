import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import Slots from './Slots'
import {connect} from 'react-redux';
import {getSlots} from '../actions/ParkingActions'
import {PropTypes} from 'prop-types';
import {Card, Table} from 'react-bootstrap';

 class ParkingSlotDashboard extends Component {

    constructor(props)
    {
      super(props);
      this.state={
        slots:[]
      }
    }
    componentDidMount()
    {
        this.props.getSlots(); 
    }
    render() {
        const {slots}=this.props.slots
        return (
            <div className="container-fluid">
                <div className="row content ">
                    <div className="col-sm-3 sidenav book_detail">

                        <h4>Booking Details</h4>
                        <img src="/volkswagen-volkswagen-type-2-bus-old-car-hd-wallpaper-preview.jpg"alt="" className="img"></img>
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" >
                            <a className="nav-link " id="v-pills-home-tab" data-toggle="pill" href="/Dashboard" role="tab" aria-controls="v-pills-home" aria-selected="true">HOME</a>
                            <Link to = "/ParkingSlot">
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" role="tab" aria-controls="v-pills-profile" aria-selected="false">Book Slot</a>
                            </Link>
                            <a className="nav-link " id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">List All Slots</a>
                        </div><br />
                      
                    </div>

                    { <thead>
                       
                          <th>Slot ID</th>
                          <th>Parking Date</th>
                          <th>Booking Date</th>
                          <th>Parking Time</th>
                          <th>Actions</th>
                       
                               </thead>}
                   
                    
                    
                
                    {   
                        slots.map(slots =>(
                            
                            <Slots  key={slots.id} slots={slots}/>

                        ))
                    }
                   
            

         
                    
                </div>
                

            </div>
        )
    }
}
ParkingSlotDashboard.propTypes={
    slots: PropTypes.object.isRequired,
    getSlots:PropTypes.func.isRequired
}
const mapStateToProps =  state =>(
    {
        slots:state.slots
    }
);
export default connect (mapStateToProps,{getSlots})(ParkingSlotDashboard);