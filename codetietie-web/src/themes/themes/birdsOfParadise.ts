import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/birdsOfParadise-one-dark-theme/ as reference for the colors
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
  background = '#3b2627',
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
const birdsOfParadiseTheme = data(
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
const birdsOfParadiseHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  {
    tag: t.comment,
    color: '#6B4E32',
  },
  {
    tag: [t.keyword, t.operator, t.derefOperator],
    color: '#EF5D32',
  },
  {
    tag: t.className,
    color: '#EFAC32',
    fontWeight: 'bold',
  },
  {
    tag: [
      t.typeName,
      t.propertyName,
      t.function(t.variableName),
      t.definition(t.variableName),
    ],
    color: '#EFAC32',
  },
  {
    tag: t.definition(t.typeName),
    color: '#EFAC32',
    fontWeight: 'bold',
  },
  {
    tag: t.labelName,
    color: '#EFAC32',
    fontWeight: 'bold',
  },
  {
    tag: [t.number, t.bool],
    color: '#6C99BB',
  },
  {
    tag: [t.variableName, t.self],
    color: '#7DAF9C',
  },
  {
    tag: [t.string, t.special(t.brace), t.regexp],
    color: '#D9D762',
  },
  {
    tag: [t.angleBracket, t.tagName, t.attributeName],
    color: '#EFCB43',
  },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const birdsOfParadise = [
  birdsOfParadiseTheme,
  /*@__PURE__*/ syntaxHighlighting(birdsOfParadiseHighlightStyle),
];

export { color, birdsOfParadise, birdsOfParadiseHighlightStyle, birdsOfParadiseTheme };
