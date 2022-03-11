import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import NomineeList from "../components/NomineeList/index";
import ResultModal from "../components/Modals/result-modal";
import LoadingModal from "../components/Modals/loading-modal";

const Home: NextPage = () => {
  const api = "http://localhost:3000/api/ballots";
  const [ballotData, setBallotData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [nominee, setNominee] = useState({});
  useEffect(() => {
    try {
      fetch(api, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setBallotData(data?.items);
        });
    } catch (e: any) {
      setLoading(false);
      console.log("error", e);
    }
  }, []);
  const setData = (title: string, value: string) => {
    setNominee((prev) => ({
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
          {loading && <LoadingModal />}
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
