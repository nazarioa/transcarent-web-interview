const TreeNode = ({
                    node,
                    children,
                    upsideDown = false,
                    level = 0,
                    item = 0,
                    isLastNode = false,
                    onRemove = (node, level, item) => null,
                    onAdd = (node, level) => null,
                  }) => {
  children = Array.isArray(children) ? children : [];
  const data = upsideDown && children.length ? children.reverse() : children;

  const inputElement = isLastNode && (<div>
    <label>Add item <span className="sr-only">under {node}</span>:
      <input type="text"/>
    </label>
    <button onClick={() => onAdd(node, level)}>Add</button>
  </div>);

  const titleNode = <div>{node}
    <button className="removeBtn" onClick={() => onRemove(node, level, item)}>❌ <span
      className="sr-only">Remove {node}</span></button>
  </div>;

  return (
    <li className={upsideDown ? 'reverse title' : 'title'}>
      {!upsideDown && titleNode}

      {inputElement}

      {data &&
      data.map((n, item, array) => (
        <ol key={node + level + item} className="values indent" start={item + 1}>
          <TreeNode node={n.node} children={n.children} upsideDown={upsideDown} level={1 + level} item={item}
                    isLastNode={array.length === item + 1}/>
        </ol>
      ))}
      {upsideDown && titleNode}
    </li>
  );
};

export default TreeNode;
