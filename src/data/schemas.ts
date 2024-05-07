export interface IFlavor {
  home: {
    stack: string;
    edit: string;
    stackLink: string;
    countString(count: number): string;
  };
}

export interface IAssets {
  stack: string;
}
