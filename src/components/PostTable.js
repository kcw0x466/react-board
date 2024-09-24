import Table from 'react-bootstrap/Table';
import PostRow from './PostRow';
import { useEffect } from 'react';
import axios from 'axios';
import posts from '../data/PostData'

function PostTable() {
  
  // CORS 문제로 API 호출 안됨
  // useEffect(() => {
  //   console.log("Hello");
  //   axios.get('http://211.203.233.87:8081/api/posts').then((res) => {
  //     console.log(res);
  //   });
      
  // });

  const rendering = () => {
    const result = [];
    for(let i = 0; i < posts.length; i++){
      result.push(<PostRow 
        num={i + 1} 
        id={posts[i].id}
        title={posts[i].title} 
        nickname={posts[i].nickname} 
        createdAt={posts[i].createdAt} 
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
          <th align="center" width="10%">날짜</th>
        </tr>
      </thead>
      <tbody>
        {rendering()}
      </tbody>
    </Table>
  );
}

export default PostTable;