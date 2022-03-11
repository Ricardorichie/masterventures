import styles from "./resultmodal.module.css";
const ResultModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>success</h1>
        <div onClick={closeModal} className={styles.closeButton}>
          x
        </div>
      </div>
    </div>
  );
};
export default ResultModal;
