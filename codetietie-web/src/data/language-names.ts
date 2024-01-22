import { ref, Ref } from 'vue';
// 选择代码类型
const codeOptions: Ref<
  (
    | {
        label: string;
        value: string;
        language: string;
      }
    | {
        label: string;
        value: string;
      }
  )[]
> = ref([
  {
    label: '自动推断 (默认)',
    value: '',
    language: 'java',
  },
  {
    label: 'Java',
    value: 'java',
  },
  {
    label: 'JavaScript',
    value: 'javascript',
  },
  {
    label: 'Python',
    value: 'python',
  },
  {
    label: 'C++',
    value: 'cpp',
  },
  {
    label: 'C#',
    value: 'csharp',
  },
  {
    label: 'CSS',
    value: 'css',
  },
  {
    label: 'Go',
    value: 'go',
  },
  {
    label: 'Rust',
    value: 'rust',
  },
  {
    label: 'XML',
    value: 'xml',
  },
  {
    label: 'PHP',
    value: 'php',
  },
  {
    label: 'JSON',
    value: 'json',
  },
]);

export default codeOptions;
