/**
 * Defines the shape of a single service item object.
 */
export interface ServiceItem {
  id: number | string;
  title: string;
  imageSrc: string;
  href?: string;
}

/**
 * Defines the props that can be passed to the main Services component.
 */
export interface ServicesProps {
  /**
   * The main title for the services section.
   */
  title?: string;
  /**
   * The label for the call-to-action button in the header.
   */
  ctaLabel?: string;
  /**
   * The URL the call-to-action button should link to.
   */
  ctaHref?: string;
  /**
   * An array of service items to display in the grid.
   */
  items?: ServiceItem[];
  /**
   * If true, the header (title and CTA button) will be hidden.
   * This is useful for showing all services on a dedicated page.
   * @default false
   */
  hideHeader?: boolean;
}