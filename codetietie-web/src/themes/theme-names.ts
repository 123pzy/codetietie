import { codeThemeTeamInter } from '@/types/index';

export const themeNames: { [propNames: string]: string } = {
  aura: 'Aura',
  atomone: 'Atomone',
  tokyoNight: 'Tokyo Night',
  tokyoNightStorm: 'Tokyo Night Storm',
  dracula: 'Dracula',
  bbedit: 'BBEdit',
  duotoneLight: 'Duotone Light',
  duotoneDark: 'Duotone Dark',
  githubLight: 'Github Light',
  githubDark: 'Github Dark',
  vsCode: ' VS Code',
  xCodeLight: 'Xcode Light',
  xCodeDark: 'Xcode Dark',
  barf: 'Darf',
  birdsOfParadise: 'Birds Of Paradise',
  tomorrow: 'Tomorrow',
  cobalt: 'Cobalt',
  solarizedLight: 'Solarized Light',
  coolGlow: 'Cool Glow',
  ayuLight: 'Ayu Light',
  andromeda: 'Andromeda',
};
const codeThemeTeam: codeThemeTeamInter[] = [];
for (var theme in themeNames) {
  codeThemeTeam.push({
    label: themeNames[theme],
    value: theme,
  });
}
export { codeThemeTeam };
