import styles from "./card.module.css";
import Image from "next/image";
const Card = ({
  title,
  id,
  image,
  category,
  nominee,
  setNominee,
}: {
  nominee: any;
  setNominee: any;
  image: string;
  id: string;
  title: string;
  category: string;
}) => {
  return (
    <div
      style={{
        border: `${nominee[category] === title ? `3px solid red` : ""}`,
      }}
      className={styles.container}
    >
      <p>{title}</p>
      <div
        style={{
          height: "100px",
          width: "100px",
          position: "relative",
          margin: "0 auto",
        }}
      >
        <Image
          priority
          src={image}
          className={styles.avatar}
          layout="fill"
          alt={title}
        />
      </div>
      <div style={{ width: "100%" }}>
        <button onClick={() => setNominee(category, title)}>
          Select Nominee
        </button>
      </div>
    </div>
  );
};
export default Card;
