import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/tokyoNight-one-dark-theme/ as reference for the colors
const chalky = '#e5c07b',
  coral = '#e06c75',
  cyan = '#56b6c2',
  invalid = '#23262b',
  ivory = '#787c99',
  stone = '#7d8799', // Brightened compared to original to increase contrast
  malibu = '#61afef',
  sage = '#98c379',
  whiskey = '#d19a66',
  violet = '#c678dd',
  darkBackground = '#21252b',
  highlightBackground = 'transparent',
  background = '#1a1b26',
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
const tokyoNightTheme = data(
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
const tokyoNightHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  { tag: t.keyword, color: '#bb9af7' },
  { tag: [t.name, t.deleted, t.character, t.macroName], color: '#c0caf5' },
  { tag: [t.propertyName], color: '#7aa2f7' },
  {
    tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)],
    color: '#9ece6a',
  },
  { tag: [t.function(t.variableName), t.labelName], color: '#7aa2f7' },
  {
    tag: [t.color, t.constant(t.name), t.standard(t.name)],
    color: '#bb9af7',
  },
  { tag: [t.definition(t.name), t.separator], color: '#c0caf5' },
  { tag: [t.className], color: '#c0caf5' },
  {
    tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
    color: '#ff9e64',
  },
  { tag: [t.typeName], color: '#0db9d7' },
  { tag: [t.operator, t.operatorKeyword], color: '#bb9af7' },
  { tag: [t.url, t.escape, t.regexp, t.link], color: '#b4f9f8' },
  { tag: [t.meta, t.comment], color: '#444b6a' },
  { tag: t.strong, fontWeight: 'bold' },
  { tag: t.emphasis, fontStyle: 'italic' },
  { tag: t.link, textDecoration: 'underline' },
  { tag: t.heading, fontWeight: 'bold', color: '#89ddff' },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#c0caf5' },
  { tag: t.invalid, color: '#ff5370' },
  { tag: t.strikethrough, textDecoration: 'line-through' },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const tokyoNightTemp = [
  tokyoNightTheme,
  /*@__PURE__*/ syntaxHighlighting(tokyoNightHighlightStyle),
];
const tokyoNight = { backgroundColor: background, theme: tokyoNightTemp };

export { color, tokyoNight, tokyoNightHighlightStyle, tokyoNightTheme };
