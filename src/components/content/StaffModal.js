import { Modal } from "antd";
import styles from "./StaffModal.module.css";
import StaffItem from "./StaffItem";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";

const staffContent = [
  {
    title: "Osoba 1",
    paragraph:
      "Opis osoby, tutaj jakiś odpowiednio długi, co robi czym się zajmuje",
    imgSrc: photo1,
  },
  {
    title: "Osoba 2",
    paragraph:
      "Opis osoby, tutaj jakiś odpowiednio długi, co robi czym się zajmuje",
    imgSrc: photo2,
  },
  {
    title: "Osoba 3",
    paragraph:
      "Opis osoby, tutaj jakiś odpowiednio długi, co robi czym się zajmuje",
    imgSrc: photo3,
  },
];

const StaffModal = (props) => {
  return (
    <Modal
      title="Zarząd"
      centered
      open={props.openModal}
      onCancel={props.closeModal}
      width={1000}
      footer={
        <a key="close" onClick={props.closeModal} className={styles.close}>
          Close
        </a>
      }
    >
      {staffContent.map((item) => {
        return (
          <StaffItem
            key={item.title}
            title={item.title}
            paragraph={item.paragraph}
            imgSrc={item.imgSrc}
          />
        );
      })}
    </Modal>
  );
};

export default StaffModal;
