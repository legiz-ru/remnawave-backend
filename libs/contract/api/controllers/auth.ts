export const AUTH_CONTROLLER = 'auth' as const;

export const AUTH_ROUTES = {
    LOGIN: 'login',
    REGISTER: 'register',
    GET_STATUS: 'status',

    OAUTH2: {
        TELEGRAM_CALLBACK: 'oauth2/tg/callback',
        AUTHORIZE: 'oauth2/authorize',
        CALLBACK: 'oauth2/callback',
    },
} as const;
