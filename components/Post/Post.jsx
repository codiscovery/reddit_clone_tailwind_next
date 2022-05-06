import styles from "./Post.module.css";

import Vote from "./Vote";
import Content from "./Content";
import Footer from "./Footer";
import Title from "./Title";

function Post({
  vote = 3,
  type = "question",
  title,
  content,
  contentType,
  author = {}, // name, url, img
  creationDate,
  comments = [],
}) {
  return (
    <div className={styles.container}>
      <div className={styles.votecontainer}>
        <Vote total={vote} />
      </div>
      <div className="divide-y flex flex-col gap-4">
        <div>
          <Title text={title} type={type} />
          <Content data={content} type={contentType} />
        </div>
        <Footer
          author={author}
          date={creationDate}
          totalComments={comments.length}
        />
      </div>
    </div>
  );
}

export default Post;
