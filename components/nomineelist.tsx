import Card from "./Card";
import styles from "./nomineelist.module.css";

const NomineeList: any = ({
  data,
  nominee,
  setNominee,
}: {
  data: any;
  nominee: any;
  setNominee: any;
}) => {
  const dataList = (
    <div>
      {data?.map((item: any, index: any) => {
        return (
          <div key={index} className={styles.category}>
            <h2 className={styles.title}>{item?.title}</h2>
            <div className={styles.gridview}>
              {item?.items?.map((data: any, id: any) => {
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
