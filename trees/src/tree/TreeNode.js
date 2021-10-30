const TreeNode = ({node, children, upsideDown = false}) => {
  if(upsideDown) {
    return (
      <li className="title">
        {children &&
        children.reverse().map(({node, children}, index) => (
          <ol key={node} className="values indent" start={index + 1}>
            <TreeNode node={node} children={children} upsideDown={upsideDown}/>
          </ol>
        ))}
        {node}
      </li>
    );
  }

  return (
    <li className="title">
      {node}
      {children &&
      children.map(({node, children}, index) => (
        <ol key={node} className="values indent" start={index + 1}>
          <TreeNode node={node} children={children}/>
        </ol>
      ))}
    </li>
  );
};

export default TreeNode;
