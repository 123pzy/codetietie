import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/dracula-one-dark-theme/ as reference for the colors
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
  background = '#2d2f3f',
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
const draculaTheme = data(
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
const draculaHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  {
    tag: t.comment,
    color: '#6272a4',
  },
  {
    tag: [t.string, t.special(t.brace)],
    color: '#f1fa8c',
  },
  {
    tag: [t.number, t.self, t.bool, t.null],
    color: '#bd93f9',
  },
  {
    tag: [t.keyword, t.operator],
    color: '#ff79c6',
  },
  {
    tag: [t.definitionKeyword, t.typeName],
    color: '#8be9fd',
  },
  {
    tag: t.definition(t.typeName),
    color: '#f8f8f2',
  },
  {
    tag: [
      t.className,
      t.definition(t.propertyName),
      t.function(t.variableName),
      t.attributeName,
    ],
    color: '#50fa7b',
  },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const dracula = [
  draculaTheme,
  /*@__PURE__*/ syntaxHighlighting(draculaHighlightStyle),
];

export { color, dracula, draculaHighlightStyle, draculaTheme };
