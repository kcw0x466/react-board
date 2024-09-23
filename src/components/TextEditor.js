import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';

function TextEditor() {
    return(
        <Form>
            <Row>
                <Col>
                    <Form.Control placeholder="작성자" />
                </Col>
                <Col>
                    <Form.Control placeholder="비밀번호" />
                </Col>
                <Col xs={4} />
            </Row>
            <Form.Group className="mb-3" controlId="">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="제목을 입력해 주세요." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label></Form.Label>
                <Form.Control as="textarea" rows={15} placeholder="내용을 입력해 주세요." />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>첨부 파일</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>

            <Row>
                <Col>
                    <Button variant="secondary" type="submit">
                        취소
                    </Button>
                </Col>
                <Col style={{textAlign: "right"}}>
                    <Button variant="danger" type="submit">
                        삭제
                    </Button>{' '}
                    <Button variant="info" type="submit" disabled={false}>
                        수정
                    </Button>{' '}
                    <Button variant="primary" type="submit">
                        등록
                    </Button>  
                </Col>
            </Row>
        </Form>
    );
}

export default TextEditor;