import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
    name: 'Focus Pro',
    locales: ['fr'],
    defaultLocale: 'fr',
    localePrefix,
};
