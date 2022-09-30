import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext';
import { GoCalendar, GoLocation } from "react-icons/go"
import { Container, Row, Col } from "react-bootstrap"
export default function EventDetails({ item }) {
    const { deleteEvent } = useContext(GlobalContext);
    return (
        <div>
            <Container>
                <Row>
                    <Col xl={6} lg={6} md={12} sm={12}>
                        <div className="event-details">
                            <div className="eventdetails-top">
                                <h4>{item.eventName}</h4>
                                <p>Hosted by {item.eventHost}</p>
                            </div>
                            <div className="eventDescription">
                                <div className="event-date">
                                    <GoCalendar />
                                    <span>{item.eventDate}</span>
                                    <span>{item.eventStartTime}</span>
                                    <span>{item.eventStopDate}</span>
                                    <span>{item.eventEndTime}</span>
                                </div>
                                <div className="event-date">
                                    <GoLocation />
                                    <span>{item.Location}</span>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12}>
                        <img src={item.eventPhoto} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
