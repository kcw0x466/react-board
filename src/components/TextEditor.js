import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';


function TextEditor(props) {
    const [EnableDel, setEnableDel] = useState();
    const [EnableEdit, setEnableEdit] = useState();
    const [EnableSubmit, setEnableSubmit] = useState();
    const [OnlyRead, setOnlyRead] = useState();
    const [EditModeBtn, setEditModeBtn] = useState();
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
            setEditModeBtn(false);
            setOnlyRead(false);
        } 
        else if (mode == "edit") {
            setEnableDel(true);
            setEnableEdit(true);
            setEnableSubmit(false);
            setEditModeBtn(false);
            setOnlyRead(false);
        }
        else if (mode == "read") {
            setEnableDel(false);
            setEnableEdit(false);
            setEnableSubmit(false);
            setEditModeBtn(true);
            setOnlyRead(true);
        }
    };

    const loadPost = () => {
        axios.get(`http://localhost:8080/api/posts/${params.id}`).then((res) => {
            setPost(res.data);
        });   
    };

    const uploadPost = () => {
        if (InputPassword.length < 1) {
            alert("비밀번호를 입력해주세요.");
            return;
        }
    
        // 비밀번호가 포함된 새로운 포스트 객체 생성
        const newPost = { ...Post, password: InputPassword };
        
        axios.post(`http://localhost:8080/api/posts`, newPost, {
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        })
        .then(() => {
            console.log(newPost); // 새로운 포스트 객체 로그
            goToHome();
        })
        .catch((error) => {
            console.error("포스트 업로드 중 오류:", error);
        });
    };
    
    // const uploadPost = () => {
    //     if (InputPassword.length < 1) {
    //         alert("비밀번호를 입력해주세요.");
    //         return;
    //     }

    //     setPost({...Post, "password": InputPassword});
    //     axios.post(`http://localhost:8080/api/posts`, Post,{
    //         headers: { 'content-type': 'application/json' }
    //     });  
    //     console.log(Post);
    //     goToHome();
    // };

    const updatePost = () => {
        axios.put(`http://localhost:8080/api/posts/${params.id}`, Post, {
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });
        navigate(`/Post/${params.id}`);
    };

    // 백엔드 서버에서 에러남
    const deletePost = () => {
        axios.delete(`http://localhost:8080/api/posts/${params.id}`);
        goToHome();
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
            return true;
        }
    };

    const handleInputPassword = (e) => {
        setInputPassword(e.target.value);
    };

    const handleInputTitle = (e) => {
        setPost({...Post, "title": e.target.value});
    };

    const handleInputNickname = (e) => {
        setPost({...Post, "nickname": e.target.value});
    };

    const handleInputContent = (e) => {
        setPost({...Post, "content": e.target.value});
    };

    //버그
    const setEditMode = () => {
        if (chkPassword()) {
            modeController("edit");
        }
    };

    useEffect(() => {
        modeController(props.mode);
        if(props.mode == "read") {
            loadPost();
        }
    }, []);

    return(
        <Form>
            <Row>
                <Col>
                    <Form.Control placeholder="작성자" readOnly={!(props.mode == "write")} value={Post.nickname} onChange={handleInputNickname} />
                </Col>
                <Col>
                    <Form.Control type="password" placeholder="비밀번호" onChange={handleInputPassword} />
                </Col>
                <Col xs={4}>
                    {EditModeBtn && (<Button onClick={setEditMode}>수정 모드</Button>)}
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="제목을 입력해 주세요." readOnly={OnlyRead} value={Post.title} onChange={handleInputTitle}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>{(props.mode == "read") && ("작성일: " + moment(Post.createdAt).format('YYYY-MM-DD HH:mm:ss'))}</Form.Label>
                <Form.Control as="textarea" rows={15} placeholder="내용을 입력해 주세요." readOnly={OnlyRead} value={Post.content} onChange={handleInputContent}/>
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
                    {EnableDel && (<Button variant="danger" type="button" onClick={deletePost}>
                        삭제
                    </Button>)}
                    {' '}
                    {EnableEdit && (<Button variant="info" type="button" onClick={updatePost}>
                        수정
                    </Button>)}
                    {' '}
                    {EnableSubmit && (<Button variant="primary" type="button" onClick={uploadPost}>
                        등록
                    </Button>)}  
                </Col>
            </Row>
        </Form>
    );
}

export default TextEditor;