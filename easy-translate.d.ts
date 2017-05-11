export interface IOptions {
  _category?: string;
}

export interface ITranslations {
  category?: string;
  language: string;
  translations?: object;
  plural?: (n: number) => number;
}

type Options = IOptions | number | any;

export interface ITranslate {
  (message: string, options?: Options, ...positional: any[]): string;
  language(lang?: string): string | void;
  load(data: ITranslations): void;
}

const t: ITranslate;
export default t;
export = t;

export function language(lang?: string): string | void;
export function load(data: ITranslations): void;
