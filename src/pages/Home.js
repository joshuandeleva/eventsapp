import React from 'react'
import HomeImage from "../assets/mac.png"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Home.css'
function Home() {
    return (
        <div className='homepage'>
            <Container>
                <Row>
                    <Col xl={6} lg={6} md={12} sm={12}>
                        <div className="homepage__img">
                            <img src={HomeImage} alt="" />
                        </div>
                    </Col>
                    <Col xl={6} lg={6} md={12} sm={12} className="d-flex align-items-center justify-content-center">
                        <div className="homepage__contentR">
                            <div className="homepage__content">
                                <span>Imagine if</span>
                                <span>Snapchat</span>
                                <span>had events.</span>
                            </div>
                            <div className="homepage__contentP">
                                <p>Easily host and share events with your friends across any social media.</p>
                            </div>
                            <div className="homepage__contentButton">
                                <button className='rounded'>
                                    <Link to="/create">
                                        🎉 Create my event
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home