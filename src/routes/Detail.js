import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail({ toDo }) {
  const { id } = useParams();
  const toDoItem = toDo(id);
  return (
    <>
      <h1>{toDoItem?.text}</h1>
      <h5>Created at: {toDoItem?.id}</h5>
    </>
  );
}

function mapStateToProps(state) {
  return { toDo: (id) => state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
