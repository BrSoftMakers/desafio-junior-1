import styles from './Modal.module.css';

interface IModal {
    isOpen: boolean;
    setOpen: (isOPen: boolean) => void;
    pets: any;
}

export function Modal({ isOpen, setOpen, pets }: IModal) {

    if (isOpen) {
        return (
            <div className={styles.background}>
                <div className={styles.modal}>
                    <h2>Title</h2>
                    <p>{pets}</p>
                    <button onClick={() => setOpen(!isOpen)}>Fechar</button>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}