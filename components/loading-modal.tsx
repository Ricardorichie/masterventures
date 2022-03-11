import styles from "./resultmodal.module.css";
import utilStyles from "../styles/utils.module.css";
const LoadingModal = () => {
  return (
    <div className={utilStyles.modalContainer}>
      <div
        className={utilStyles.modalContent}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className={utilStyles.loading}>Loading... Please wait</h1>
      </div>
    </div>
  );
};
export default LoadingModal;
