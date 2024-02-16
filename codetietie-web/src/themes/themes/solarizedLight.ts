import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/solarizedLight-one-dark-theme/ as reference for the colors
const chalky = '#e5c07b',
  coral = '#e06c75',
  cyan = '#56b6c2',
  invalid = '#23262b',
  ivory = '#586e75',
  stone = '#7d8799', // Brightened compared to original to increase contrast
  malibu = '#61afef',
  sage = '#98c379',
  whiskey = '#d19a66',
  violet = '#c678dd',
  darkBackground = '#21252b',
  highlightBackground = 'transparent',
  background = '#fef7e5',
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
const solarizedLightTheme = data(
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
const solarizedLightHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  {
    tag: t.comment,
    color: '#93A1A1',
  },
  {
    tag: t.string,
    color: '#2AA198',
  },
  {
    tag: t.regexp,
    color: '#D30102',
  },
  {
    tag: t.number,
    color: '#D33682',
  },
  {
    tag: t.variableName,
    color: '#268BD2',
  },
  {
    tag: [t.keyword, t.operator, t.punctuation],
    color: '#859900',
  },
  {
    tag: [t.definitionKeyword, t.modifier],
    color: '#073642',
    fontWeight: 'bold',
  },
  {
    tag: [t.className, t.self, t.definition(t.propertyName)],
    color: '#268BD2',
  },
  {
    tag: t.function(t.variableName),
    color: '#268BD2',
  },
  {
    tag: [t.bool, t.null],
    color: '#B58900',
  },
  {
    tag: t.tagName,
    color: '#268BD2',
    fontWeight: 'bold',
  },
  {
    tag: t.angleBracket,
    color: '#93A1A1',
  },
  {
    tag: t.attributeName,
    color: '#93A1A1',
  },
  {
    tag: t.typeName,
    color: '#859900',
  },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const solarizedLightTemp = [
  solarizedLightTheme,
  /*@__PURE__*/ syntaxHighlighting(solarizedLightHighlightStyle),
];
const solarizedLight = { backgroundColor: background, theme: solarizedLightTemp };

export { color, solarizedLight, solarizedLightHighlightStyle, solarizedLightTheme };
