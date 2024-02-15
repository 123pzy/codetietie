import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/atomone-one-dark-theme/ as reference for the colors
const chalky = '#e5c07b',
  coral = '#e06c75',
  cyan = '#56b6c2',
  invalid = '#23262b',
  ivory = '#abb2bf',
  stone = '#7d8799', // Brightened compared to original to increase contrast
  malibu = '#61afef',
  sage = '#98c379',
  whiskey = '#d19a66',
  violet = '#c678dd',
  darkBackground = '#21252b',
  highlightBackground = '#2c313a',
  background = '#272C35',
  tooltipBackground = '#353a42',
  selection = '#3E4451',
  cursor = '#528bff';
/**
The colors used in the theme, as CSS color strings.
*/
const color = {
  chalky,
  coral,
  cyan,
  invalid,
  ivory,
  stone,
  malibu,
  sage,
  whiskey,
  violet,
  darkBackground,
  highlightBackground,
  background,
  tooltipBackground,
  selection,
  cursor,
};
/**
The editor theme styles for One Dark.
*/
const atomoneTheme = data(
  ivory,
  stone,
  darkBackground,
  highlightBackground,
  background,
  tooltipBackground,
  selection,
  cursor
);

/**
The highlighting style for code in the One Dark theme.
*/
const atomoneHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  {
    tag: [
      t.function(t.variableName),
      t.function(t.propertyName),
      t.url,
      t.processingInstruction,
    ],
    color: 'hsl(207, 82%, 66%)',
  },
  { tag: [t.tagName, t.heading], color: '#e06c75' },
  { tag: t.comment, color: '#54636D' },
  { tag: [t.propertyName], color: 'hsl(220, 14%, 71%)' },
  { tag: [t.attributeName, t.number], color: 'hsl( 29, 54%, 61%)' },
  { tag: t.className, color: 'hsl( 39, 67%, 69%)' },
  { tag: t.keyword, color: 'hsl(286, 60%, 67%)' },
  {
    tag: [t.string, t.regexp, t.special(t.propertyName)],
    color: '#98c379',
  },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const atomoneTemp = [
  atomoneTheme,
  /*@__PURE__*/ syntaxHighlighting(atomoneHighlightStyle),
];
const atomone = { backgroundColor: background, theme: atomoneTemp };
export { color, atomone, atomoneHighlightStyle, atomoneTheme };
