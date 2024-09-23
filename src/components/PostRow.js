function PostRow(props) {
    return (
        <tr>
          <td align="center">{props.num}</td>
          <td>
            <a href="#">{props.title}</a>
          </td>
          <td align="center">{props.nickname}</td>
          <td align="center">{props.createdAt}</td>
        </tr>
    );
}

export default PostRow;