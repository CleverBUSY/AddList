import styles from "./header.module.css";
import TodoLogo from "../../assets/logo.svg";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";

const Header = ({onAddTask}) => {
    const [title, setTitle] = useState('')   

    function  handleSubmit (event) {

        event.preventDefault()
        onAddTask(title)
        setTitle('')
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
    }
  return (
    <header className={styles.header}>
      <img src={TodoLogo} alt="" />
      <form onSubmit={handleSubmit} className={styles.newTaaskForm}>
        <input placeholder="add a nw todo task" type="text" value={title} onChange={onChangeTitle} />
        <button>
          Create
          <CiCirclePlus size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
