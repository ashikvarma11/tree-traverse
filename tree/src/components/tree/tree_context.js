import React from 'react';
import Tree from './tree.component';
import Node from './subtree/node/node.component';
const TreeContext = React.createContext({
    root_idx:0,
    subtrees:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    root_node: null,
    curr_node : null,
    curr_node_idx:0,
    traversal_type:0,
    left_node:null,
    right_node:null,
    nodeList:[],
    node_struct:null
});

export default TreeContext;