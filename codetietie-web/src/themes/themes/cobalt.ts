import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/cobalt-one-dark-theme/ as reference for the colors
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
  highlightBackground = 'transparent',
  background = '#00254b',
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
const cobaltTheme = data(
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
const cobaltHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  {
    tag: t.comment,
    color: '#0088FF',
  },
  {
    tag: t.string,
    color: '#3AD900',
  },
  {
    tag: t.regexp,
    color: '#80FFC2',
  },
  {
    tag: [t.number, t.bool, t.null],
    color: '#FF628C',
  },
  {
    tag: [t.definitionKeyword, t.modifier],
    color: '#FFEE80',
  },
  {
    tag: t.variableName,
    color: '#CCCCCC',
  },
  {
    tag: t.self,
    color: '#FF80E1',
  },
  {
    tag: [
      t.className,
      t.definition(t.propertyName),
      t.function(t.variableName),
      t.definition(t.typeName),
      t.labelName,
    ],
    color: '#FFDD00',
  },
  {
    tag: [t.keyword, t.operator],
    color: '#FF9D00',
  },
  {
    tag: [t.propertyName, t.typeName],
    color: '#80FFBB',
  },
  {
    tag: t.special(t.brace),
    color: '#EDEF7D',
  },
  {
    tag: t.attributeName,
    color: '#9EFFFF',
  },
  {
    tag: t.derefOperator,
    color: '#fff',
  },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const cobaltTemp = [
  cobaltTheme,
  /*@__PURE__*/ syntaxHighlighting(cobaltHighlightStyle),
];
const cobalt = { backgroundColor: background, theme: cobaltTemp };

export { color, cobalt, cobaltHighlightStyle, cobaltTheme };
