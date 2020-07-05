import React,{useState, useEffect,useContext,forwardRef,useImperativeHandle} from 'react';
import '../../tree.component.css'
import TreeContext from '../../tree_context';
const Node = forwardRef((props,ref)=> {

  const [value,setValue] = useState(props.value);
  const [key,setKey] = useState(props.id)
  const [visited,setVisited] = useState(props.visited|| false);
  const [leftNode,setLeftNode] = useState(<Node value={props.leftChild}/>);
  const [rightNode,setRightNode] = useState(<Node value={props.rightChild}/>);
  let treeContext = useContext(TreeContext);


  useImperativeHandle(ref, () => ({
   getLeftNode(){
    return leftNode
  },
   getRightNode(){
    return rightNode
  }
}));



  return (
    <div className={`node  ${treeContext.curr_node_idx == key ? "visited" : ""}`} >
      <h3>{key}</h3>
    </div>
  );
});

export default Node;
