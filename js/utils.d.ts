export declare const percentFrom: (current: number, total: number, multiplier?: number) => number;
export declare const sliceFromPercent: (value: number, percent: number, multiplier?: number) => number;
export declare const getUnit: (value: string) => string;
export declare const getValue: (value: string | number) => number;
export declare const camelToKebabCase: (value: string) => string;
export declare const kebabToCamelCase: (value: string) => string;
export declare const closest: (value: number, arr: any[]) => number;
export declare const loopWhile: (value: any[], until: (index?: number) => boolean, func: (index?: number) => void, done?: (index?: number) => void) => void;
export declare const getElementDefaultProperty: (element: HTMLElement, property: string) => any;
export declare const previousKeyframeValue: (keyframes: any, percent: number, property: string) => any;