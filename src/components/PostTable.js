import Table from 'react-bootstrap/Table';
import PostRow from './PostRow';

function ContentTable() {
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
        <PostRow num="1" title="test" nickname="kcw0x466" createdAt="2024-09-20" />
        <PostRow num="2" title="test" nickname="애플소다" createdAt="2024-09-20" />
      </tbody>
    </Table>
  );
}

export default ContentTable;