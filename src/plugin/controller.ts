for (const node of figma.currentPage.selection) {
  if ("opacity" in node) {
    node.opacity *= 0.5
  }
}
figma.closePlugin();
