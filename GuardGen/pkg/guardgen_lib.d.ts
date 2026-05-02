/* tslint:disable */
/* eslint-disable */

/**
 * Enum representing the target language.
 * - `None`: No language-specific modifications.
 * - `C`: Adds `extern "C"` for C compatibility.
 * - `Cxx`: No additional modifications (C++ default behavior).
 */
export enum Language {
    None = 0,
    C = 1,
    Cxx = 2,
}

/**
 * Enum representing line-ending styles.
 * - `None`: Uses system default.
 * - `LF`: Uses Unix-style LF.
 * - `CRLF`: Uses Windows-style CRLF.
 */
export enum LineEnding {
    None = 0,
    LF = 1,
    CRLF = 2,
}

/**
 * Generates an include guard string with optional language-specific modifications.
 *
 * # Arguments
 * * `prefix` - A prefix string for the guard name.
 * * `suffix` - An optional suffix for the guard name.
 * * `x` - The target language (C or C++).
 * * `line_ending` - The line-ending format.
 *
 * # Returns
 * A formatted include guard string.
 */
export function generate_guard(prefix: string, suffix: string | null | undefined, x: Language, line_ending: LineEnding): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly generate_guard: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number];
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
