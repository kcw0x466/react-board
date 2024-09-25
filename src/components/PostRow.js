import { Link } from "react-router-dom";

function PostTable(props) {
    return (
        <tr>
          <td align="center">{props.num}</td>
          <td>
            <Link to={`/post/${props.id}`} style={{textDecoration: "none", color: "black"}}>{props.title}</Link>
          </td>
          <td align="center">{props.nickname}</td>
          <td align="center">{props.createdAt}</td>
        </tr>
    );
}

export default PostTable;