import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { data } from './data';

// Using https://github.com/one-dark/vscode-one-dark-theme/ as reference for the colors
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
  background = '#1e1e1e',
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
const vsCodeTheme = data(
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
const vsCodeHighlightStyle = /*@__PURE__*/ HighlightStyle.define([
  {
    tag: [
      t.keyword,
      t.operatorKeyword,
      t.modifier,
      t.color,
      t.constant(t.name),
      t.standard(t.name),
      t.standard(t.tagName),
      t.special(t.brace),
      t.atom,
      t.bool,
      t.special(t.variableName),
    ],
    color: '#569cd6',
  },
  {
    tag: [t.controlKeyword, t.moduleKeyword],
    color: '#c586c0',
  },
  {
    tag: [
      t.name,
      t.deleted,
      t.character,
      t.macroName,
      t.propertyName,
      t.variableName,
      t.labelName,
      t.definition(t.name),
    ],
    color: '#9cdcfe',
  },
  { tag: t.heading, fontWeight: 'bold', color: '#9cdcfe' },
  {
    tag: [
      t.typeName,
      t.className,
      t.tagName,
      t.number,
      t.changed,
      t.annotation,
      t.self,
      t.namespace,
    ],
    color: '#4ec9b0',
  },
  {
    tag: [t.function(t.variableName), t.function(t.propertyName)],
    color: '#dcdcaa',
  },
  { tag: [t.number], color: '#b5cea8' },
  {
    tag: [t.operator, t.punctuation, t.separator, t.url, t.escape, t.regexp],
    color: '#d4d4d4',
  },
  {
    tag: [t.regexp],
    color: '#d16969',
  },
  {
    tag: [t.special(t.string), t.processingInstruction, t.string, t.inserted],
    color: '#ce9178',
  },
  { tag: [t.angleBracket], color: '#808080' },
  { tag: t.strong, fontWeight: 'bold' },
  { tag: t.emphasis, fontStyle: 'italic' },
  { tag: t.strikethrough, textDecoration: 'line-through' },
  { tag: [t.meta, t.comment], color: '#6a9955' },
  { tag: t.link, color: '#6a9955', textDecoration: 'underline' },
  { tag: t.invalid, color: '#ff0000' },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const vsCode = [
  vsCodeTheme,
  /*@__PURE__*/ syntaxHighlighting(vsCodeHighlightStyle),
];

export { color, vsCode, vsCodeHighlightStyle, vsCodeTheme };
