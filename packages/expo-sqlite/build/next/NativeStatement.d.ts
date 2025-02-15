/**
 * Result of a `runAsync` call.
 */
export interface RunResult {
    /**
     * The last inserted row ID.
     */
    lastInsertRowid: number;
    /**
     * The number of rows affected.
     */
    changes: number;
}
/**
 * Bind parameters to the prepared statement.
 * You can either pass the parameters in the following forms:
 *
 * @example
 * - A single array for unnamed parameters.
 * ```ts
 * const statement = await db.prepareAsync('SELECT * FROM test WHERE value = ? AND intValue = ?');
 * await statement.getAsync(['test1', 789]);
 * ```
 *
 * @example
 * - Variadic arguments for unnamed parameters.
 * ```ts
 * const statement = await db.prepareAsync('SELECT * FROM test WHERE value = ? AND intValue = ?');
 * await statement.getAsync('test1', 789);
 * ```
 *
 * @example
 * - A single object for [named parameters](https://www.sqlite.org/lang_expr.html)
 *
 * We support multiple named parameter forms such as `:VVV`, `@VVV`, and `$VVV`. We recommend using `$VVV` because JavaScript allows using `$` in identifiers without escaping.
 * ```ts
 * const statement = await db.prepareAsync('SELECT * FROM test WHERE value = $value AND intValue = $intValue');
 * await statement.getAsync({ $value: 'test1', $intValue: 789 });
 * ```
 */
export type BindValue = string | number | null | boolean | Uint8Array;
export type BindParams = Record<string, BindValue> | BindValue[];
export type VariadicBindParams = BindValue[];
export type BindPrimitiveParams = Record<string, Exclude<BindValue, Uint8Array>>;
export type BindBlobParams = Record<string, Uint8Array>;
export type ColumnNames = string[];
export type ColumnValues = any[];
type AnyDatabase = any;
/**
 * A class that represents an instance of the SQLite statement.
 */
export declare class NativeStatement {
    runAsync(database: AnyDatabase, bindParams: BindPrimitiveParams, bindBlobParams: BindBlobParams, shouldPassAsArray: boolean): Promise<RunResult>;
    getAsync(database: AnyDatabase, bindParams: BindPrimitiveParams, bindBlobParams: BindBlobParams, shouldPassAsArray: boolean): Promise<ColumnValues | null | undefined>;
    getAllAsync(database: AnyDatabase, bindParams: BindPrimitiveParams, bindBlobParams: BindBlobParams, shouldPassAsArray: boolean): Promise<ColumnValues[]>;
    getColumnNamesAsync(): Promise<ColumnNames>;
    resetAsync(database: AnyDatabase): Promise<void>;
    finalizeAsync(database: AnyDatabase): Promise<void>;
    runSync(database: AnyDatabase, bindParams: BindPrimitiveParams, bindBlobParams: BindBlobParams, shouldPassAsArray: boolean): RunResult;
    getSync(database: AnyDatabase, bindParams: BindPrimitiveParams, bindBlobParams: BindBlobParams, shouldPassAsArray: boolean): ColumnValues | null | undefined;
    getAllSync(database: AnyDatabase, bindParams: BindPrimitiveParams, bindBlobParams: BindBlobParams, shouldPassAsArray: boolean): ColumnValues[];
    getColumnNamesSync(): string[];
    resetSync(database: AnyDatabase): void;
    finalizeSync(database: AnyDatabase): void;
}
export {};
//# sourceMappingURL=NativeStatement.d.ts.map