import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const Env = createEnv({
    server: {
        LOGTAIL_SOURCE_TOKEN: z.string().optional(),
        RECAPTCHA_ENABLED: z.boolean(),
        BOG_API_BASE_URL: z.string(),
    },
    client: {
        NEXT_PUBLIC_APP_URL: z.string().optional(),
        NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
        NEXT_PUBLIC_POSTHOG_HOST: z.string().optional(),
        NEXT_PUBLIC_RECAPTCHA_CLIENT_ID: z.string(),
    },
    shared: {
        NODE_ENV: z.enum(['test', 'development', 'production']).optional(),
    },
    // You need to destructure all the keys manually
    runtimeEnv: {
        LOGTAIL_SOURCE_TOKEN: process.env.LOGTAIL_SOURCE_TOKEN,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
        NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        RECAPTCHA_ENABLED: process.env.RECAPTCHA_ENABLED === 'true',
        NEXT_PUBLIC_RECAPTCHA_CLIENT_ID:
            process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_ID,
        BOG_API_BASE_URL: process.env.BOG_API_BASE_URL,
    },
});
