import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/duotoneDark-one-dark-theme/ as reference for the colors
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
  background = '#2a2734',
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
const duotoneDarkTheme = data(
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
const duotoneDarkHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  { tag: [t.standard(t.tagName), t.tagName], color: '#7ee787' },
  { tag: [t.comment, t.bracket], color: '#8b949e' },
  { tag: [t.className, t.propertyName], color: '#d2a8ff' },
  {
    tag: [t.variableName, t.attributeName, t.number, t.operator],
    color: '#79c0ff',
  },
  {
    tag: [t.keyword, t.typeName, t.typeOperator, t.typeName],
    color: '#ff7b72',
  },
  { tag: [t.string, t.meta, t.regexp], color: '#a5d6ff' },
  { tag: [t.name, t.quote], color: '#7ee787' },
  { tag: [t.heading], color: '#d2a8ff', fontWeight: 'bold' },
  { tag: [t.emphasis], color: '#d2a8ff', fontStyle: 'italic' },
  { tag: [t.deleted], color: '#ffdcd7', backgroundColor: 'ffeef0' },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#ffab70' },
  { tag: t.link, textDecoration: 'underline' },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  { tag: t.invalid, color: '#f97583' },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const duotoneDarkTemp = [
  duotoneDarkTheme,
  /*@__PURE__*/ syntaxHighlighting(duotoneDarkHighlightStyle),
];
const duotoneDark = { backgroundColor: background, theme: duotoneDarkTemp };

export { color, duotoneDark, duotoneDarkHighlightStyle, duotoneDarkTheme };
