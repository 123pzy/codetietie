import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/andromeda-one-dark-theme/ as reference for the colors
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
  background = '#23262E',
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
const c = {
  background: "#23262E",
  foreground: "#D5CED9",
  selection: "#db45a280",
  selectionMatch: "#db45a280",
  cursor: "#FFF",
  dropdownBackground: "#2b303b",
  dropdownBorder: "#363c49",
  activeLine: "#596a992e",
  matchingBracket: "#746f77",
  keyword: "#c74ded",
  storage: "#c74ded",
  variable: "#00e8c6",
  parameter: "#00e8c6",
  function: "#FFE66D",
  string: "#96E072",
  constant: "#ee5d43",
  type: "#FFE66D",
  class: "#FFE66D",
  number: "#ee5d43",
  comment: "#A0A1A7cc",
  heading: "#ff00aa",
  invalid: null,
  regexp: "#96E072",
  tag: "#f92672",
};
/**
The editor theme styles for One Dark.
*/
const andromedaTheme = data(
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
const andromedaHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  { tag: t.keyword, color: c.keyword },
  { tag: [t.name, t.deleted, t.character, t.macroName], color: c.variable },
  { tag: [t.propertyName], color: c.function },
  {
    tag: [
      t.processingInstruction,
      t.string,
      t.inserted,
      t.special(t.string),
    ],
    color: c.string,
  },
  { tag: [t.function(t.variableName), t.labelName], color: c.function },
  {
    tag: [t.color, t.constant(t.name), t.standard(t.name)],
    color: c.constant,
  },
  { tag: [t.definition(t.name), t.separator], color: c.variable },
  { tag: [t.className], color: c.class },
  {
    tag: [
      t.number,
      t.changed,
      t.annotation,
      t.modifier,
      t.self,
      t.namespace,
    ],
    color: c.number,
  },
  { tag: [t.typeName], color: c.type, fontStyle: c.type },
  { tag: [t.operator], color: c.keyword },
  { tag: [t.url, t.escape, t.regexp, t.link], color: c.regexp },
  { tag: [t.meta, t.comment], color: c.comment },
  { tag: t.tagName, color: c.tag },
  { tag: t.strong, fontWeight: "bold" },
  { tag: t.emphasis, fontStyle: "italic" },
  { tag: t.link, textDecoration: "underline" },
  { tag: t.heading, fontWeight: "bold", color: c.heading },
  { tag: [t.atom, t.special(t.variableName)], color: c.variable },
  { tag: t.invalid, color: c.invalid },
  { tag: t.strikethrough, textDecoration: "line-through" },
  {
    tag: [t.operatorKeyword, t.bool, t.null, t.variableName],
    color: c.constant,
  },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const andromeda = [
  andromedaTheme,
  /*@__PURE__*/ syntaxHighlighting(andromedaHighlightStyle),
];

export { color, andromeda, andromedaHighlightStyle, andromedaTheme };
