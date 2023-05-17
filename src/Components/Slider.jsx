import React from "react";
import img1 from "../Images/Slider image 1.jpg"
import img2 from "../Images/slider image 2.jpg"
import img3 from "../Images/slider image 3.jpg"

import img21 from "../Images/15.jpg"
import img20 from "../Images/20.jpg"
import img19 from "../Images/19.jpg"
import img18 from "../Images/18.jpg"
import img17 from "../Images/17.jpg"
import img16 from "../Images/16.jpg"





import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class Slider extends React.Component{
render(){
    return(
        <>
   <Carousel>
      <Carousel.Item  >
        <img style={{maxHeight:"600px"}}
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        
      </Carousel.Item >
      <Carousel.Item >
        <img style={{maxHeight:"600px"}}
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{maxHeight:"600px"}}
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

         
      </Carousel.Item>
    </Carousel>






{/* Animation Cards */}


      


    <div className="container" style={{ marginTop: "50px" }}>
          <div class="row">
            <div className="col" lg-3 md-4 sm-6 col-12>
            <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={img21} />
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
      <Card.Img variant="top" src={img20} />
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
      <Card.Img variant="top" src={img19} />
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

<div className="col" lg-3 md-4 sm-6 col-12 style={{marginTop:"20px"}}> 
<Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={img18} />
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


<div className="col" lg-3 md-4 sm-6 col-12 style={{marginTop:"20px"}}> 
<Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={img17} />
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


<div className="col" lg-3 md-4 sm-6 col-12 style={{marginTop:"20px"}}> 
<Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={img16} />
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