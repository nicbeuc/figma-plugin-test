figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
  if (msg.type === 'move-component') {
    const nodes = figma.currentPage.findAllWithCriteria({
      types: ['COMPONENT', 'COMPONENT_SET']
    })

    for (const node of nodes) {
      node.x += 100
    }

    figma.ui.postMessage({
      type: 'move-component',
      message: `Moved component`,
    });
  }

  figma.closePlugin();
}
