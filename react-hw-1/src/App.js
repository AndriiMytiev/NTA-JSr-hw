import styles from './App.module.scss';
import {useState} from "react";
import Modal from "./components/Modal";
import Button from "./components/Button";

function App() {
    const [showModal, setShowModal] = useState("none");

    const showModalHandler = () => {
        setShowModal("none")
    }

    return (
        <div className={styles.nav}>
            <div className={styles.nav__container}>
                <Button backgroundColor="#4d4ddd" text={"Open first modal"} onClick={() => setShowModal("first")}/>
                <Button backgroundColor="#34c634" text={"Open second modal"} onClick={() => setShowModal("second")}/>

                {showModal === "first" && <Modal
                    closeModal={showModalHandler}
                    header="Do you want to delete this file?"
                    text="Once you delete this file, it won't be possible to undo this action.
                    Are you sure you want to delete it?"
                    closeButton={true}
                    actions={
                        <div className={styles.button__container}>
                            <button>Ok</button>
                            <button>Cancel</button>
                        </div>}/>}
                {showModal === "second" && <Modal
                    closeModal={showModalHandler}
                    header="What do you think about e-books?"
                    text="How do you think they are better than paper books?"
                    closeButton={false}
                    actions={
                        <div className={styles.button__container}>
                            <button>Yes</button>
                            <button>No</button>
                        </div>}/>
                }
            </div>
        </div>
    )
}

export default App;
