import React, { useState } from 'react';

export default function Folder({ explorer, handleInsertNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [isNewFolder, setIsNewFolder] = useState(true);

  const onAdd = isFolder => {
    setShowInput(true);
    setIsNewFolder(isFolder);
    setIsOpen(true);
  };

  const onAddItem = e => {
    if (e.key === 'Enter' && e.target.value) {
      handleInsertNode(explorer.name, e.target.value, isNewFolder);
      setShowInput(false);
    }
    if (e.key === 'Escape') {
      setShowInput(false);
    }
  };

  return (
    <div>
      {explorer.isFolder ? (
        <div style={{ paddingLeft: 10 }}>
          <span
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: 'pointer' }}
          >
            {isOpen ? '📂' : '📁'} {explorer.name}
          </span>
          <span style={{ marginLeft: 10 }}>
            <button onClick={() => onAdd(false)}>+ File</button>
            <button onClick={() => onAdd(true)}>+ Folder</button>
          </span>
        </div>
      ) : (
        <div style={{ paddingLeft: 20 }}>📄 {explorer.name}</div>
      )}

      {isOpen && (
        <div>
          {showInput && (
            <input
              autoFocus
              type='text'
              onKeyDown={onAddItem}
              placeholder={
                isNewFolder ? 'New folder name...' : 'New file name...'
              }
            />
          )}
          {explorer.children.map((item, idx) => (
            <Folder
              key={idx}
              explorer={item}
              handleInsertNode={handleInsertNode}
            />
          ))}
        </div>
      )}
    </div>
  );
}
