import React,{useState,useContext,useEffect,useRef,createRef} from 'react';
import './tree.component.css';
import Node from './subtree/node/node.component';
import TreeContext from './tree_context';
import TreeModel from '../../classes/tree.model';
import NodeModel from '../../classes/node.model';
function Tree() {
  let treeContext = useContext(TreeContext);
  const [subtrees,setSubtree] = useState(treeContext.subtrees);
  const [currNode,setCurrNode] = useState(0);
  const [key,setKey] = useState(0);
  const [value,setValue] = useState(0);
  const [treeNode,setTreeNode] = useState(new TreeModel());
  const [updateTree, setUpdateTree] = useState(0); // integer state


  treeContext.root_node = <Node key={0} value={subtrees[0]} leftChild={subtrees[2*0+1]} rightChild={subtrees[2*0+2]} />
  treeContext.nodeList=[]
  let nodeRef = createRef();

  const insertStuff = ()=>{
    treeNode.insert(parseInt(key),parseInt(value));
    setUpdateTree(value => ++value); // update the state to force render
    console.log(treeNode)
  }
  const buildTree = (value,index)=>{
    if(value!=null){
      
      return <div className="subtree">
       
        <Node key={index} id={index} ref={nodeRef} visited={false} value={value} leftChild={buildTree(subtrees[2*index+1],2*index+1)} rightChild={buildTree(subtrees[2*index+2],2*index+2)}/>
      <div className="children">
        {buildTree(subtrees[2*index+1],2*index+1)}
        {buildTree(subtrees[2*index+2],2*index+2)}
        </div>
      </div>
    }
  }
  
  const constructTree = (node,align='') => {
    function getAlignment(align) {
      if (align === 'left') {
          return 'left';
      }
      if (align === 'right') {
          return 'right';
      }
      
      return ' ';
  }
    if(node!=null){
      return <div className="subtree">
        <Node key={node.key} id={node.key}  visited={false} value={node.value} />
      
        <div className={`children ${node.left && node.right? '': getAlignment(align)}`}>
          {constructTree(node.left,'left')}
          {constructTree(node.right,'right')}
        </div>
      </div>
      }
  }
  return (
  
    <div className="container">
      <input type="number" placeholder="key" onChange={(e)=>setKey(e.target.value)}/>
      <input type="number" placeholder="value" onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={()=>insertStuff()}>Insert</button>
      <div className="tree">
        {console.log(treeNode)}
      { 
        constructTree(treeNode.root)
      }
      </div>
    </div>
  );
}

export default Tree;
