import React,{useState} from 'react';
import SubTree from './subtree/subtree.component';
import './tree.component.css';
import Node from './subtree/node/node.component';

function Tree() {

  const [subtrees,setSubtree] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

  const checkChild = (value,index) =>{
    if(subtrees[2*index+1] && subtrees[2*index+2]){
      return <div className="subtree">
        <Node value={value} leftChild={subtrees[2*index+1]} rightChild={subtrees[2*index+2]}/>
        <div class="children">
          <Node value={value} leftChild={subtrees[2*index+1]} rightChild={subtrees[2*index+2]}/>
          <Node value={value} leftChild={subtrees[2*index+1]} rightChild={subtrees[2*index+2]}/>
        </div>
        </div>
    }
    else if(subtrees[2*index+1]){
      return <div className="subtree">
        <Node value={value} leftChild={subtrees[2*index+1]} rightChild={null}/>
        <div class="children">
          <Node value={value} leftChild={subtrees[2*index+1]} rightChild={null}/>
          <Node value={value} leftChild={subtrees[2*index+1]} rightChild={null}/>
        </div>
    </div>
    } 
    else if(subtrees[2*index+2]) {
      return <div className="subtree">
        <Node value={value} rightChild={subtrees[2*index+2]} leftChild={null}/>
        <div class="children">
          <Node value={value} rightChild={subtrees[2*index+2]} leftChild={null}/>
          <Node value={value} rightChild={subtrees[2*index+2]} leftChild={null}/>
        </div>
        </div>
    }
    else {
      return <div className="subtree">
      <Node value={null} rightChild={null} leftChild={null}/>
      <div class="children">
      <Node value={null} rightChild={null} leftChild={null}/>
      <Node value={null} rightChild={null} leftChild={null}/>
      </div>
      </div>
    }
  }

  const buildTree = (value,index)=>{
    if(value!=null){
      return <div className="subtree">
        {console.log(value)}
        <Node value={value} leftChild={subtrees[2*index+1]} rightChild={subtrees[2*index+2]}/>
      <div className="children">
        {buildTree(subtrees[2*index+1],2*index+1)}
        {buildTree(subtrees[2*index+2],2*index+2)}
        </div>
      </div>
    }
  }
  return (
    <div className="container">
  
      <div className="tree">
      {/* {
        subtrees.map((value,index)=>{

          return <div>{checkChild(value,index)} 
          </div>
        })
      } */}

      {
        buildTree(subtrees[0],0)
      }
      </div>
    </div>

  );
}

export default Tree;
