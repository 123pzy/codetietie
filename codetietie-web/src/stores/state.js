import { defineStore } from "pinia";

export const useState = defineStore("state", {
    state: () => {
        return {
            state: false,
            CN: localStorage.getItem('CN') || 'English',
            daysToAdd: 30,
            burn: false,
            theme: localStorage.getItem('theme') || 'light',
            addFileStatus: false
        };
    },
    actions: {
        changeCN() {
            this.text = this.text === this.text_cn ? this.text_en : this.text_cn
        }
    },
});