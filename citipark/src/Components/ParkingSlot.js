import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import {Form, Button} from 'react-bootstrap'
import {connect} from "react-redux";
import {createSlots} from '../actions/ParkingActions'



class ParkingSlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parkingTime : "",
            parkingDuration : "",
            parkingDate: "",
            stateFormErrors:{}
            
        }
        this.onDateChange = this.onDateChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    }
    handleFormValidation=()=> {
        const {parkingTime,parkingDuration, parkingDate  } = this.state;
            let formErrors = {};
            let formIsValid = true;

            if(!parkingTime) {
                formIsValid = false;
                formErrors["parkingTimeError"] = "Parking Time Required";
            }

            if(!parkingDate) {
                formIsValid = false;
                formErrors["parkingDateError"] = "Parking Date is Required";
            }

            if(!parkingDuration) {
                formIsValid = false;
                formErrors["parkingDurationError"] = "ParkingDuration Required";
            }

          

            this.setState({stateFormErrors: formErrors});
            return formIsValid;
    }
 
    onChange(event) {
        this.setState(
            {[event.target.name]:event.target.value}
        );
    }

    onDateChange(parkingDate) {
        this.setState({
          
            parkingDate: parkingDate
        });
    }

    onSubmit(event){
        event.preventDefault();
        if(this.handleFormValidation())
        {

            const newBooking = {
           
                parkingTime : this.state.parkingTime,
                parkingDuration : this.state.parkingDuration,
                parkingDate: this.state.parkingDate
               }
               this.props.createSlots(newBooking,this.props.history);
    
        }

        }
       

    render() {
        return (
            <div className="ParkingHero">
                <div className="booking">
                    <h5 class="display-3 text-center"><b>Your Dream Cars Now For Rent !</b></h5>
                    <div>
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <hr />
                                <form onSubmit={this.onSubmit}>
                                    <h6>Parking Time</h6>
                                    <div className="form-group">
                                    <input  type="time" 
                                    className="form-control form-control-lg"
                                    value={this.state.parkingTime}
                                    onChange={this.onChange}
                                       name="parkingTime"  />
                                    </div>
                                    <div className="line-box">
                                        <div className="line"></div>
                                    </div>
                                    <div>
                                        <p className="error" style={{color:"yellow"}}>{this.state.stateFormErrors.parkingTimeError}</p>
                                    </div>
                                    <h6>Parking Duration(KM)</h6>
                                    <div className="form-group">
                                        <input  type="number"
                                         min="10" 
                                         max="100" 
                                         className="form-control form-control-lg"
                                         value={ this.state.parkingDuration}
                                         onChange={this.onChange}
                                            name="parkingDuration"  />
                                    </div>

                                    <div className="line-box">
                                        <div className="line"></div>
                                    </div>
                                    <div>
                                        <p className="error" style={{color:"yellow"}}>{this.state.stateFormErrors.parkingDurationError}</p>
                                    </div>
                                    <div>
                                        <h6>Parking Date</h6>
                                        <div className="form-group">
                                            <DatePicker className="form-control form-control-lg"
                                            selected={this.state.parkingDate}
                                                
                                                onChange={this.onDateChange}
                                                minDate={new Date()}
                                                dateFormat="dd/MM/yyyy"
                                                name="parkingDate"
                                            />
                                        </div>
                                        <div className="line-box">
                                        <div className="line"></div>
                                    </div>
                                    <div>
                                        <p className="error" style={{color:"yellow"}}>{this.state.stateFormErrors.parkingDateError}</p>
                                    </div>
                                        
                                        
                                        
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block mt-5" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(null,{createSlots})(ParkingSlot);