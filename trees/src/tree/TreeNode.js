const TreeNode = ({node, children, upsideDown = false, level = 0, isLastNode = false}) => {
  children = Array.isArray(children) ? children : [];
  const data = upsideDown && children.length ? children.reverse() : children;

  const inputElement = isLastNode && (<div>
    <label>Add item <span className="sr-only">under {node}</span>:
      <input type="text"/>
    </label>
  </div>);

  return (
    <li className={upsideDown ? 'reverse title' : 'title'}>
      {!upsideDown && node}

      {inputElement}

      {data &&
      data.map((n, index, array) => (
        <ol key={node} className="values indent" start={index + 1}>
          <TreeNode node={n.node} children={n.children} upsideDown={upsideDown} level={1 + level}
                    isLastNode={array.length === index + 1}/>
        </ol>
      ))}
      {upsideDown && node}
    </li>
  );
};

export default TreeNode;
