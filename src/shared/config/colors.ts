/**
 * Цветовая палитра проекта
 * Быстрое редактирование всех цветов лендинга
 */

export const colors = {
  // Основные цвета
  primary: {
    main: '#7C3AED', // Фиолетовый (основной для кнопок и акцентов)
    dark: '#5B21B6',
    light: '#A78BFA',
  },

  // Акцентные цвета
  accent: {
    red: '#EF4444', // Красный (для важных CTA)
    redDark: '#DC2626',
  },

  // Фоновые цвета
  background: {
    main: '#FFFFFF',
    gray: '#F3F4F6',
    dark: '#1F2937',
    purple: '#4C1D95', // Фиолетовый для footer
  },

  // Текст
  text: {
    primary: '#111827',
    secondary: '#6B7280',
    white: '#FFFFFF',
    muted: '#9CA3AF',
  },

  // Границы и разделители
  border: {
    light: '#E5E7EB',
    gray: '#D1D5DB',
  },

  // Состояния
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',

  // Дополнительные
  overlay: 'rgba(0, 0, 0, 0.5)',
  shadow: 'rgba(0, 0, 0, 0.1)',
} as const;

export type Colors = typeof colors;
