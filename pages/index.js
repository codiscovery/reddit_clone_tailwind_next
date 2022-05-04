import Post from "../components/Post";
import Menu from "../components/Menu";

const posts = [
  {
    vote: 30,
    type: "travel",
    contentType: "image",
    title: "Mon dernier voyage en Inde",
    content:
      "https://images.unsplash.com/photo-1650916157060-2c21e86f140c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
    author: {
      name: "Leila",
      url: "https://codiscovery.co",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=270&q=80",
    }, // name, url, img
    creationDate: "2022-05-04T17:39:28.713Z",
    comments: [{}, {}],
  },

  {
    vote: -30,
    type: "question",
    contentType: "text",
    title: "Que dit le renard ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ex urna, id elementum nibh porttitor nec. Pellentesque feugiat odio a quam scelerisque iaculis. Nullam nec nulla et neque lobortis rhoncus nec sed quam. Suspendisse metus libero, iaculis quis est ac, viverra blandit libero. Etiam sit amet pulvinar leo. Sed tincidunt nunc efficitur neque luctus tempus. Phasellus vulputate quis nisl sit amet auctor. Ut sed nibh lacus. Cras sodales ipsum ac aliquam fermentum.",
    author: {
      name: "Léo",
      url: "https://codiscovery.co",
      img: "https://picsum.photos/200/200",
    }, // name, url, img
    creationDate: "2022-05-04T16:39:28.813Z",
    comments: [{}, {}, {}, {}, {}, {}],
  },
  {
    vote: 0,
    type: "question",
    contentType: "text",
    title: "Que dit la tortue ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ex urna, id elementum nibh porttitor nec. Pellentesque feugiat odio a quam scelerisque iaculis. Nullam nec nulla et neque lobortis rhoncus nec sed quam. Suspendisse metus libero, iaculis quis est ac, viverra blandit libero. Etiam sit amet pulvinar leo. Sed tincidunt nunc efficitur neque luctus tempus. Phasellus vulputate quis nisl sit amet auctor. Ut sed nibh lacus. Cras sodales ipsum ac aliquam fermentum.",
    author: {
      name: "Léo",
      url: "https://codiscovery.co",
      img: "https://picsum.photos/200/200",
    }, // name, url, img
    creationDate: "2022-05-04T16:39:28.913Z",
    comments: [{}, {}, {}, {}, {}, {}],
  },
  {
    vote: 30,
    type: "travel",
    contentType: "image",
    title: "Mon dernier voyage en Inde",
    content:
      "https://images.unsplash.com/photo-1650916157060-2c21e86f140c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
    author: {
      name: "Leila",
      url: "https://codiscovery.co",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=270&q=80",
    }, // name, url, img
    creationDate: "2022-05-04T17:39:28.713Z",
    comments: [{}, {}],
  },

  {
    vote: -30,
    type: "question",
    contentType: "text",
    title: "Que dit le renard ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ex urna, id elementum nibh porttitor nec. Pellentesque feugiat odio a quam scelerisque iaculis. Nullam nec nulla et neque lobortis rhoncus nec sed quam. Suspendisse metus libero, iaculis quis est ac, viverra blandit libero. Etiam sit amet pulvinar leo. Sed tincidunt nunc efficitur neque luctus tempus. Phasellus vulputate quis nisl sit amet auctor. Ut sed nibh lacus. Cras sodales ipsum ac aliquam fermentum.",
    author: {
      name: "Léo",
      url: "https://codiscovery.co",
      img: "https://picsum.photos/200/200",
    }, // name, url, img
    creationDate: "2022-05-04T16:39:28.813Z",
    comments: [{}, {}, {}, {}, {}, {}],
  },
  {
    vote: 0,
    type: "question",
    contentType: "text",
    title: "Que dit la tortue ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ex urna, id elementum nibh porttitor nec. Pellentesque feugiat odio a quam scelerisque iaculis. Nullam nec nulla et neque lobortis rhoncus nec sed quam. Suspendisse metus libero, iaculis quis est ac, viverra blandit libero. Etiam sit amet pulvinar leo. Sed tincidunt nunc efficitur neque luctus tempus. Phasellus vulputate quis nisl sit amet auctor. Ut sed nibh lacus. Cras sodales ipsum ac aliquam fermentum.",
    author: {
      name: "Léo",
      url: "https://codiscovery.co",
      img: "https://picsum.photos/200/200",
    }, // name, url, img
    creationDate: "2022-05-04T16:39:28.913Z",
    comments: [{}, {}, {}, {}, {}, {}],
  },
];

function Home() {
  return (
    <div className="bg-zinc-100 flex">
      <Menu />
      <div className="overflow-auto h-screen px-10 py-10">
        <h1 className="text-3xl font-extralight">
          Votre <span className="font-semibold">fil d'actualité</span>
        </h1>
        <div className="xl:grid xl:grid-cols-2 xl:items-start xl:gap-10">
          {posts.map((post) => {
            return <Post key={post.creationDate} {...post} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
