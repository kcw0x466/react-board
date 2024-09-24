import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import posts from '../data/PostData'

function TextEditor(props) {
    const [EnableDel, setEnableDel] = useState();
    const [EnableEdit, setEnableEdit] = useState();
    const [EnableSubmit, setEnableSubmit] = useState();
    const [OnlyRead, setOnlyRead] = useState();
    const [InputPassword, setInputPassword] = useState("");
    const [Post, setPost] = useState({
        "id": "",
        "title": "",
        "content": "",
        "nickname": "",
        "password": "",
        "createdAt": "",
        "locked": ""
    });

    const navigate = useNavigate();
    const params = useParams();

    const goToHome = () => {
        navigate("/");
    }

    const modeController = (mode) => {
        if (mode == "write") {
            setEnableDel(false);
            setEnableEdit(false);
            setEnableSubmit(true);
        } 
        else if (mode == "edit") {
            setEnableDel(true);
            setEnableEdit(true);
            setEnableSubmit(false);
        }
        else if (mode == "read") {
            setEnableDel(false);
            setEnableEdit(false);
            setEnableSubmit(false);
            setOnlyRead(true);
        }
    };

    const loadPost = () => {
        for (let i = 0; i < posts.length; i++) {
          if (posts[i].id == params.id) {
            setPost(posts[i]);  
          }
        }
    };

    const chkPassword = () => {
        if (InputPassword.length < 1) {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        if (Post.password != InputPassword) {
            alert("비밀번호가 틀렸습니다.");
            return;
        }

        if (Post.password == InputPassword) {
            console.log("맞네");
            return true;
        }
    };

    const handleInputPassword = (e) => {
        setInputPassword(e.target.value);
    };

    //버그
    const setEditMode = () => {
        if (chkPassword()) {
            // modeController("edit");
            setEnableDel(true);
            setEnableEdit(true);
            setEnableSubmit(false);
        }
    };

    useEffect(() => {
        modeController(props.mode);
        if(props.mode == "read") {
            loadPost();
        }
    }, [modeController, loadPost]);

    return(
        <Form>
            <Row>
                <Col>
                    <Form.Control placeholder="작성자" readOnly={OnlyRead} value={Post.nickname} />
                </Col>
                <Col>
                    <Form.Control type="password" placeholder="비밀번호" onChange={handleInputPassword} />
                </Col>
                <Col xs={4}>
                    {!EnableEdit && (<Button onClick={setEditMode}>수정 모드</Button>)}
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="제목을 입력해 주세요." readOnly={OnlyRead} value={Post.title} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>{OnlyRead && ("작성일: " + Post.createdAt)}</Form.Label>
                <Form.Control as="textarea" rows={15} placeholder="내용을 입력해 주세요." readOnly={OnlyRead} value={Post.content} />
            </Form.Group>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>첨부 파일</Form.Label>
                <Form.Control type="file"/>
            </Form.Group>

            <Row>
                <Col>
                    <Button variant="secondary" type="button" onClick={goToHome}>
                        홈으로
                    </Button>
                </Col>
                <Col style={{textAlign: "right"}}>
                    {EnableDel && (<Button variant="danger" type="button">
                        삭제
                    </Button>)}
                    {' '}
                    {EnableEdit && (<Button variant="info" type="button">
                        수정
                    </Button>)}
                    {' '}
                    {EnableSubmit && (<Button variant="primary" type="button">
                        등록
                    </Button>)}  
                </Col>
            </Row>
        </Form>
    );
}

export default TextEditor;