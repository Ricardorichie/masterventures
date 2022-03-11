import styles from "./resultmodal.module.css";
import utilStyles from "../../styles/utils.module.css";
const ResultModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className={utilStyles.modalContainer}>
      <div className={utilStyles.modalContent}>
        <h1 className={styles.title}>success</h1>
        <div onClick={closeModal} className={utilStyles.closeModalButton}>
          x
        </div>
      </div>
    </div>
  );
};
export default ResultModal;
