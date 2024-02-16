import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/aura-one-dark-theme/ as reference for the colors
const chalky = '#e5c07b',
  coral = '#e06c75',
  cyan = '#56b6c2',
  invalid = '#23262b',
  ivory = '#edecee',
  stone = '#7d8799', // Brightened compared to original to increase contrast
  malibu = '#61afef',
  sage = '#98c379',
  whiskey = '#d19a66',
  violet = '#c678dd',
  darkBackground = '#21252b',
  highlightBackground = 'transparent',
  background = '#21202e',
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
const auraTheme = data(
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
const auraHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  { tag: t.keyword, color: '#a277ff' },
  { tag: [t.name, t.deleted, t.character, t.macroName], color: '#edecee' },
  { tag: [t.propertyName], color: '#ffca85' },
  {
    tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)],
    color: '#61ffca',
  },
  { tag: [t.function(t.variableName), t.labelName], color: '#ffca85' },
  {
    tag: [t.color, t.constant(t.name), t.standard(t.name)],
    color: '#61ffca',
  },
  { tag: [t.definition(t.name), t.separator], color: '#edecee' },
  { tag: [t.className], color: '#82e2ff' },
  {
    tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
    color: '#61ffca',
  },
  { tag: [t.typeName], color: '#82e2ff' },
  { tag: [t.operator, t.operatorKeyword], color: '#a277ff' },
  { tag: [t.url, t.escape, t.regexp, t.link], color: '#61ffca' },
  { tag: [t.meta, t.comment], color: '#6d6d6d' },
  { tag: t.strong, fontWeight: 'bold' },
  { tag: t.emphasis, fontStyle: 'italic' },
  { tag: t.link, textDecoration: 'underline' },
  { tag: t.heading, fontWeight: 'bold', color: '#a277ff' },
  { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#edecee' },
  { tag: t.invalid, color: '#ff6767' },
  { tag: t.strikethrough, textDecoration: 'line-through' },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const auraTemp = [
  auraTheme,
  /*@__PURE__*/ syntaxHighlighting(auraHighlightStyle),
];
const aura = { backgroundColor: background, theme: auraTemp };
export { color, aura, auraHighlightStyle, auraTheme };
