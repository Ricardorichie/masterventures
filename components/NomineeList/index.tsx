import Card from "../Card";
import styles from "./nomineelist.module.css";

const NomineeList = ({
  data,
  nominee,
  setNominee,
}: {
  data: {
    title: string;
    items: {
      id: string;
      title: string;
      photoUrL: string;
    }[];
  }[];
  nominee: { [key: string]: string };
  setNominee: (data: string, data2: string) => void;
}) => {
  const dataList = (
    <div>
      {data?.map((item, index) => {
        return (
          <div key={index} className={styles.category}>
            <h2 className={styles.title}>{item?.title}</h2>
            <div className={styles.gridview}>
              {typeof item.items !== "string" &&
                item.items.map((data, id) => {
                  return (
                    <Card
                      nominee={nominee}
                      setNominee={setNominee}
                      category={item?.title}
                      key={id}
                      image={data?.photoUrL}
                      id={data?.id}
                      title={data?.title}
                    />
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );

  return <>{dataList}</>;
};
export default NomineeList;
