import Button from 'react-bootstrap/Button';
import ContentTable from '../components/ContentTable';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                <Row>
                    <Col xs={5} />
                    <Col xs={5} />
                    <Col xs={2}>
                        <Button>글쓰기</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={1} />
                    <Col lg={10}>
                        <ContentTable />
                    </Col>
                    <Col xs={1} />
                </Row>
                
            </Container>            
        </div>
    );
}

export default Main;