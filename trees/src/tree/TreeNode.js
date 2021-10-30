const TreeNode = ({node, children}) => {
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
