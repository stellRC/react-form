import PropTypes from "prop-types";
import deleteIcon from "../assets/react.svg";
export default function Overview({ tsk, setTsk }) {
  function handleDelete(e) {
    e.preventDefault();
    let tasksCopy = tsk;
    let targetText = e.target.parentElement.id;
    let filteredList = tasksCopy.filter((task) => task.text !== targetText);
    setTsk(filteredList);
  }

  const taskItems = tsk.map((taskItem) => (
    <li key={taskItem.text} className="flex flex-row gap-10 place-self-end">
      <span>{taskItem.text}</span>
      <button
        className="active:animate-none hover:animate-spin"
        id={taskItem.text}
        onClick={handleDelete}
      >
        <img src={deleteIcon} alt="" />
      </button>
    </li>
  ));

  return <>{taskItems}</>;
}

Overview.propTypes = {
  tsk: PropTypes.any,
  setTsk: PropTypes.any,
};
