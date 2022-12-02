import { Modal } from "antd";
import styles from "./StaffModal.module.css";
import StaffItem from "./StaffItem";
import { useTranslation } from "react-i18next";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";

const staffContent = [
  {
    title: "Osoba 1",
    paragraph: "aboutUs.staff1.description",
    imgSrc: photo1,
  },
  {
    title: "Osoba 2",
    paragraph: "aboutUs.staff2.description",
    imgSrc: photo2,
  },
  {
    title: "Osoba 3",
    paragraph: "aboutUs.staff3.description",
    imgSrc: photo3,
  },
];

const StaffModal = (props) => {
  const { t } = useTranslation(["common"]);

  return (
    <Modal
      title={t("aboutUs.staff")}
      centered
      open={props.openModal}
      onCancel={props.closeModal}
      width={1000}
      footer={
        <a key="close" onClick={props.closeModal} className={styles.close}>
          {t("close")}
        </a>
      }
    >
      {staffContent.map((item) => {
        return (
          <StaffItem
            key={item.title}
            title={item.title}
            imgSrc={item.imgSrc}
            paragraph={item.paragraph}
          />
        );
      })}
    </Modal>
  );
};

export default StaffModal;
