import { defineStore } from 'pinia';
import { CodeContent } from '@/types/index';
import { addCodeFolder, updateCodeFile } from '@/api/request';
import hljs from 'highlight.js';
import { languageNames } from '@/themes/language-names';

interface test {
  [propsNames: string]: string;
}
export const useState = defineStore('state', {
  state: () => {
    return {
      editStatus: false,
      daysToAdd: 30,
      burn: false,
      addFileStatus: false,
      theme: '',
      codeContentTeam: [] as CodeContent[],
      currentCode: '',
      minHeight: 0,
      minWidth: 0,
      currentCodeLanguage: 'javascript',
      editCodeTitle: '',
      addStatus: true,
      editCodeLanguage: '' as string | null,
      selectedCodeTitle: null as string | null,
      disabled: true,
      downloadToImgDOM: false,
      deadlineTime: null as null | number,
      debugCodeLanguage: {
        maxima: 'python',
        abnf: 'javascript',
        pf: 'javascript',
        dns: 'markdown',
        kotlin: 'javascript',
      } as test,
      randomValue: '',
      datePickerDisabled: false,
      customStatus: false,
      currentCodeTheme: localStorage.getItem('code-theme') || 'vsCode',
    };
  },
  getters: {
    currentCodeLanguageByHljs() {
      const { language } = hljs.highlightAuto(this.currentCode);
      return (language as string) ? (language as string) : 'markdown';
    },
  },
  actions: {
    // 复制功能的函数
    copyFunc(value: string) {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    },
    toEditStatus() {
      this.editStatus = true;
      this.currentCode = '';
      this.editCodeTitle = '';
      this.editCodeLanguage = null;
      this.minHeight = 60;
      this.minWidth = 60;
      this.disabled = false;
    },
    async addCode(status: boolean, route: any, router: any) {
      if (!this.editCodeTitle) this.editCodeTitle = 'default';
      // 当用户没有设置代码语言，使用自动识别的语言结果，如果识别结果不在languageNames中，根据常见的几个对应关系（debugCodeLanguage）设置对应的代码语言
      if (!this.editCodeLanguage) {
        if (
          !(this.currentCodeLanguageByHljs in languageNames) &&
          this.currentCodeLanguageByHljs in this.debugCodeLanguage
        ) {
          this.editCodeLanguage =
            this.debugCodeLanguage[this.currentCodeLanguageByHljs];
        } else if (
          !(this.currentCodeLanguageByHljs in languageNames) &&
          !(this.currentCodeLanguageByHljs in this.debugCodeLanguage)
        ) {
          this.editCodeLanguage = 'javascript';
        } else {
          this.editCodeLanguage = this.currentCodeLanguageByHljs;
        }
      }
      // 设置代码默认过期时间
      if (!this.deadlineTime) {
        this.deadlineTime = Date.now() + 30 * 24 * 60 * 60 * 1000;
      }
      if (status) {
        this.randomValue = Math.random().toString(36).substr(2);
        // 计算未来的时间戳
        router.push(this.randomValue);
        const data = {
          randomValue: this.randomValue,
          editContent: this.currentCode,
          label: this.editCodeTitle,
          language: this.editCodeLanguage,
          dealLineTime: this.deadlineTime,
          burn: this.burn,
        };
        this.codeContentTeam = [
          {
            label: this.editCodeTitle.toString(),
            value: this.currentCode,
            language: this.editCodeLanguage,
          },
        ];
        await addCodeFolder(data);
      } else {
        this.codeContentTeam.push({
          label: this.editCodeTitle.toString(),
          value: this.currentCode,
          language: this.editCodeLanguage,
        });
        const data = {
          randomValue: route.params.randomValue,
          editContent: this.currentCode,
          label: this.editCodeTitle,
          language: this.editCodeLanguage,
        };
        await updateCodeFile(data);
      }
      const temp = this.codeContentTeam[this.codeContentTeam.length - 1];
      this.currentCode = temp.value; // 点击确认之后自动显示刚刚添加的代码
      this.selectedCodeTitle = temp.label; // 自动显示刚刚添加的代码label
      this.currentCodeLanguage = temp.language;
      console.log('this.currentCodeLanguage::', this.currentCodeLanguage);
      this.editStatus = false;
      this.minHeight = 0;
      this.minWidth = 0;
      this.disabled = true;
    },
  },
});
