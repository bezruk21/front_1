import { ref } from 'vue';

const isAuthenticated = ref(false);

export function useAuth() {
    const login = () => {
        isAuthenticated.value = true;
    };

    const logout = () => {
        isAuthenticated.value = false;
    };

    const register = () => {
        isAuthenticated.value = true;
    };

    return {
        isAuthenticated,
        login,
        logout,
        register,
    };
}