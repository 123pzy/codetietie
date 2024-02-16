import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/coolGlow-one-dark-theme/ as reference for the colors
const chalky = '#e5c07b',
  coral = '#e06c75',
  cyan = '#56b6c2',
  invalid = '#23262b',
  ivory = '#e0e0e0',
  stone = '#7d8799', // Brightened compared to original to increase contrast
  malibu = '#61afef',
  sage = '#98c379',
  whiskey = '#d19a66',
  violet = '#c678dd',
  darkBackground = '#21252b',
  highlightBackground = 'transparent',
  background = '#060521',
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
const coolGlowTheme = data(
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
const coolGlowHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  {
    tag: t.comment,
    color: '#AEAEAE',
  },
  {
    tag: [t.string, t.special(t.brace), t.regexp],
    color: '#8DFF8E',
  },
  {
    tag: [
      t.className,
      t.definition(t.propertyName),
      t.function(t.variableName),
      t.function(t.definition(t.variableName)),
      t.definition(t.typeName),
    ],
    color: '#A3EBFF',
  },
  {
    tag: [t.number, t.bool, t.null],
    color: '#62E9BD',
  },
  {
    tag: [t.keyword, t.operator],
    color: '#2BF1DC',
  },
  {
    tag: [t.definitionKeyword, t.modifier],
    color: '#F8FBB1',
  },
  {
    tag: [t.variableName, t.self],
    color: '#B683CA',
  },
  {
    tag: [t.angleBracket, t.tagName, t.typeName, t.propertyName],
    color: '#60A4F1',
  },
  {
    tag: t.derefOperator,
    color: '#E0E0E0',
  },
  {
    tag: t.attributeName,
    color: '#7BACCA',
  },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const coolGlowTemp = [
  coolGlowTheme,
  /*@__PURE__*/ syntaxHighlighting(coolGlowHighlightStyle),
];
const coolGlow = { backgroundColor: background, theme: coolGlowTemp };

export { color, coolGlow, coolGlowHighlightStyle, coolGlowTheme };
