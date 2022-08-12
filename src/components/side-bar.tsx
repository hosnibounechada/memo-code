import "./side-bar.css";

const collections = [
  {
    title: "JavaScript",
  },
  {
    title: "Node js",
  },
  {
    title: "Socket.io",
  },
  {
    title: "React Header",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title:
      "React Navigation bar this is just a test to see what will happen for long content",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
  {
    title: "React Navigation bar",
  },
];

const SideBar: React.FC = () => {
  const renderCollections = () =>
    collections.map((item, index) => <li key={index}>{item.title}</li>);

  return (
    <div className="side-bar">
      <ul>{renderCollections()}</ul>
    </div>
  );
};

export default SideBar;
