export type Socials = { [key: string]: string };

export type PostDetails<T = unknown> = {
  date?: Date;
  name: string;
  description?: string;
  url: string;
  imageUrl?: string;
  details?: T;
};

export type PostBasic = {
  date?: Date;
  name: string;
  url: string;
};
