import { ref } from 'vue';

const show = ref(false);
const message = ref('');
const type = ref('success'); // 'success' або 'error'
let timeout = null;

export function useToast() {

    const triggerToast = (msg, msgType = 'success') => {
        message.value = msg;
        type.value = msgType;
        show.value = true;

        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            show.value = false;
        }, 3000);
    };

    const closeToast = () => {
        show.value = false;
    };

    return {
        show,
        message,
        type,
        triggerToast,
        closeToast
    };
}