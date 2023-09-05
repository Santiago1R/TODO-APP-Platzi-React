import "./TodoItem.css";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
export function TodoItem(prop) {
  return (
    <>
      <li className="TodoItem">
        <CompleteIcon
          completed={prop.completed}
          onComplete={prop.onCompleted}
        />
        <p className={`TodoItem-p ${prop.completed && "TodoItem-p--complete"}`}>
          {prop.text}
        </p>
        <DeleteIcon onDelete={prop.onDelete} />
      </li>
    </>
  );
}
