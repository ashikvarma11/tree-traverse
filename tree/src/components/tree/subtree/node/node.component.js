import React,{useState, useEffect} from 'react';
import '../../tree.component.css'

function Node(props) {
  const [value,setValue] = useState(props.value);
  const [visited,setVisited] = useState(props.visited);
  const [leftNode,setLeftNode] = useState(<Node value={props.leftChild}/>);
  const [rightNode,setRightNode] = useState(<Node value={props.rightChild}/>);
  useEffect(()=>{
    console.log('Node',value,leftNode.props.value,rightNode.props.value)
  })
  return (
    <div className="node">
      <h3>{value}</h3>
    </div>
  );
}

export default Node;
