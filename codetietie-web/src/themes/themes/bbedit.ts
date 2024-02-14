import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/bbedit-one-dark-theme/ as reference for the colors
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
  background = '#FFFFFF',
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
const bbeditTheme = data(
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
  cursor
);

/**
The highlighting style for code in the One Dark theme.
*/
const bbeditHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  { tag: [t.meta, t.comment], color: '#804000' },
  { tag: [t.keyword, t.strong], color: '#0000FF' },
  { tag: [t.number], color: '#FF0080' },
  { tag: [t.string], color: '#FF0080' },
  { tag: [t.variableName], color: '#006600' },
  { tag: [t.escape], color: '#33CC33' },
  { tag: [t.tagName], color: '#1C02FF' },
  { tag: [t.heading], color: '#0C07FF' },
  { tag: [t.quote], color: '#000000' },
  { tag: [t.list], color: '#B90690' },
  { tag: [t.documentMeta], color: '#888888' },
  { tag: [t.function(t.variableName)], color: '#0000A2' },
  { tag: [t.definition(t.typeName), t.typeName], color: '#6D79DE' },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const bbedit = [
  bbeditTheme,
  /*@__PURE__*/ syntaxHighlighting(bbeditHighlightStyle),
];

export { color, bbedit, bbeditHighlightStyle, bbeditTheme };
