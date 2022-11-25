import styles from "./Posts.module.css";
import PostItem from "./PostItem";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";

const postsContent = [
  {
    title: "Tytuł 1",
    paragraph:
      "Jakiś krótki opis posta, na dole jak klikniesz to przekierowanie do tego posta na insta czy fb",
    imgSrc: photo1,
  },
  {
    title: "Tytuł 2",
    paragraph:
      "Jakiś krótki opis posta, na dole jak klikniesz to przekierowanie do tego posta na insta czy fb",
    imgSrc: photo2,
  },
  {
    title: "Tytuł 3",
    paragraph:
      "Jakiś krótki opis posta, na dole jak klikniesz to przekierowanie do tego posta na insta czy fb",
    imgSrc: photo3,
  },
];

const Posts = () => {
  return (
    <div className={styles.posts}>
      <h2>Aktualności</h2>
      {postsContent.map((item) => {
        return (
          <PostItem
            key={item.title}
            title={item.title}
            paragraph={item.paragraph}
            imgSrc={item.imgSrc}
          />
        );
      })}
    </div>
  );
};

export default Posts;
