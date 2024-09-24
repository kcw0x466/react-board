import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../routes/Home';
import Post from '../routes/Post';

function Main() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={1} />
                    <Col lg={10}>
                        <div style={{height: "200px", display: 'flex', justifyContent: "center", alignItems:"center"}}>
                            <h1>게시판</h1>
                        </div>
                    </Col>
                    <Col xs={1} />
                </Row>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/write" element={<Post mode="write"/>} />
                        <Route path="/post/:id" element={<Post mode="read" />} />
                    </Routes>
                </BrowserRouter>
            </Container>            
        </div>
    );
}

export default Main;