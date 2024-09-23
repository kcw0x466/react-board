import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PostTable from '../components/PostTable';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const goToWrite = () => {
        navigate("/write");
    }
    return(
        <>
            <Row>
                <Col xs={5} />
                <Col xs={5} />
                <Col xs={2}>
                    <Button onClick={goToWrite} >글쓰기</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={1} />
                <Col lg={10}>
                    <PostTable />
                </Col>
                <Col xs={1} />
            </Row>
        </>
    );
}

export default Home;