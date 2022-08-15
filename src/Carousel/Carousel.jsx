import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
function CarouselFadeExample() {
  return (
    <Carousel fade className='caro'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Enjoy Premium Experience</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Theater Wide Experience</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;