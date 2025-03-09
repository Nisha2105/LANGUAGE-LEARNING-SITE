import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import {Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Webdecoded`}<span className="wrap">web developer</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci tempora natus tenetur consequatur ipsum ratione maxime harum aut culpa, id sunt, delectus illum dolor explicabo modi totam non facilis. Atque.</p>
                        <button onClick={() => console.log('conect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>

        </section>

    )
}
