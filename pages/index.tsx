import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import NomineeList from "../components/nomineelist";
import ResultModal from "../components/result-modal";

const Home: NextPage = () => {
  const api = "http://localhost:3000/api/ballots";
  const [ballotData, setBallotData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nominee, setNominee] = useState({});
  useEffect(() => {
    try {
      fetch(api, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          setBallotData(data?.items);
        });
    } catch (e: any) {
      console.log("error", e);
    }
  }, []);
  const setData = (title: any, value: any) => {
    setNominee((prev: any) => ({
      ...prev,
      [title]: value,
    }));
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const dataList = (
    <NomineeList nominee={nominee} setNominee={setData} data={ballotData} />
  );
  const modal = <ResultModal closeModal={closeModal} />;
  return (
    <Layout>
      <div>
        <main>
          <h1 className={styles.pageTitle}>Awards Title</h1>
          {dataList}
          {showModal && modal}
          <div
            style={{
              width: "100%",
              textAlign: "right",
            }}
          >
            <button onClick={openModal} className={styles.submitButton}>
              SUBMIT BALLOT BUTTON
            </button>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
