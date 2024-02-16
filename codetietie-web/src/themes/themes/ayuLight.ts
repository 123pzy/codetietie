import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/ayuLight-one-dark-theme/ as reference for the colors
const chalky = '#e5c07b',
  coral = '#e06c75',
  cyan = '#56b6c2',
  invalid = '#23262b',
  ivory = '#5d6268',
  stone = '#7d8799', // Brightened compared to original to increase contrast
  malibu = '#61afef',
  sage = '#98c379',
  whiskey = '#d19a66',
  violet = '#c678dd',
  darkBackground = '#21252b',
  highlightBackground = 'transparent',
  background = '#fcfcfc',
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
const ayuLightTheme = data(
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
const ayuLightHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  {
    tag: t.comment,
    color: '#787b8099',
  },
  {
    tag: t.string,
    color: '#86b300',
  },
  {
    tag: t.regexp,
    color: '#4cbf99',
  },
  {
    tag: [t.number, t.bool, t.null],
    color: '#ffaa33',
  },
  {
    tag: t.variableName,
    color: '#5c6166',
  },
  {
    tag: [t.definitionKeyword, t.modifier],
    color: '#fa8d3e',
  },
  {
    tag: [t.keyword, t.special(t.brace)],
    color: '#fa8d3e',
  },
  {
    tag: t.operator,
    color: '#ed9366',
  },
  {
    tag: t.separator,
    color: '#5c6166b3',
  },
  {
    tag: t.punctuation,
    color: '#5c6166',
  },
  {
    tag: [t.definition(t.propertyName), t.function(t.variableName)],
    color: '#f2ae49',
  },
  {
    tag: [t.className, t.definition(t.typeName)],
    color: '#22a4e6',
  },
  {
    tag: [t.tagName, t.typeName, t.self, t.labelName],
    color: '#55b4d4',
  },
  {
    tag: t.angleBracket,
    color: '#55b4d480',
  },
  {
    tag: t.attributeName,
    color: '#f2ae49',
  },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const ayuLightTemp = [
  ayuLightTheme,
  /*@__PURE__*/ syntaxHighlighting(ayuLightHighlightStyle),
];
const ayuLight = { backgroundColor: background, theme: ayuLightTemp };
export { color, ayuLight, ayuLightHighlightStyle, ayuLightTheme };
