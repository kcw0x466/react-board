import Table from 'react-bootstrap/Table';
import PostRow from './PostRow';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

function PostTable() {
  
  const [Posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/api/posts').then((res) => {
      setPosts(res.data);
    });  
  }, []);

  const rendering = () => {
    const result = [];
    for(let i = 0; i < Posts.length; i++){
      result.push(<PostRow 
        num={i + 1} 
        id={Posts[i].id}
        title={Posts[i].title} 
        nickname={Posts[i].nickname} 
        createdAt={moment(Posts[i].createdAt).format('YYYY-MM-DD HH:mm:ss')} 
      />);
    }
    return result;
  };  


  return (
    <Table size="sm">
      <thead align="center">
        <tr>
          <th align="center" width="5%">번호</th>
          <th align="center" width="60%">제목</th>
          <th align="center" width="10%">작성자</th>
          <th align="center" width="20%">날짜</th>
        </tr>
      </thead>
      <tbody>
        {rendering()}
      </tbody>
    </Table>
  );
}

export default PostTable;