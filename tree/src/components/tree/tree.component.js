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
  let nodeList=[];
  let insertedKey = 0;


  treeContext.root_node = <Node key={0} value={subtrees[0]} leftChild={subtrees[2*0+1]} rightChild={subtrees[2*0+2]} />
  treeContext.nodeList=[];

  const insertStuff = ()=>{
    treeNode.insert(parseInt(key),parseInt(value));
    insertedKey = parseInt(key); 
    setUpdateTree(value => ++value); // update the state to force render
    
  }

  const removeStuff = ()=>{
    treeNode.remove(parseInt(key));
    setUpdateTree(value => ++value); // update the state to force render
    
  }

  
  const constructTree = (node) => {
   
    if(node!=null){
      return <div className="subtree">
        <Node key={node.key} id={node.key}  value={node.value} />
      
        {node.left && !node.right && <div className={`children left`}>
          {constructTree(node.left)}
        </div>
        }
         {!node.left && node.right && <div className={`children right`}>
          {constructTree(node.right)}
        </div>
        }

      {node.left && node.right && <div className={`children`}>
          {constructTree(node.left)}
          {constructTree(node.right)}
        </div>
        }
        
      </div>
      }
  }
const calculateTraversal =  (node) =>{
    nodeList.push(node);
}

const showAnimation = ()=>{
  function task(node,i) { 
    setTimeout(function() { 
      treeContext.curr_node_idx = node.key;
      setCurrNode(node.key);
      console.log('hi')
    }, 1000 * i); 
  }
  
  for (let i=0;i<nodeList.length;i++) {
    
      task(nodeList[i],i);
    
  }
}
  const traversal =(type)=>{
    nodeList=[];
    switch(type){
      case 0:  treeNode.inorder(treeNode.root,calculateTraversal);break;
      case 1: treeNode.preorder(treeNode.root,calculateTraversal);break;
      case 2: treeNode.postorder(treeNode.root,calculateTraversal); break;
      default: return;
    }
    
    showAnimation();
  }
  
  return (
  
    <div className="container">
      <div class="navbar">
        <div class="key">
        Key <input type="number" name="key"  onChange={(e)=>setKey(e.target.value)}/>
        <button onClick={()=>insertStuff()}>Insert</button>
        </div>
        
        {/* <div>
        Value <input type="number" placeholder="value" onChange={(e)=>setValue(e.target.value)}/>
        </div> */}
        
       
        <button onClick={()=>traversal(0)}>In-Order traversal</button>
        <button onClick={()=>traversal(1)}>Pre-Order traversal</button>
        <button onClick={()=>traversal(2)}>Post-Order traversal</button>

        <div class="key">
          <input type="number" placeholder="Remove key" onChange={(e)=>setKey(e.target.value)}/>
          <button onClick={()=>removeStuff()}>Remove</button>
        </div>

      </div>
      
      <div className="tree">
      { 
        constructTree(treeNode.root)
      }
      {treeNode.root === null && <p>Tree is Empty. Try adding a node.</p>}
      </div>
    </div>
  );
}

export default Tree;
