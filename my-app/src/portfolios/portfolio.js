import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Row, Col, Container
  } from 'reactstrap';
import "./portfolio.css";
class Portfolio extends Component {
    constructor(props){
        super(props);

        this.state = {
            projects : [{
                "id": 1,
                "name_pj": "Wine - White, Antinore Orvieto",
                "date": "11/19/2019",
                "desception": "non velit nec nisi vulputate nonummy maecenas tincidunt lacus at",
                "imgUrl": "http://dummyimage.com/150x100.jpg/dddddd/000000"
              }, {
                "id": 2,
                "name_pj": "Gherkin",
                "date": "7/5/2020",
                "desception": "hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis",
                "imgUrl": "http://dummyimage.com/150x100.jpg/dddddd/000000"
              }, {
                "id": 3,
                "name_pj": "Bread - Hot Dog Buns",
                "date": "9/7/2020",
                "desception": "vestibulum proin eu mi nulla ac enim in tempor turpis",
                "imgUrl": "http://dummyimage.com/150x100.jpg/ff4444/ffffff"
              }, {
                "id": 4,
                "name_pj": "Myers Planters Punch",
                "date": "3/16/2020",
                "desception": "tristique fusce congue diam id ornare imperdiet sapien urna pretium",
                "imgUrl": "http://dummyimage.com/150x100.jpg/dddddd/000000"
              }, {
                "id": 5,
                "name_pj": "Beef Ground Medium",
                "date": "3/23/2020",
                "desception": "sed nisl nunc rhoncus dui vel sem sed sagittis nam",
                "imgUrl": "http://dummyimage.com/150x100.jpg/dddddd/000000"
              }, {
                "id": 6,
                "name_pj": "Wine - Vineland Estate Semi - Dry",
                "date": "6/20/2020",
                "desception": "luctus et ultrices posuere cubilia curae nulla dapibus dolor vel",
                "imgUrl": "http://dummyimage.com/150x100.jpg/dddddd/000000"
              }, {
                "id": 7,
                "name_pj": "Pork Casing",
                "date": "11/13/2019",
                "desception": "nulla justo aliquam quis turpis eget elit sodales scelerisque mauris",
                "imgUrl": "http://dummyimage.com/150x100.jpg/5fa2dd/ffffff"
              }, {
                "id": 8,
                "name_pj": "Bread - Ciabatta Buns",
                "date": "4/15/2020",
                "desception": "morbi quis tortor id nulla ultrices aliquet maecenas leo odio",
                "imgUrl": "http://dummyimage.com/150x100.jpg/5fa2dd/ffffff"
              }, {
                "id": 9,
                "name_pj": "Flour - Semolina",
                "date": "5/17/2020",
                "desception": "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique",
                "imgUrl": "http://dummyimage.com/150x100.jpg/ff4444/ffffff"
              }, {
                "id": 10,
                "name_pj": "Carrots - Jumbo",
                "date": "12/6/2019",
                "desception": "id consequat in consequat ut nulla sed accumsan felis ut",
                "imgUrl": "http://dummyimage.com/150x100.jpg/ff4444/ffffff"
              }, {
                "id": 11,
                "name_pj": "Chicken - Diced, Cooked",
                "date": "9/17/2020",
                "desception": "sapien varius ut blandit non interdum in ante vestibulum ante",
                "imgUrl": "http://dummyimage.com/150x100.jpg/dddddd/000000"
              }, {
                "id": 12,
                "name_pj": "Vodka - Hot, Lnferno",
                "date": "5/23/2020",
                "desception": "ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien",
                "imgUrl": "http://dummyimage.com/150x100.jpg/5fa2dd/ffffff"
              }, {
                "id": 13,
                "name_pj": "Sauce - Vodka Blush",
                "date": "7/18/2020",
                "desception": "quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit",
                "imgUrl": "http://dummyimage.com/150x100.jpg/cc0000/ffffff"
              }, {
                "id": 14,
                "name_pj": "Water - Spring Water 500ml",
                "date": "3/5/2020",
                "desception": "tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida",
                "imgUrl": "http://dummyimage.com/150x100.jpg/ff4444/ffffff"
              }, {
                "id": 15,
                "name_pj": "Food Colouring - Green",
                "date": "2/4/2020",
                "desception": "mauris sit amet eros suspendisse accumsan tortor quis turpis sed",
                "imgUrl": "http://dummyimage.com/150x100.jpg/5fa2dd/ffffff"
              }, {
                "id": 16,
                "name_pj": "Carroway Seed",
                "date": "10/11/2020",
                "desception": "lobortis vel dapibus at diam nam tristique tortor eu pede",
                "imgUrl": "http://dummyimage.com/150x100.jpg/cc0000/ffffff"
              }, {
                "id": 17,
                "name_pj": "Tart Shells - Savory, 2",
                "date": "4/14/2020",
                "desception": "dictumst etiam faucibus cursus urna ut tellus nulla ut erat",
                "imgUrl": "http://dummyimage.com/150x100.jpg/ff4444/ffffff"
              }, {
                "id": 18,
                "name_pj": "Sprouts - China Rose",
                "date": "12/9/2019",
                "desception": "nulla nunc purus phasellus in felis donec semper sapien a",
                "imgUrl": "http://dummyimage.com/150x100.jpg/cc0000/ffffff"
              }, {
                "id": 19,
                "name_pj": "Container - Clear 16 Oz",
                "date": "6/19/2020",
                "desception": "nunc proin at turpis a pede posuere nonummy integer non",
                "imgUrl": "http://dummyimage.com/150x100.jpg/ff4444/ffffff"
              }, {
                "id": 20,
                "name_pj": "Vinegar - Rice",
                "date": "11/1/2020",
                "desception": "odio consequat varius integer ac leo pellentesque ultrices mattis odio",
                "imgUrl": "http://dummyimage.com/150x100.jpg/ff4444/ffffff"
              }]
        };
    }
        
        render(){
            const { projects } = this.state;
            return (
                <Container>
                    <h1>Projects</h1>
                    <Row>
                        {projects.map(project =>(
                            <Col sm="4">
                                <Card>
                                <CardImg 
                                top 
                                width="100%" 
                                src={project.imgUrl} />
                                <CardBody>
                                <CardTitle>{project.name_pj}</CardTitle>
                                <CardText>{project.desception}</CardText>
                                  <Button>See More</Button>
                                </CardBody>
                              </Card>
                              </Col>
                            ))}

                    </Row>
                </Container>
            );
        }

}
export default Portfolio;