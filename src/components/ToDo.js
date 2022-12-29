import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeToDo } from "../store";

function ToDo({ text, deleteToDo, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return { deleteToDo: () => dispatch(removeToDo(ownProps.id)) };
}

export default connect(null, mapDispatchToProps)(ToDo);
