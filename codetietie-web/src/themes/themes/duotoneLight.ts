import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/duotoneLight-one-dark-theme/ as reference for the colors
const chalky = '#e5c07b',
  coral = '#e06c75',
  cyan = '#56b6c2',
  invalid = '#23262b',
  ivory = '#b29764',
  stone = '#7d8799', // Brightened compared to original to increase contrast
  malibu = '#61afef',
  sage = '#98c379',
  whiskey = '#d19a66',
  violet = '#c678dd',
  darkBackground = '#21252b',
  highlightBackground = 'transparent',
  background = '#faf8f5',
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
const duotoneLightTheme = data(
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
const duotoneLightHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  { tag: [t.comment, t.bracket], color: '#b6ad9a' },
  {
    tag: [t.atom, t.number, t.keyword, t.link, t.attributeName, t.quote],
    color: '#063289',
  },
  {
    tag: [t.emphasis, t.heading, t.tagName, t.propertyName, t.variableName],
    color: '#2d2006',
  },
  { tag: [t.typeName, t.url, t.string], color: '#896724' },
  { tag: [t.operator, t.string], color: '#1659df' },
  { tag: [t.propertyName], color: '#b29762' },
  { tag: [t.unit, t.punctuation], color: '#063289' },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const duotoneLightTemp = [
  duotoneLightTheme,
  /*@__PURE__*/ syntaxHighlighting(duotoneLightHighlightStyle),
];
const duotoneLight = { backgroundColor: background, theme: duotoneLightTemp };

export { color, duotoneLight, duotoneLightHighlightStyle, duotoneLightTheme };
