import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/xCodeDark-one-dark-theme/ as reference for the colors
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
  background = '#292A30',
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
const xCodeDarkTheme = data(
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
const xCodeDarkHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  { tag: [t.comment, t.quote], color: '#7F8C98' },
  { tag: [t.keyword], color: '#FF7AB2', fontWeight: 'bold' },
  { tag: [t.string, t.meta], color: '#FF8170' },
  { tag: [t.typeName], color: '#DABAFF' },
  { tag: [t.definition(t.variableName)], color: '#6BDFFF' },
  { tag: [t.name], color: '#6BAA9F' },
  { tag: [t.variableName], color: '#ACF2E4' },
  { tag: [t.regexp, t.link], color: '#FF8170' },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const xCodeDarkTemp = [
  xCodeDarkTheme,
  /*@__PURE__*/ syntaxHighlighting(xCodeDarkHighlightStyle),
];
const xCodeDark = { backgroundColor: background, theme: xCodeDarkTemp };

export { color, xCodeDark, xCodeDarkHighlightStyle, xCodeDarkTheme };
