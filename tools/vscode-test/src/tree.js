const vscode = require('vscode');
const { c1Tree } = require('./treeData.js');

module.exports = vscode.window.createTreeView('c1', {
    treeDataProvider: aNodeWithIdTreeDataProvider(),
    showCollapseAll: true
  });

  function aNodeWithIdTreeDataProvider() {
    return {
      getChildren: (el) => {
        const arr = [];
        const tree = el || c1Tree;
        for (let item in tree) {
          const activeItem = tree[item];
          if (typeof activeItem !== 'object') {
            arr.push(`${item}:${activeItem}`)
          } else {
            Object.defineProperty(activeItem, "_cc_key", {
              get: function () { return item },
              enumerable: false
            });
            arr.push(activeItem)
          }
        }
        return arr;
      },
      getTreeItem: (el) => {
        let treeItem = {};
        if (typeof el === 'string') {
          treeItem = {
            label: el,
            collapsibleState: 0,
            tooltip: "hover: 单纯的字符串 ",
          }
        } else {
          treeItem = {
            label: el._cc_key,
            collapsibleState: 1,
            tooltip: "hover: 可展开 ",
          }
        }
        return treeItem;
      },
      getParent: () => {
        return {}
      }
    };
  }
