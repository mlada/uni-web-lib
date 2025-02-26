declare namespace JSX {
  interface IntrinsicElements {
    'app-logo': AppLogoProps;
  }
}

interface AppLogoProps {
  /**
   * Размер логотипа. Допустимые значения: `sm`, `md`, `lg`.
   * По умолчанию: `md`.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Путь до изображения логотипа.
   */
  src?: string;

  /**
   * Путь до SVG или инлайновый SVG
   */
  svg?: string;
}