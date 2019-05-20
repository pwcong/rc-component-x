export const getPagePosition = (
  node: HTMLElement,
  relativePosition?: {
    x?: number;
    y?: number;
  }
) => {
  const { x = 0, y = 0 } = relativePosition || {};

  const offsetX = node.offsetLeft || 0;
  const scrollLeft = node.scrollLeft || 0;
  const offsetY = node.offsetTop || 0;
  const scrollTop = node.scrollTop || 0;

  const position = {
    x: offsetX - scrollLeft + x,
    y: offsetY - scrollTop + y
  };

  console.log(node, position);

  if (node.parentNode) {
    return getPagePosition(node.parentNode as HTMLElement, position);
  }

  return position;
};
