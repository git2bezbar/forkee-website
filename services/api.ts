import { Categories, ContactSettings, CustomizationSettings, GeneralSettings, Page, PageType, Products, WebsiteMenu } from "./types";

const API_URL = 'http://localhost:3333/front';

/**
 * Provides the website menu.
 * @example
 * ```ts
 * await getMenu(uuid);
 * ```
 */

export const getMenu = async (uuid: string): Promise<WebsiteMenu | null> => {
  const response = await fetch(`${API_URL}/${uuid}/menu`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    return null;
  }

  return await response.json();
};

/**
 * Provides the general settings.
 * @example
 * ```ts
 * await getGeneralSettings(uuid);
 * ```
 */

export const getGeneralSettings = async (uuid: string): Promise<GeneralSettings | null> => {
  const response = await fetch(`${API_URL}/${uuid}/general-settings`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    return null;
  }

  return await response.json();
};

/**
 * Provides the contact settings.
 * @example
 * ```ts
 * await getContactSettings(uuid);
 * ```
 */

export const getContactSettings = async (uuid: string): Promise<ContactSettings | null> => {
  const response = await fetch(`${API_URL}/${uuid}/contact-settings`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    return null;
  }

  return await response.json();
};

/**
 * Provides the page according to type.
 * @example
 * ```ts
 * await getPage(uuid, type);
 * ```
 */

export const getPage = async (
  uuid: string,
  type: PageType
): Promise<Page | null> => {
  const response = await fetch(`${API_URL}/${uuid}/page/${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    return null;
  }

  return await response.json();
};

/**
 * Provides the categories.
 * @example
 * ```ts
 * await getCategories(uuid);
 * ```
 */

export const getCategories = async (
  uuid: string
): Promise<Categories | null> => {
  const response = await fetch(`${API_URL}/${uuid}/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    return null;
  }

  return await response.json();
};

/**
 * Provides the products of a restaurant.
 * @example
 * ```ts
 * await getProducts(uuid);
 * ```
 */

export const getProducts = async (
  uuid: string
): Promise<Products | null> => {
  const response = await fetch(`${API_URL}/${uuid}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    return null;
  }

  return await response.json();
};

/**
 * Provides the customization settings.
 * @example
 * ```ts
 * await getCustomizationSettings(uuid);
 * ```
 */

export const getCustomizationSettings = async (
  uuid: string
): Promise<CustomizationSettings | null> => {
  const response = await fetch(`${API_URL}/${uuid}/customization`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    return null;
  }

  return await response.json();
};
