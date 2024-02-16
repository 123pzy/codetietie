import { EditorView } from '@codemirror/view';

export const data: (
  ivory: string,
  stone: string,
  darkBackground: string,
  highlightBackground: string,
  background: string,
  tooltipBackground: string,
  selection: string,
  cursor: string
) => any = function (
  ivory,
  stone,
  darkBackground,
  highlightBackground,
  background,
  tooltipBackground,
  selection,
  cursor
) {
  const oneDarkTheme = /*@__PURE__*/ EditorView.theme(
    {
      '&': {
        color: ivory,
        backgroundColor: background,
      },
      '.cm-content': {
        caretColor: cursor,
      },
      '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
      '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
        { backgroundColor: selection },
      '.cm-panels': { backgroundColor: darkBackground, color: ivory },
      '.cm-panels.cm-panels-top': { borderBottom: '2px solid black' },
      '.cm-panels.cm-panels-bottom': { borderTop: '2px solid black' },
      '.cm-searchMatch': {
        backgroundColor: '#72a1ff59',
        outline: '1px solid #457dff',
      },
      '.cm-searchMatch.cm-searchMatch-selected': {
        backgroundColor: '#6199ff2f',
      },
      '.cm-activeLine': { backgroundColor: 'transparent' },
      '.cm-selectionMatch': { backgroundColor: '#aafe661a' },
      '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
        backgroundColor: '#bad0f847',
      },
      '.cm-gutters': {
        backgroundColor: background,
        color: stone,
        border: 'none',
      },
      '.cm-activeLineGutter': {
        backgroundColor: highlightBackground,
      },
      '.cm-foldPlaceholder': {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#ddd',
      },
      '.cm-tooltip': {
        border: 'none',
        backgroundColor: tooltipBackground,
      },
      '.cm-tooltip .cm-tooltip-arrow:before': {
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
      },
      '.cm-tooltip .cm-tooltip-arrow:after': {
        borderTopColor: tooltipBackground,
        borderBottomColor: tooltipBackground,
      },
      '.cm-tooltip-autocomplete': {
        '& > ul > li[aria-selected]': {
          backgroundColor: highlightBackground,
          color: ivory,
        },
      },
    },
    { dark: true }
  );

  return oneDarkTheme;
};
