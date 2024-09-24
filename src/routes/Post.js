import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextEditor from '../components/TextEditor';

function Post(props) {
    return(
        <>
            <Row>
                <Col xs={5} />
                <Col xs={5} />
                <Col xs={2} />
            </Row>
            <Row>
                <Col xs={1} />
                <Col lg={10}>
                    <TextEditor mode={props.mode} />
                </Col>
                <Col xs={1} />
            </Row>
        </>
    );
}

export default Post;
