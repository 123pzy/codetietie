import { defineStore } from "pinia";

export const useState = defineStore("state", {
    state: () => {
        return {
            state: false,
            daysToAdd: 30
        };
    },
    actions: {
    },
});