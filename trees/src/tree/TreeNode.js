const TreeNode = ({node, children}) => {
  return (
    <li className="title">
      {node}
      {children &&
      children.map(({node, children}) => (
        <ol key={node} className="values indent">
          <TreeNode node={node} children={children}/>
        </ol>
      ))}
    </li>
  );
};

export default TreeNode;
