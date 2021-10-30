const TreeNode = ({node, children, upsideDown = false}) => {
  children = Array.isArray(children) ? children : [];
  const data = upsideDown && children.length ? children.reverse() : children;

  return (
    <li className={upsideDown ? 'reverse title' : 'title'}>
      {!upsideDown && node}
      {data &&
      data.map((n, index) => (
        <ol key={node} className="values indent" start={index + 1}>
          <TreeNode node={n.node} children={n.children} upsideDown={upsideDown}/>
        </ol>
      ))}
      {upsideDown && node}
    </li>
  );
};

export default TreeNode;
