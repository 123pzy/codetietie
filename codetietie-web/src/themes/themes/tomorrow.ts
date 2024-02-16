import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/tomorrow-one-dark-theme/ as reference for the colors
const chalky = '#e5c07b',
  coral = '#e06c75',
  cyan = '#56b6c2',
  invalid = '#23262b',
  ivory = '#4d4d4c',
  stone = '#7d8799', // Brightened compared to original to increase contrast
  malibu = '#61afef',
  sage = '#98c379',
  whiskey = '#d19a66',
  violet = '#c678dd',
  darkBackground = '#21252b',
  highlightBackground = 'transparent',
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
const tomorrowTheme = data(
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
const tomorrowHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  {
    tag: t.comment,
    color: '#8E908C',
  },
  {
    tag: [t.variableName, t.self, t.propertyName, t.attributeName, t.regexp],
    color: '#C82829',
  },
  {
    tag: [t.number, t.bool, t.null],
    color: '#F5871F',
  },
  {
    tag: [t.className, t.typeName, t.definition(t.typeName)],
    color: '#C99E00',
  },
  {
    tag: [t.string, t.special(t.brace)],
    color: '#718C00',
  },
  {
    tag: t.operator,
    color: '#3E999F',
  },
  {
    tag: [t.definition(t.propertyName), t.function(t.variableName)],
    color: '#4271AE',
  },
  {
    tag: t.keyword,
    color: '#8959A8',
  },
  {
    tag: t.derefOperator,
    color: '#4D4D4C',
  },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const tomorrowTemp = [
  tomorrowTheme,
  /*@__PURE__*/ syntaxHighlighting(tomorrowHighlightStyle),
];
const tomorrow = { backgroundColor: background, theme: tomorrowTemp };

export { color, tomorrow, tomorrowHighlightStyle, tomorrowTheme };
