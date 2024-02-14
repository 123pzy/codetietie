import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/xCodeLight-one-dark-theme/ as reference for the colors
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
  background = '#fff',
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
const xCodeLightTheme = data(
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
const xCodeLightHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  { tag: [t.comment, t.quote], color: "#707F8D" },
  { tag: [t.typeName, t.typeOperator], color: "#aa0d91" },
  { tag: [t.keyword], color: "#aa0d91", fontWeight: "bold" },
  { tag: [t.string, t.meta], color: "#D23423" },
  { tag: [t.name], color: "#032f62" },
  { tag: [t.typeName], color: "#522BB2" },
  { tag: [t.variableName], color: "#23575C" },
  { tag: [t.definition(t.variableName)], color: "#327A9E" },
  { tag: [t.regexp, t.link], color: "#0e0eff" },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const xCodeLight = [
  xCodeLightTheme,
  /*@__PURE__*/ syntaxHighlighting(xCodeLightHighlightStyle),
];

export { color, xCodeLight, xCodeLightHighlightStyle, xCodeLightTheme };
