import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/barf-one-dark-theme/ as reference for the colors
const chalky = '#e5c07b',
  coral = '#e06c75',
  cyan = '#56b6c2',
  invalid = '#23262b',
  ivory = '#edf1e9',
  stone = '#7d8799', // Brightened compared to original to increase contrast
  malibu = '#61afef',
  sage = '#98c379',
  whiskey = '#d19a66',
  violet = '#c678dd',
  darkBackground = '#21252b',
  highlightBackground = 'transparent',
  background = '#15191EFA',
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
const barfTheme = data(
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
const barfHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  {
    tag: t.comment,
    color: '#6E6E6E',
  },
  {
    tag: [t.string, t.regexp, t.special(t.brace)],
    color: '#5C81B3',
  },
  {
    tag: t.number,
    color: '#C1E1B8',
  },
  {
    tag: t.bool,
    color: '#53667D',
  },
  {
    tag: [t.definitionKeyword, t.modifier, t.function(t.propertyName)],
    color: '#A3D295',
    fontWeight: 'bold',
  },
  {
    tag: [t.keyword, t.moduleKeyword, t.operatorKeyword, t.operator],
    color: '#697A8E',
    fontWeight: 'bold',
  },
  {
    tag: [t.variableName, t.attributeName],
    color: '#708E67',
  },
  {
    tag: [
      t.function(t.variableName),
      t.definition(t.propertyName),
      t.derefOperator,
    ],
    color: '#fff',
  },
  {
    tag: t.tagName,
    color: '#A3D295',
  },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const barfTemp = [
  barfTheme,
  /*@__PURE__*/ syntaxHighlighting(barfHighlightStyle),
];
const barf = { backgroundColor: background, theme: barfTemp };
export { color, barf, barfHighlightStyle, barfTheme };
