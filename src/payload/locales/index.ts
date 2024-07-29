import type { LocalizationConfig } from 'payload/config'

export const locales: LocalizationConfig = {
  locales: [
    {
      label: 'English',
      code: 'en',
    },
    {
      label: 'Français',
      code: 'fr',
    },
    {
      label: 'Yoruba',
      code: 'yo',
    },
    {
      label: 'Русский',
      code: 'ru',
    },
    {
      label: 'العربية',
      code: 'ar',
      rtl: true,
    },
  ],
  defaultLocale: 'en',
  fallback: true,
}
