import {codeLanguageTeamInter}from '@/types/index'
import { LanguageName } from "@uiw/codemirror-extensions-langs";

export const languageNames: Record<LanguageName, string> = {
  angular: "Angular",
  apl: "APL",
  asciiArmor: "AsciiArmor",
  asterisk: "Asterisk",
  c: "C",
  csharp: "C#",
  scala: "Scala",
  solidity: "Solidity",
  kotlin: "Kotlin",
  shader: "Shader",
  nesC: "NesC",
  objectiveC: "ObjectiveC",
  objectiveCpp: "ObjectiveC++",
  squirrel: "Squirrel",
  ceylon: "Ceylon",
  dart: "Dart",
  cmake: "Cmake",
  cobol: "Cobol",
  commonLisp: "CommonLisp",
  crystal: "Crystal",
  cypher: "Cypher",
  d: "D",
  diff: "Diff",
  dtd: "Dtd",
  dylan: "Dylan",
  ebnf: "Ebnf",
  ecl: "Ecl",
  eiffel: "Eiffel",
  elm: "Elm",
  factor: "Factor",
  fcl: "Fcl",
  forth: "Forth",
  fortran: "Fortran",
  gas: "Gas",
  gherkin: "Gherkin",
  groovy: "Groovy",
  haskell: "Haskell",
  haxe: "Haxe",
  http: "HTTP",
  idl: "IDL",
  jinja2: "Jinja2",
  mathematica: "Mathematica",
  mbox: "Mbox",
  mirc: "Mirc",
  modelica: "Modelica",
  mscgen: "Mscgen",
  mumps: "Mumps",
  nsis: "Nsis",
  ntriples: "Ntriples",
  octave: "Octave",
  oz: "Oz",
  pig: "Pig",
  properties: "Properties",
  protobuf: "Protobuf",
  puppet: "Puppet",
  q: "Q",
  sas: "Sas",
  sass: "Sass",
  liquid: "Liquid",
  mermaid: "Mermaid",
  nix: "Nix",
  svelte: "Svelte",
  sieve: "Sieve",
  smalltalk: "Smalltalk",
  solr: "Solr",
  sparql: "SPARQL",
  spreadsheet: "Spreadsheet",
  stex: "Stex",
  textile: "Textile",
  tiddlyWiki: "TiddlyWiki",
  tiki: "Tiki",
  troff: "troff",
  ttcn: "Ttcn",
  turtle: "Turtle",
  velocity: "Velocity",
  verilog: "Verilog",
  vhdl: "Vhdl",
  webIDL: "WebIDL",
  xQuery: "XQuery",
  yacas: "Yacas",
  z80: "Z80",
  wast: "Wast",
  javascript: "JavaScript",
  jsx: "JSX",
  typescript: "TypeScript",
  tsx: "TSX",
  vue: "Vue",
  json: "JSON",
  html: "HTML",
  css: "CSS",
  python: "Python",
  markdown: "Markdown",
  xml: "Xml",
  sql: "SQL",
  mysql: "MySQL",
  pgsql: "PL/pgSQL",
  java: "Java",
  rust: "Rust",
  cpp: "C++",
  lezer: "Lezer",
  php: "PHP",
  go: "Go",
  shell: "Shell",
  lua: "Lua",
  swift: "Swift",
  tcl: "Tcl",
  yaml: "Yaml",
  vb: "Vb",
  powershell: "PowerShell",
  brainfuck: "Brainfuck",
  stylus: "Stylus",
  erlang: "Erlang",
  nginx: "NGINX",
  perl: "Perl",
  ruby: "Ruby",
  pascal: "Pascal",
  livescript: "LiveScript",
  less: "Less",
  scheme: "Scheme",
  toml: "TOMAL",
  vbscript: "VBScript",
  clojure: "Clojure",
  coffeescript: "CoffeeScript",
  julia: "Julia",
  dockerfile: "Dockerfile",
  r: "R",
};
const codeLanguageTeam:codeLanguageTeamInter[] = [] as codeLanguageTeamInter[];
for (var lang in languageNames) {
  codeLanguageTeam.push({
    label: languageNames[lang as LanguageName],
    value: lang,
  });
}
export { codeLanguageTeam };
