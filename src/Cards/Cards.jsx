import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cards.css";
function BasicExample(props) {
  return (
    <>
      <div>
        <Card style={{ width: "20rem" }}>
        <div className="Cards">

          <Card.Img
            className="images"
            variant="top"
            src={`https://image.tmdb.org/t/p/w500//${props.path}`}
          />
          <Card.Body>
            <h4>{props.title}</h4>
            <Card.Text className="cardText">
             {props.overview}
            </Card.Text>
           <div className="buttdiv"> <button className="butt">Learn More</button></div>
            {/* <Button className='butt' variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </div>
        </Card>
      </div>
    </>
  );
}

export default BasicExample;
