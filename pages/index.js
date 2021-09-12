import HighlightText from "../components/HighlightText";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container className='main_div'>
      <div className='main_div'>
        <div style={{ width: "60%" }}>Hi there, I'm</div>
        <div className={"myname"} style={{ width: "60%" }}>
          Harpreet Goraya
        </div>
        <div style={{ width: "60%" }}>
          <p>
            Im a software developer from Toronto with a Bs.c in comuter science
            from{" "}
            <HighlightText
              text='York University'
              backgroundColor='#ffadad'
              hyperlink='https://yorku.ca/'
            />{" "}
            and I like building things that live in the internet.
          </p>
          <p>
            Im currently working as developer at{" "}
            <HighlightText
              text='Bluroot'
              backgroundColor='#9bf6ff'
              hyperlink='https://bluroot.ca/'
            />
            , working on frontend and backend products using React, Node and
            Rust.
          </p>
          Previously, I interned at{" "}
          <HighlightText
            text='Artitude Canada'
            backgroundColor='#ffd6a5'
            hyperlink='https://www.linkedin.com/in/artitude-canada-6706bb137/'
          />{" "}
          creating and managing their websites and media feeds.
          <p>
            In my free time I like hiking, eating food & playing with my dog{" "}
            <HighlightText
              text='Ollie'
              backgroundColor='#caffbf'
              hyperlink='https://www.instagram.com/ollie_goraya/'
            />
          </p>
        </div>
      </div>
    </Container>
  );
}
