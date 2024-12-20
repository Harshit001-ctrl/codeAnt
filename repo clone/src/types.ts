export interface Repository {
  name: string;
  description: string;
  language: string;
  visibility: 'public' | 'private';
  updatedAt: string;
  languageColor: string;
  size: string;
}

export interface SidebarItem {
  icon: JSX.Element;
  label: string;
}