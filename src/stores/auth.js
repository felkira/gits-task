import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        signed: false,
        user: null,
        email: '',
        password: '',
        error: '',
    }),
    actions: {
        login(email, password) {
            if (email === 'admin@example.com' && password === 'secret') {
                this.signed = true;
                this.user = {
                    name: 'Fajar Maulana',
                    email: 'admin@example.com',
                };
                return true;
            }
            return false;
        },
        logout() {
            this.signed = false;
            this.user = null;
        },
    }
})