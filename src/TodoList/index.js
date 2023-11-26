import "./TodoList.css";

function TodoList(props) {
  console.log(">>>>>>>>>>>>>",props)
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && props.searchedTodos.length === 0) && props.onEmptyTodos()}
      {props.searchedTodos.map(props.render)}

    </section>
  );
}

export { TodoList };
