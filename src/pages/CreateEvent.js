import React, { useState, useContext } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { GlobalContext } from '../context/globalContext';
import { useNavigate } from "react-router-dom";
function CreateEvent() {

    //hooks

    const navigate = useNavigate();

    const [eventName, setEventName] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventStopDate, setEventStopDate] = useState("")
    const [eventStartTime, setEventStartTime] = useState("")
    const [eventLOcationStreet, setEeventLOcationStreet] = useState('')
    const [eventEndTime, setEventEndTime] = useState("")
    const [eventLocation, setEventLocation] = useState("")
    const [eventPhoto, setEventPhoto] = useState("")
    const [eventHost, setEventHost] = useState("")

    //context


    const { addEvent } = useContext(GlobalContext);


    //submit event details

    const onSubmit = (e) => {
        e.preventDefault();


        const newEvent = {
            id: Math.floor(Math.random() * 100000000),
            eventName,
            eventDate,
            eventLOcationStreet,
            eventStopDate,
            eventEndTime,
            eventStartTime,
            eventLocation,
            eventHost,
            eventPhoto
        }

        addEvent(newEvent);

        //clear form
        setEventName('')
        setEventDate()
        setEventEndTime('')
        setEventHost('')
        setEventLocation('')
        setEventPhoto('')
        setEventStopDate('')
        setEeventLOcationStreet('')
        setEventStartTime('')

        console.log(newEvent)

        navigate('/event')

    }

    return (
        <div className='createevents__page'>
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={12} xl={12} className="d-flex align-items-center justify-content-center">
                        <form onSubmit={onSubmit}>
                            <div className="row">
                                <div class="form-group col-md-12 col-lg-6 col-sm-12">
                                    <label>Event Name</label>
                                    <input type="text" className="form-control" value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Enter Event Name" />
                                </div>
                                <div class="form-group col-md-12 col-lg-6 col-sm-12">
                                    <label>Host Name</label>
                                    <input type="text" className="form-control" value={eventHost} onChange={(e) => setEventHost(e.target.value)} placeholder="Enter Host Name" />
                                </div>
                            </div>
                            <div className="row">
                                <div class="form-group col-md-12 col-lg-6 col-sm-12">
                                    <label>Event LocationStreet</label>
                                    <input type="text" className="form-control" value={eventLOcationStreet} onChange={(e) => setEeventLOcationStreet(e.target.value)} placeholder="LocationStreet" />
                                </div>
                                <div class="form-group col-md-12 col-lg-6 col-sm-12">
                                    <label>Event End Time</label>
                                    <input type="Date" className="form-control" value={eventStopDate} onChange={(e) => setEventStopDate(e.target.value)} placeholder="Event Ent date" />
                                </div>
                            </div>
                            <div className="row">
                                <div class="form-group col-md-12 col-lg-6 col-sm-12">
                                    <label>Date</label>
                                    <input type="date" className="form-control" value={eventDate} onChange={(e) => setEventDate(e.target.value)} placeholder="Date" />
                                </div>
                                <div class="form-group col-md-12 col-lg-6 col-sm-12">
                                    <label>Location</label>
                                    <input type="text" className="form-control" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} placeholder="Location" />
                                </div>
                            </div>
                            <div className="row">
                                <div class="form-group col-md-12 col-lg-6 col-sm-12">
                                    <label>Date</label>
                                    <input type="date" className="form-control" value={eventDate} onChange={(e) => setEventDate(e.target.value)} placeholder="Date" />
                                </div>
                                <div class="form-group col-md-12 col-lg-6 col-sm-12">
                                    <label>Location</label>
                                    <input type="text" className="form-control" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} placeholder="Location" />
                                </div>
                            </div>
                            <div className="row">
                                <div class="form-group col-md-12 col-lg-12 col-sm-12 d-flex flex-column">
                                    <label>Upload Event Image</label>
                                    <input type="file" className="form-control-file" value={eventPhoto} onChange={(e) => setEventPhoto(e.target.value)} id="exampleFormControlFile1" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="homepage__contentButton">
                                    <button className='rounded'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CreateEvent