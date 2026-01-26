import { ref, computed } from 'vue';

const user = ref(null);

export function useAuth() {

    const isAuthenticated = computed(() => !!user.value);

    const setUser = (userData) => {
        user.value = userData;
    };

    const login = (userData) => {
        user.value = userData;
    };

    const logout = () => {
        user.value = null;
        localStorage.removeItem('access_token');
    };

    const register = (userData) => {
        user.value = userData;
    };

    return {
        user,
        isAuthenticated,
        setUser,
        login,
        logout,
        register,
    };
}