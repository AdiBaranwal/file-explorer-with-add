import React from 'react';
import Folder from './Folder';
import explorerData from './data';
import { insertNode } from './treeUtils';

export function App(props) {
  const [explorer, setExplorer] = React.useState(explorerData);

  const handleInsertNode = (folderName, itemName, isFolder) => {
    const updatedTree = insertNode(explorer, folderName, itemName, isFolder);
    setExplorer(updatedTree);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>File Explorer</h2>
      <Folder explorer={explorer} handleInsertNode={handleInsertNode} />
    </div>
  );
}

// Log to console
console.log('Hello console');
