import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/duotoneLight-one-dark-theme/ as reference for the colors
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
  { tag: [t.standard(t.tagName), t.tagName], color: '#116329' },
  { tag: [t.comment, t.bracket], color: '#6a737d' },
  { tag: [t.className, t.propertyName], color: '#6f42c1' },
  {
    tag: [t.variableName, t.attributeName, t.number, t.operator],
    color: '#005cc5',
  },
  {
    tag: [t.keyword, t.typeName, t.typeOperator, t.typeName],
    color: '#d73a49',
  },
  { tag: [t.string, t.meta, t.regexp], color: '#032f62' },
  { tag: [t.name, t.quote], color: '#22863a' },
  { tag: [t.heading], color: '#24292e', fontWeight: 'bold' },
  { tag: [t.emphasis], color: '#24292e', fontStyle: 'italic' },
  { tag: [t.deleted], color: '#b31d28', backgroundColor: 'ffeef0' },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#e36209' },
  { tag: [t.url, t.escape, t.regexp, t.link], color: '#032f62' },
  { tag: t.link, textDecoration: 'underline' },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  { tag: t.invalid, color: '#cb2431' },
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
