import styles from "./Posts.module.css";
import PostItem from "./PostItem";
import { useTranslation } from "react-i18next";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";

const postsContent = [
  {
    title: "posts.post1.title",
    paragraph: "posts.post1.content",
    imgSrc: photo1,
  },
  {
    title: "posts.post2.title",
    paragraph: "posts.post2.content",
    imgSrc: photo2,
  },
  {
    title: "posts.post3.title",
    paragraph: "posts.post3.content",
    imgSrc: photo3,
  },
];

const Posts = () => {
  const { t } = useTranslation(["common"]);

  return (
    <div className={styles.posts}>
      <h2>{t("posts.title")}</h2>
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
