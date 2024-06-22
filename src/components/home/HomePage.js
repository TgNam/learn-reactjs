import videoHomePage from '../../assets/video-homepage.mp4'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const HomePage = () => {
    return (
        <Container className='homepage-container'>
            <Row>
                <Col sm={8}>
                    <video width="100%" height="100%" autoPlay muted loop>
                        <source src={videoHomePage} type="video/ogg" />
                    </video>
                </Col>
                <Col className='content' sm={4}>
                    <Row>
                        <div>
                            <h1>Make forms
                                worth filling out
                            </h1>
                            <h4>Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.</h4>
                            <Button className='btn-signup px-5 py-2' variant="dark">Get started—it's free</Button>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default HomePage;