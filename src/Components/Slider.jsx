import React from "react";
import img1 from "../Images/7.jpg"
import img2 from "../Images/8..jpg"
import img3 from "../Images/9.png"

import img4 from "../Images/10.png"
import img5 from "../Images/11.png"
import img6 from "../Images/12.png"

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class Slider extends React.Component{
render(){
    return(
        <>
   <Carousel>
      <Carousel.Item  >
        <img style={{maxHeight:"400px"}}
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        
      </Carousel.Item >
      <Carousel.Item >
        <img style={{maxHeight:"400px"}}
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{maxHeight:"400px"}}
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

         
      </Carousel.Item>
    </Carousel>




    <div className="container" style={{ marginTop: "50px" }}>
          <div class="row">
            <div className="col" lg-3 md-4 sm-6 col-12>
            <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</div>


<div className="col" lg-3 md-4 sm-6 col-12>
<Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={img5} />
      <Card.Body >
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</div>

<div className="col" lg-3 md-4 sm-6 col-12>
<Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={img6} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</div>


</div>
</div>

        </>
    )
}

}

export default Slider