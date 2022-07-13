module.exports = function(sourceCode){
  return `
  const styleLabel = document.createElement('style');
  styleLabel.innerHTML = \`${sourceCode}\`;
  document.head.appendChild(styleLabel);
  module.exports=\`${sourceCode}\`;
  `;
}