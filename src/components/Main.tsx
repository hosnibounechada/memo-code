import CodeCell from "./code-cell";
import TextEditor from "./text-editor";

const Main: React.FC = () => {
  return (
    <div>
      <TextEditor />
      <CodeCell />
    </div>
  );
};

export default Main;
