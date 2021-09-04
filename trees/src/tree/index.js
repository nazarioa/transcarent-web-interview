import "./index.css";

export default function Tree() {
  return (
    <div className="tree">
      <p>root</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;ant</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;bear</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dog</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elephant
      </p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;frog</p>
    </div>
  );
}
