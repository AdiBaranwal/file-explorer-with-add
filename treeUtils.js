export const insertNode = (tree, folderName, itemName, isFolder) => {
  if (tree.name === folderName && tree.isFolder) {
    tree.children = tree.children || [];
    tree.children.push({
      name: itemName,
      isFolder,
      children: isFolder ? [] : undefined,
    });
    return { ...tree };
  }

  if (tree.children) {
    tree.children = tree.children.map(child =>
      insertNode(child, folderName, itemName, isFolder)
    );
  }

  return { ...tree };
};
