import { Button } from 'bootstrap';
import React, { Component } from 'react';
import {Card, Table} from 'react-bootstrap';
import {getSlots} from '../actions/ParkingActions'
 class Slots extends Component {
   constructor(props)
   {
     super(props);
     this.state={
       slots:[]
     }
   }
    

    render() {
        const{slots}=this.props;
        return (
          <div className ="table">
          <Table bordered hover striped variant="dark">
          
 
<tbody>
 {
     
       <tr >
       <td>{slots.parkingSlotId}</td>
       <td>{slots.parkingDate}</td>
       <td>{slots.bookingDate}</td>
       <td>{slots.parkingTime}</td>
       </tr>
     
         
        
     
 }
</tbody>
          </Table>
          
         
          </div>
         
        )
    }
}
export default Slots;