import React from 'react';
import Node from './node/node.component';

function SubTree() {

  
  return (
    <div className="subtree">
      <Node />
      <div className="children">
        <Node />
        <Node />
      </div>
  
    </div>
  );
}

export default SubTree;
