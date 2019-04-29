export function getTextareaComputedState(style: CSSStyleDeclaration) {
  const {
    paddingTop = '6px',
    paddingBottom = '6px',
    fontSize = '14px',
    lineHeight = 'normal',
    borderTopWidth = '1px',
    borderBottomWidth = '1px'
  } = style;

  const pt = parseFloat(paddingTop || '6px');
  const pd = parseFloat(paddingBottom || '6px');
  const fz = parseFloat(fontSize || '14px');
  const lh = lineHeight === 'normal' ? 1.2 : parseFloat(lineHeight || '1.2');
  const btw = parseFloat(borderTopWidth || '1px');
  const bbw = parseFloat(borderBottomWidth || '1px');

  const rowBorderHeight = (btw >= 0 ? btw : 1) + (bbw >= 0 ? bbw : 1);
  const rowPaddingHeight = (pt >= 0 ? pt : 6) + (pd >= 0 ? pd : 6);

  return {
    rowHeight: fz * (lh >= 0 ? lh : 1.2),
    rowBorderHeight,
    rowPaddingHeight,
    rowOuterHeight: rowBorderHeight + rowPaddingHeight
  };
}
