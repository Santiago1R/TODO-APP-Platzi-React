import "./CreateTodoButton.css";
export function CreateTodoButton({setOpenModal, openModal}) {
  return (
    <>
      <button
        className="CreateTodoButton"
        onClick={() => setOpenModal(!openModal)}
      >
        +
      </button>
    </>
  );
}
