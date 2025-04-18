
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model UserReview
 * 
 */
export type UserReview = $Result.DefaultSelection<Prisma.$UserReviewPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model CommentReview
 * 
 */
export type CommentReview = $Result.DefaultSelection<Prisma.$CommentReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Admin: 'Admin',
  User: 'User'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Category: {
  Book: 'Book',
  Game: 'Game',
  Movie: 'Movie'
};

export type Category = (typeof Category)[keyof typeof Category]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userReview`: Exposes CRUD operations for the **UserReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserReviews
    * const userReviews = await prisma.userReview.findMany()
    * ```
    */
  get userReview(): Prisma.UserReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentReview`: Exposes CRUD operations for the **CommentReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentReviews
    * const commentReviews = await prisma.commentReview.findMany()
    * ```
    */
  get commentReview(): Prisma.CommentReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Review: 'Review',
    UserReview: 'UserReview',
    Comment: 'Comment',
    CommentReview: 'CommentReview'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "review" | "userReview" | "comment" | "commentReview"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      UserReview: {
        payload: Prisma.$UserReviewPayload<ExtArgs>
        fields: Prisma.UserReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          findFirst: {
            args: Prisma.UserReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          findMany: {
            args: Prisma.UserReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>[]
          }
          create: {
            args: Prisma.UserReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          createMany: {
            args: Prisma.UserReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>[]
          }
          delete: {
            args: Prisma.UserReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          update: {
            args: Prisma.UserReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          deleteMany: {
            args: Prisma.UserReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>[]
          }
          upsert: {
            args: Prisma.UserReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserReviewPayload>
          }
          aggregate: {
            args: Prisma.UserReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserReview>
          }
          groupBy: {
            args: Prisma.UserReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserReviewCountArgs<ExtArgs>
            result: $Utils.Optional<UserReviewCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      CommentReview: {
        payload: Prisma.$CommentReviewPayload<ExtArgs>
        fields: Prisma.CommentReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReviewPayload>
          }
          findFirst: {
            args: Prisma.CommentReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReviewPayload>
          }
          findMany: {
            args: Prisma.CommentReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReviewPayload>[]
          }
          create: {
            args: Prisma.CommentReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReviewPayload>
          }
          createMany: {
            args: Prisma.CommentReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReviewPayload>[]
          }
          delete: {
            args: Prisma.CommentReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReviewPayload>
          }
          update: {
            args: Prisma.CommentReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReviewPayload>
          }
          deleteMany: {
            args: Prisma.CommentReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReviewPayload>[]
          }
          upsert: {
            args: Prisma.CommentReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReviewPayload>
          }
          aggregate: {
            args: Prisma.CommentReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentReview>
          }
          groupBy: {
            args: Prisma.CommentReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentReviewCountArgs<ExtArgs>
            result: $Utils.Optional<CommentReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    review?: ReviewOmit
    userReview?: UserReviewOmit
    comment?: CommentOmit
    commentReview?: CommentReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userAndReview: number
    CommentReview: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAndReview?: boolean | UserCountOutputTypeCountUserAndReviewArgs
    CommentReview?: boolean | UserCountOutputTypeCountCommentReviewArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserAndReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentReviewWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    userAndReview: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAndReview?: boolean | ReviewCountOutputTypeCountUserAndReviewArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountUserAndReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReviewWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    CommentReview: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CommentReview?: boolean | CommentCountOutputTypeCountCommentReviewArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountCommentReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    hashPassword: string | null
    avatar: string | null
    role: $Enums.Role | null
    currentHashedRefreshToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    hashPassword: string | null
    avatar: string | null
    role: $Enums.Role | null
    currentHashedRefreshToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    hashPassword: number
    avatar: number
    role: number
    currentHashedRefreshToken: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    hashPassword?: true
    avatar?: true
    role?: true
    currentHashedRefreshToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    hashPassword?: true
    avatar?: true
    role?: true
    currentHashedRefreshToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    hashPassword?: true
    avatar?: true
    role?: true
    currentHashedRefreshToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    hashPassword: string
    avatar: string
    role: $Enums.Role
    currentHashedRefreshToken: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    hashPassword?: boolean
    avatar?: boolean
    role?: boolean
    currentHashedRefreshToken?: boolean
    userAndReview?: boolean | User$userAndReviewArgs<ExtArgs>
    CommentReview?: boolean | User$CommentReviewArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    hashPassword?: boolean
    avatar?: boolean
    role?: boolean
    currentHashedRefreshToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    hashPassword?: boolean
    avatar?: boolean
    role?: boolean
    currentHashedRefreshToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    hashPassword?: boolean
    avatar?: boolean
    role?: boolean
    currentHashedRefreshToken?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "hashPassword" | "avatar" | "role" | "currentHashedRefreshToken", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAndReview?: boolean | User$userAndReviewArgs<ExtArgs>
    CommentReview?: boolean | User$CommentReviewArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userAndReview: Prisma.$UserReviewPayload<ExtArgs>[]
      CommentReview: Prisma.$CommentReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      hashPassword: string
      avatar: string
      role: $Enums.Role
      currentHashedRefreshToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userAndReview<T extends User$userAndReviewArgs<ExtArgs> = {}>(args?: Subset<T, User$userAndReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CommentReview<T extends User$CommentReviewArgs<ExtArgs> = {}>(args?: Subset<T, User$CommentReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly hashPassword: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly currentHashedRefreshToken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userAndReview
   */
  export type User$userAndReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    where?: UserReviewWhereInput
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    cursor?: UserReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserReviewScalarFieldEnum | UserReviewScalarFieldEnum[]
  }

  /**
   * User.CommentReview
   */
  export type User$CommentReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReview
     */
    select?: CommentReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReview
     */
    omit?: CommentReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReviewInclude<ExtArgs> | null
    where?: CommentReviewWhereInput
    orderBy?: CommentReviewOrderByWithRelationInput | CommentReviewOrderByWithRelationInput[]
    cursor?: CommentReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentReviewScalarFieldEnum | CommentReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    title: string | null
    preview: string | null
    category: $Enums.Category | null
    text: string | null
    isLaked: boolean | null
    isDislaked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    title: string | null
    preview: string | null
    category: $Enums.Category | null
    text: string | null
    isLaked: boolean | null
    isDislaked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    title: number
    preview: number
    category: number
    text: number
    isLaked: number
    isDislaked: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    title?: true
    preview?: true
    category?: true
    text?: true
    isLaked?: true
    isDislaked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    title?: true
    preview?: true
    category?: true
    text?: true
    isLaked?: true
    isDislaked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    title?: true
    preview?: true
    category?: true
    text?: true
    isLaked?: true
    isDislaked?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    title: string
    preview: string
    category: $Enums.Category
    text: string
    isLaked: boolean
    isDislaked: boolean
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    preview?: boolean
    category?: boolean
    text?: boolean
    isLaked?: boolean
    isDislaked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userAndReview?: boolean | Review$userAndReviewArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    preview?: boolean
    category?: boolean
    text?: boolean
    isLaked?: boolean
    isDislaked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    preview?: boolean
    category?: boolean
    text?: boolean
    isLaked?: boolean
    isDislaked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    title?: boolean
    preview?: boolean
    category?: boolean
    text?: boolean
    isLaked?: boolean
    isDislaked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "preview" | "category" | "text" | "isLaked" | "isDislaked" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAndReview?: boolean | Review$userAndReviewArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      userAndReview: Prisma.$UserReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      preview: string
      category: $Enums.Category
      text: string
      isLaked: boolean
      isDislaked: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userAndReview<T extends Review$userAndReviewArgs<ExtArgs> = {}>(args?: Subset<T, Review$userAndReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly title: FieldRef<"Review", 'String'>
    readonly preview: FieldRef<"Review", 'String'>
    readonly category: FieldRef<"Review", 'Category'>
    readonly text: FieldRef<"Review", 'String'>
    readonly isLaked: FieldRef<"Review", 'Boolean'>
    readonly isDislaked: FieldRef<"Review", 'Boolean'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.userAndReview
   */
  export type Review$userAndReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    where?: UserReviewWhereInput
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    cursor?: UserReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserReviewScalarFieldEnum | UserReviewScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model UserReview
   */

  export type AggregateUserReview = {
    _count: UserReviewCountAggregateOutputType | null
    _avg: UserReviewAvgAggregateOutputType | null
    _sum: UserReviewSumAggregateOutputType | null
    _min: UserReviewMinAggregateOutputType | null
    _max: UserReviewMaxAggregateOutputType | null
  }

  export type UserReviewAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    reviewId: number | null
  }

  export type UserReviewSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    reviewId: number | null
  }

  export type UserReviewMinAggregateOutputType = {
    id: number | null
    authorId: number | null
    reviewId: number | null
  }

  export type UserReviewMaxAggregateOutputType = {
    id: number | null
    authorId: number | null
    reviewId: number | null
  }

  export type UserReviewCountAggregateOutputType = {
    id: number
    authorId: number
    reviewId: number
    _all: number
  }


  export type UserReviewAvgAggregateInputType = {
    id?: true
    authorId?: true
    reviewId?: true
  }

  export type UserReviewSumAggregateInputType = {
    id?: true
    authorId?: true
    reviewId?: true
  }

  export type UserReviewMinAggregateInputType = {
    id?: true
    authorId?: true
    reviewId?: true
  }

  export type UserReviewMaxAggregateInputType = {
    id?: true
    authorId?: true
    reviewId?: true
  }

  export type UserReviewCountAggregateInputType = {
    id?: true
    authorId?: true
    reviewId?: true
    _all?: true
  }

  export type UserReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReview to aggregate.
     */
    where?: UserReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviews to fetch.
     */
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserReviews
    **/
    _count?: true | UserReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserReviewMaxAggregateInputType
  }

  export type GetUserReviewAggregateType<T extends UserReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateUserReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserReview[P]>
      : GetScalarType<T[P], AggregateUserReview[P]>
  }




  export type UserReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReviewWhereInput
    orderBy?: UserReviewOrderByWithAggregationInput | UserReviewOrderByWithAggregationInput[]
    by: UserReviewScalarFieldEnum[] | UserReviewScalarFieldEnum
    having?: UserReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserReviewCountAggregateInputType | true
    _avg?: UserReviewAvgAggregateInputType
    _sum?: UserReviewSumAggregateInputType
    _min?: UserReviewMinAggregateInputType
    _max?: UserReviewMaxAggregateInputType
  }

  export type UserReviewGroupByOutputType = {
    id: number
    authorId: number
    reviewId: number
    _count: UserReviewCountAggregateOutputType | null
    _avg: UserReviewAvgAggregateOutputType | null
    _sum: UserReviewSumAggregateOutputType | null
    _min: UserReviewMinAggregateOutputType | null
    _max: UserReviewMaxAggregateOutputType | null
  }

  type GetUserReviewGroupByPayload<T extends UserReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserReviewGroupByOutputType[P]>
            : GetScalarType<T[P], UserReviewGroupByOutputType[P]>
        }
      >
    >


  export type UserReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    reviewId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userReview"]>

  export type UserReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    reviewId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userReview"]>

  export type UserReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    reviewId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userReview"]>

  export type UserReviewSelectScalar = {
    id?: boolean
    authorId?: boolean
    reviewId?: boolean
  }

  export type UserReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "reviewId", ExtArgs["result"]["userReview"]>
  export type UserReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type UserReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type UserReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $UserReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserReview"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      authorId: number
      reviewId: number
    }, ExtArgs["result"]["userReview"]>
    composites: {}
  }

  type UserReviewGetPayload<S extends boolean | null | undefined | UserReviewDefaultArgs> = $Result.GetResult<Prisma.$UserReviewPayload, S>

  type UserReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserReviewCountAggregateInputType | true
    }

  export interface UserReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserReview'], meta: { name: 'UserReview' } }
    /**
     * Find zero or one UserReview that matches the filter.
     * @param {UserReviewFindUniqueArgs} args - Arguments to find a UserReview
     * @example
     * // Get one UserReview
     * const userReview = await prisma.userReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserReviewFindUniqueArgs>(args: SelectSubset<T, UserReviewFindUniqueArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserReviewFindUniqueOrThrowArgs} args - Arguments to find a UserReview
     * @example
     * // Get one UserReview
     * const userReview = await prisma.userReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, UserReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewFindFirstArgs} args - Arguments to find a UserReview
     * @example
     * // Get one UserReview
     * const userReview = await prisma.userReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserReviewFindFirstArgs>(args?: SelectSubset<T, UserReviewFindFirstArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewFindFirstOrThrowArgs} args - Arguments to find a UserReview
     * @example
     * // Get one UserReview
     * const userReview = await prisma.userReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, UserReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserReviews
     * const userReviews = await prisma.userReview.findMany()
     * 
     * // Get first 10 UserReviews
     * const userReviews = await prisma.userReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userReviewWithIdOnly = await prisma.userReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserReviewFindManyArgs>(args?: SelectSubset<T, UserReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserReview.
     * @param {UserReviewCreateArgs} args - Arguments to create a UserReview.
     * @example
     * // Create one UserReview
     * const UserReview = await prisma.userReview.create({
     *   data: {
     *     // ... data to create a UserReview
     *   }
     * })
     * 
     */
    create<T extends UserReviewCreateArgs>(args: SelectSubset<T, UserReviewCreateArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserReviews.
     * @param {UserReviewCreateManyArgs} args - Arguments to create many UserReviews.
     * @example
     * // Create many UserReviews
     * const userReview = await prisma.userReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserReviewCreateManyArgs>(args?: SelectSubset<T, UserReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserReviews and returns the data saved in the database.
     * @param {UserReviewCreateManyAndReturnArgs} args - Arguments to create many UserReviews.
     * @example
     * // Create many UserReviews
     * const userReview = await prisma.userReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserReviews and only return the `id`
     * const userReviewWithIdOnly = await prisma.userReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, UserReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserReview.
     * @param {UserReviewDeleteArgs} args - Arguments to delete one UserReview.
     * @example
     * // Delete one UserReview
     * const UserReview = await prisma.userReview.delete({
     *   where: {
     *     // ... filter to delete one UserReview
     *   }
     * })
     * 
     */
    delete<T extends UserReviewDeleteArgs>(args: SelectSubset<T, UserReviewDeleteArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserReview.
     * @param {UserReviewUpdateArgs} args - Arguments to update one UserReview.
     * @example
     * // Update one UserReview
     * const userReview = await prisma.userReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserReviewUpdateArgs>(args: SelectSubset<T, UserReviewUpdateArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserReviews.
     * @param {UserReviewDeleteManyArgs} args - Arguments to filter UserReviews to delete.
     * @example
     * // Delete a few UserReviews
     * const { count } = await prisma.userReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserReviewDeleteManyArgs>(args?: SelectSubset<T, UserReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserReviews
     * const userReview = await prisma.userReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserReviewUpdateManyArgs>(args: SelectSubset<T, UserReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserReviews and returns the data updated in the database.
     * @param {UserReviewUpdateManyAndReturnArgs} args - Arguments to update many UserReviews.
     * @example
     * // Update many UserReviews
     * const userReview = await prisma.userReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserReviews and only return the `id`
     * const userReviewWithIdOnly = await prisma.userReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, UserReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserReview.
     * @param {UserReviewUpsertArgs} args - Arguments to update or create a UserReview.
     * @example
     * // Update or create a UserReview
     * const userReview = await prisma.userReview.upsert({
     *   create: {
     *     // ... data to create a UserReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserReview we want to update
     *   }
     * })
     */
    upsert<T extends UserReviewUpsertArgs>(args: SelectSubset<T, UserReviewUpsertArgs<ExtArgs>>): Prisma__UserReviewClient<$Result.GetResult<Prisma.$UserReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewCountArgs} args - Arguments to filter UserReviews to count.
     * @example
     * // Count the number of UserReviews
     * const count = await prisma.userReview.count({
     *   where: {
     *     // ... the filter for the UserReviews we want to count
     *   }
     * })
    **/
    count<T extends UserReviewCountArgs>(
      args?: Subset<T, UserReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserReviewAggregateArgs>(args: Subset<T, UserReviewAggregateArgs>): Prisma.PrismaPromise<GetUserReviewAggregateType<T>>

    /**
     * Group by UserReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserReviewGroupByArgs['orderBy'] }
        : { orderBy?: UserReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserReview model
   */
  readonly fields: UserReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserReview model
   */
  interface UserReviewFieldRefs {
    readonly id: FieldRef<"UserReview", 'Int'>
    readonly authorId: FieldRef<"UserReview", 'Int'>
    readonly reviewId: FieldRef<"UserReview", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserReview findUnique
   */
  export type UserReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReview to fetch.
     */
    where: UserReviewWhereUniqueInput
  }

  /**
   * UserReview findUniqueOrThrow
   */
  export type UserReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReview to fetch.
     */
    where: UserReviewWhereUniqueInput
  }

  /**
   * UserReview findFirst
   */
  export type UserReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReview to fetch.
     */
    where?: UserReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviews to fetch.
     */
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserReviews.
     */
    cursor?: UserReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserReviews.
     */
    distinct?: UserReviewScalarFieldEnum | UserReviewScalarFieldEnum[]
  }

  /**
   * UserReview findFirstOrThrow
   */
  export type UserReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReview to fetch.
     */
    where?: UserReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviews to fetch.
     */
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserReviews.
     */
    cursor?: UserReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserReviews.
     */
    distinct?: UserReviewScalarFieldEnum | UserReviewScalarFieldEnum[]
  }

  /**
   * UserReview findMany
   */
  export type UserReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserReviews to fetch.
     */
    where?: UserReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviews to fetch.
     */
    orderBy?: UserReviewOrderByWithRelationInput | UserReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserReviews.
     */
    cursor?: UserReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviews.
     */
    skip?: number
    distinct?: UserReviewScalarFieldEnum | UserReviewScalarFieldEnum[]
  }

  /**
   * UserReview create
   */
  export type UserReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a UserReview.
     */
    data: XOR<UserReviewCreateInput, UserReviewUncheckedCreateInput>
  }

  /**
   * UserReview createMany
   */
  export type UserReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserReviews.
     */
    data: UserReviewCreateManyInput | UserReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserReview createManyAndReturn
   */
  export type UserReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * The data used to create many UserReviews.
     */
    data: UserReviewCreateManyInput | UserReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserReview update
   */
  export type UserReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a UserReview.
     */
    data: XOR<UserReviewUpdateInput, UserReviewUncheckedUpdateInput>
    /**
     * Choose, which UserReview to update.
     */
    where: UserReviewWhereUniqueInput
  }

  /**
   * UserReview updateMany
   */
  export type UserReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserReviews.
     */
    data: XOR<UserReviewUpdateManyMutationInput, UserReviewUncheckedUpdateManyInput>
    /**
     * Filter which UserReviews to update
     */
    where?: UserReviewWhereInput
    /**
     * Limit how many UserReviews to update.
     */
    limit?: number
  }

  /**
   * UserReview updateManyAndReturn
   */
  export type UserReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * The data used to update UserReviews.
     */
    data: XOR<UserReviewUpdateManyMutationInput, UserReviewUncheckedUpdateManyInput>
    /**
     * Filter which UserReviews to update
     */
    where?: UserReviewWhereInput
    /**
     * Limit how many UserReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserReview upsert
   */
  export type UserReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the UserReview to update in case it exists.
     */
    where: UserReviewWhereUniqueInput
    /**
     * In case the UserReview found by the `where` argument doesn't exist, create a new UserReview with this data.
     */
    create: XOR<UserReviewCreateInput, UserReviewUncheckedCreateInput>
    /**
     * In case the UserReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserReviewUpdateInput, UserReviewUncheckedUpdateInput>
  }

  /**
   * UserReview delete
   */
  export type UserReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
    /**
     * Filter which UserReview to delete.
     */
    where: UserReviewWhereUniqueInput
  }

  /**
   * UserReview deleteMany
   */
  export type UserReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReviews to delete
     */
    where?: UserReviewWhereInput
    /**
     * Limit how many UserReviews to delete.
     */
    limit?: number
  }

  /**
   * UserReview without action
   */
  export type UserReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReview
     */
    select?: UserReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserReview
     */
    omit?: UserReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserReviewInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    text: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    text: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    text: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    text?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    text?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    text?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    text: string
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    CommentReview?: boolean | Comment$CommentReviewArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    text?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CommentReview?: boolean | Comment$CommentReviewArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      CommentReview: Prisma.$CommentReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CommentReview<T extends Comment$CommentReviewArgs<ExtArgs> = {}>(args?: Subset<T, Comment$CommentReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly text: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.CommentReview
   */
  export type Comment$CommentReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReview
     */
    select?: CommentReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReview
     */
    omit?: CommentReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReviewInclude<ExtArgs> | null
    where?: CommentReviewWhereInput
    orderBy?: CommentReviewOrderByWithRelationInput | CommentReviewOrderByWithRelationInput[]
    cursor?: CommentReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentReviewScalarFieldEnum | CommentReviewScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model CommentReview
   */

  export type AggregateCommentReview = {
    _count: CommentReviewCountAggregateOutputType | null
    _avg: CommentReviewAvgAggregateOutputType | null
    _sum: CommentReviewSumAggregateOutputType | null
    _min: CommentReviewMinAggregateOutputType | null
    _max: CommentReviewMaxAggregateOutputType | null
  }

  export type CommentReviewAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    commentId: number | null
  }

  export type CommentReviewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    commentId: number | null
  }

  export type CommentReviewMinAggregateOutputType = {
    id: number | null
    userId: number | null
    commentId: number | null
  }

  export type CommentReviewMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    commentId: number | null
  }

  export type CommentReviewCountAggregateOutputType = {
    id: number
    userId: number
    commentId: number
    _all: number
  }


  export type CommentReviewAvgAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
  }

  export type CommentReviewSumAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
  }

  export type CommentReviewMinAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
  }

  export type CommentReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
  }

  export type CommentReviewCountAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
    _all?: true
  }

  export type CommentReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentReview to aggregate.
     */
    where?: CommentReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReviews to fetch.
     */
    orderBy?: CommentReviewOrderByWithRelationInput | CommentReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentReviews
    **/
    _count?: true | CommentReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentReviewMaxAggregateInputType
  }

  export type GetCommentReviewAggregateType<T extends CommentReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentReview[P]>
      : GetScalarType<T[P], AggregateCommentReview[P]>
  }




  export type CommentReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentReviewWhereInput
    orderBy?: CommentReviewOrderByWithAggregationInput | CommentReviewOrderByWithAggregationInput[]
    by: CommentReviewScalarFieldEnum[] | CommentReviewScalarFieldEnum
    having?: CommentReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentReviewCountAggregateInputType | true
    _avg?: CommentReviewAvgAggregateInputType
    _sum?: CommentReviewSumAggregateInputType
    _min?: CommentReviewMinAggregateInputType
    _max?: CommentReviewMaxAggregateInputType
  }

  export type CommentReviewGroupByOutputType = {
    id: number
    userId: number
    commentId: number
    _count: CommentReviewCountAggregateOutputType | null
    _avg: CommentReviewAvgAggregateOutputType | null
    _sum: CommentReviewSumAggregateOutputType | null
    _min: CommentReviewMinAggregateOutputType | null
    _max: CommentReviewMaxAggregateOutputType | null
  }

  type GetCommentReviewGroupByPayload<T extends CommentReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentReviewGroupByOutputType[P]>
            : GetScalarType<T[P], CommentReviewGroupByOutputType[P]>
        }
      >
    >


  export type CommentReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    commentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentReview"]>

  export type CommentReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    commentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentReview"]>

  export type CommentReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    commentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentReview"]>

  export type CommentReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    commentId?: boolean
  }

  export type CommentReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "commentId", ExtArgs["result"]["commentReview"]>
  export type CommentReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type CommentReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type CommentReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }

  export type $CommentReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentReview"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comment: Prisma.$CommentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      commentId: number
    }, ExtArgs["result"]["commentReview"]>
    composites: {}
  }

  type CommentReviewGetPayload<S extends boolean | null | undefined | CommentReviewDefaultArgs> = $Result.GetResult<Prisma.$CommentReviewPayload, S>

  type CommentReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentReviewCountAggregateInputType | true
    }

  export interface CommentReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentReview'], meta: { name: 'CommentReview' } }
    /**
     * Find zero or one CommentReview that matches the filter.
     * @param {CommentReviewFindUniqueArgs} args - Arguments to find a CommentReview
     * @example
     * // Get one CommentReview
     * const commentReview = await prisma.commentReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentReviewFindUniqueArgs>(args: SelectSubset<T, CommentReviewFindUniqueArgs<ExtArgs>>): Prisma__CommentReviewClient<$Result.GetResult<Prisma.$CommentReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommentReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentReviewFindUniqueOrThrowArgs} args - Arguments to find a CommentReview
     * @example
     * // Get one CommentReview
     * const commentReview = await prisma.commentReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentReviewClient<$Result.GetResult<Prisma.$CommentReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReviewFindFirstArgs} args - Arguments to find a CommentReview
     * @example
     * // Get one CommentReview
     * const commentReview = await prisma.commentReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentReviewFindFirstArgs>(args?: SelectSubset<T, CommentReviewFindFirstArgs<ExtArgs>>): Prisma__CommentReviewClient<$Result.GetResult<Prisma.$CommentReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReviewFindFirstOrThrowArgs} args - Arguments to find a CommentReview
     * @example
     * // Get one CommentReview
     * const commentReview = await prisma.commentReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentReviewClient<$Result.GetResult<Prisma.$CommentReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommentReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentReviews
     * const commentReviews = await prisma.commentReview.findMany()
     * 
     * // Get first 10 CommentReviews
     * const commentReviews = await prisma.commentReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentReviewWithIdOnly = await prisma.commentReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentReviewFindManyArgs>(args?: SelectSubset<T, CommentReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommentReview.
     * @param {CommentReviewCreateArgs} args - Arguments to create a CommentReview.
     * @example
     * // Create one CommentReview
     * const CommentReview = await prisma.commentReview.create({
     *   data: {
     *     // ... data to create a CommentReview
     *   }
     * })
     * 
     */
    create<T extends CommentReviewCreateArgs>(args: SelectSubset<T, CommentReviewCreateArgs<ExtArgs>>): Prisma__CommentReviewClient<$Result.GetResult<Prisma.$CommentReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommentReviews.
     * @param {CommentReviewCreateManyArgs} args - Arguments to create many CommentReviews.
     * @example
     * // Create many CommentReviews
     * const commentReview = await prisma.commentReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentReviewCreateManyArgs>(args?: SelectSubset<T, CommentReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommentReviews and returns the data saved in the database.
     * @param {CommentReviewCreateManyAndReturnArgs} args - Arguments to create many CommentReviews.
     * @example
     * // Create many CommentReviews
     * const commentReview = await prisma.commentReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommentReviews and only return the `id`
     * const commentReviewWithIdOnly = await prisma.commentReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommentReview.
     * @param {CommentReviewDeleteArgs} args - Arguments to delete one CommentReview.
     * @example
     * // Delete one CommentReview
     * const CommentReview = await prisma.commentReview.delete({
     *   where: {
     *     // ... filter to delete one CommentReview
     *   }
     * })
     * 
     */
    delete<T extends CommentReviewDeleteArgs>(args: SelectSubset<T, CommentReviewDeleteArgs<ExtArgs>>): Prisma__CommentReviewClient<$Result.GetResult<Prisma.$CommentReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommentReview.
     * @param {CommentReviewUpdateArgs} args - Arguments to update one CommentReview.
     * @example
     * // Update one CommentReview
     * const commentReview = await prisma.commentReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentReviewUpdateArgs>(args: SelectSubset<T, CommentReviewUpdateArgs<ExtArgs>>): Prisma__CommentReviewClient<$Result.GetResult<Prisma.$CommentReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommentReviews.
     * @param {CommentReviewDeleteManyArgs} args - Arguments to filter CommentReviews to delete.
     * @example
     * // Delete a few CommentReviews
     * const { count } = await prisma.commentReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentReviewDeleteManyArgs>(args?: SelectSubset<T, CommentReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentReviews
     * const commentReview = await prisma.commentReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentReviewUpdateManyArgs>(args: SelectSubset<T, CommentReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentReviews and returns the data updated in the database.
     * @param {CommentReviewUpdateManyAndReturnArgs} args - Arguments to update many CommentReviews.
     * @example
     * // Update many CommentReviews
     * const commentReview = await prisma.commentReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommentReviews and only return the `id`
     * const commentReviewWithIdOnly = await prisma.commentReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommentReview.
     * @param {CommentReviewUpsertArgs} args - Arguments to update or create a CommentReview.
     * @example
     * // Update or create a CommentReview
     * const commentReview = await prisma.commentReview.upsert({
     *   create: {
     *     // ... data to create a CommentReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentReview we want to update
     *   }
     * })
     */
    upsert<T extends CommentReviewUpsertArgs>(args: SelectSubset<T, CommentReviewUpsertArgs<ExtArgs>>): Prisma__CommentReviewClient<$Result.GetResult<Prisma.$CommentReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommentReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReviewCountArgs} args - Arguments to filter CommentReviews to count.
     * @example
     * // Count the number of CommentReviews
     * const count = await prisma.commentReview.count({
     *   where: {
     *     // ... the filter for the CommentReviews we want to count
     *   }
     * })
    **/
    count<T extends CommentReviewCountArgs>(
      args?: Subset<T, CommentReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentReviewAggregateArgs>(args: Subset<T, CommentReviewAggregateArgs>): Prisma.PrismaPromise<GetCommentReviewAggregateType<T>>

    /**
     * Group by CommentReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentReviewGroupByArgs['orderBy'] }
        : { orderBy?: CommentReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentReview model
   */
  readonly fields: CommentReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comment<T extends CommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentDefaultArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommentReview model
   */
  interface CommentReviewFieldRefs {
    readonly id: FieldRef<"CommentReview", 'Int'>
    readonly userId: FieldRef<"CommentReview", 'Int'>
    readonly commentId: FieldRef<"CommentReview", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CommentReview findUnique
   */
  export type CommentReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReview
     */
    select?: CommentReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReview
     */
    omit?: CommentReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReviewInclude<ExtArgs> | null
    /**
     * Filter, which CommentReview to fetch.
     */
    where: CommentReviewWhereUniqueInput
  }

  /**
   * CommentReview findUniqueOrThrow
   */
  export type CommentReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReview
     */
    select?: CommentReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReview
     */
    omit?: CommentReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReviewInclude<ExtArgs> | null
    /**
     * Filter, which CommentReview to fetch.
     */
    where: CommentReviewWhereUniqueInput
  }

  /**
   * CommentReview findFirst
   */
  export type CommentReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReview
     */
    select?: CommentReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReview
     */
    omit?: CommentReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReviewInclude<ExtArgs> | null
    /**
     * Filter, which CommentReview to fetch.
     */
    where?: CommentReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReviews to fetch.
     */
    orderBy?: CommentReviewOrderByWithRelationInput | CommentReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentReviews.
     */
    cursor?: CommentReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentReviews.
     */
    distinct?: CommentReviewScalarFieldEnum | CommentReviewScalarFieldEnum[]
  }

  /**
   * CommentReview findFirstOrThrow
   */
  export type CommentReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReview
     */
    select?: CommentReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReview
     */
    omit?: CommentReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReviewInclude<ExtArgs> | null
    /**
     * Filter, which CommentReview to fetch.
     */
    where?: CommentReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReviews to fetch.
     */
    orderBy?: CommentReviewOrderByWithRelationInput | CommentReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentReviews.
     */
    cursor?: CommentReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentReviews.
     */
    distinct?: CommentReviewScalarFieldEnum | CommentReviewScalarFieldEnum[]
  }

  /**
   * CommentReview findMany
   */
  export type CommentReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReview
     */
    select?: CommentReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReview
     */
    omit?: CommentReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReviewInclude<ExtArgs> | null
    /**
     * Filter, which CommentReviews to fetch.
     */
    where?: CommentReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReviews to fetch.
     */
    orderBy?: CommentReviewOrderByWithRelationInput | CommentReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentReviews.
     */
    cursor?: CommentReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReviews.
     */
    skip?: number
    distinct?: CommentReviewScalarFieldEnum | CommentReviewScalarFieldEnum[]
  }

  /**
   * CommentReview create
   */
  export type CommentReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReview
     */
    select?: CommentReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReview
     */
    omit?: CommentReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a CommentReview.
     */
    data: XOR<CommentReviewCreateInput, CommentReviewUncheckedCreateInput>
  }

  /**
   * CommentReview createMany
   */
  export type CommentReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentReviews.
     */
    data: CommentReviewCreateManyInput | CommentReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommentReview createManyAndReturn
   */
  export type CommentReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReview
     */
    select?: CommentReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReview
     */
    omit?: CommentReviewOmit<ExtArgs> | null
    /**
     * The data used to create many CommentReviews.
     */
    data: CommentReviewCreateManyInput | CommentReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentReview update
   */
  export type CommentReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReview
     */
    select?: CommentReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReview
     */
    omit?: CommentReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a CommentReview.
     */
    data: XOR<CommentReviewUpdateInput, CommentReviewUncheckedUpdateInput>
    /**
     * Choose, which CommentReview to update.
     */
    where: CommentReviewWhereUniqueInput
  }

  /**
   * CommentReview updateMany
   */
  export type CommentReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentReviews.
     */
    data: XOR<CommentReviewUpdateManyMutationInput, CommentReviewUncheckedUpdateManyInput>
    /**
     * Filter which CommentReviews to update
     */
    where?: CommentReviewWhereInput
    /**
     * Limit how many CommentReviews to update.
     */
    limit?: number
  }

  /**
   * CommentReview updateManyAndReturn
   */
  export type CommentReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReview
     */
    select?: CommentReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReview
     */
    omit?: CommentReviewOmit<ExtArgs> | null
    /**
     * The data used to update CommentReviews.
     */
    data: XOR<CommentReviewUpdateManyMutationInput, CommentReviewUncheckedUpdateManyInput>
    /**
     * Filter which CommentReviews to update
     */
    where?: CommentReviewWhereInput
    /**
     * Limit how many CommentReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentReview upsert
   */
  export type CommentReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReview
     */
    select?: CommentReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReview
     */
    omit?: CommentReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the CommentReview to update in case it exists.
     */
    where: CommentReviewWhereUniqueInput
    /**
     * In case the CommentReview found by the `where` argument doesn't exist, create a new CommentReview with this data.
     */
    create: XOR<CommentReviewCreateInput, CommentReviewUncheckedCreateInput>
    /**
     * In case the CommentReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentReviewUpdateInput, CommentReviewUncheckedUpdateInput>
  }

  /**
   * CommentReview delete
   */
  export type CommentReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReview
     */
    select?: CommentReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReview
     */
    omit?: CommentReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReviewInclude<ExtArgs> | null
    /**
     * Filter which CommentReview to delete.
     */
    where: CommentReviewWhereUniqueInput
  }

  /**
   * CommentReview deleteMany
   */
  export type CommentReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentReviews to delete
     */
    where?: CommentReviewWhereInput
    /**
     * Limit how many CommentReviews to delete.
     */
    limit?: number
  }

  /**
   * CommentReview without action
   */
  export type CommentReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReview
     */
    select?: CommentReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentReview
     */
    omit?: CommentReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    hashPassword: 'hashPassword',
    avatar: 'avatar',
    role: 'role',
    currentHashedRefreshToken: 'currentHashedRefreshToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    title: 'title',
    preview: 'preview',
    category: 'category',
    text: 'text',
    isLaked: 'isLaked',
    isDislaked: 'isDislaked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const UserReviewScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    reviewId: 'reviewId'
  };

  export type UserReviewScalarFieldEnum = (typeof UserReviewScalarFieldEnum)[keyof typeof UserReviewScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    text: 'text'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const CommentReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    commentId: 'commentId'
  };

  export type CommentReviewScalarFieldEnum = (typeof CommentReviewScalarFieldEnum)[keyof typeof CommentReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    hashPassword?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    currentHashedRefreshToken?: StringNullableFilter<"User"> | string | null
    userAndReview?: UserReviewListRelationFilter
    CommentReview?: CommentReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    hashPassword?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    currentHashedRefreshToken?: SortOrderInput | SortOrder
    userAndReview?: UserReviewOrderByRelationAggregateInput
    CommentReview?: CommentReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hashPassword?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    currentHashedRefreshToken?: StringNullableFilter<"User"> | string | null
    userAndReview?: UserReviewListRelationFilter
    CommentReview?: CommentReviewListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    hashPassword?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    currentHashedRefreshToken?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    hashPassword?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    currentHashedRefreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    title?: StringFilter<"Review"> | string
    preview?: StringFilter<"Review"> | string
    category?: EnumCategoryFilter<"Review"> | $Enums.Category
    text?: StringFilter<"Review"> | string
    isLaked?: BoolFilter<"Review"> | boolean
    isDislaked?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    userAndReview?: UserReviewListRelationFilter
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    preview?: SortOrder
    category?: SortOrder
    text?: SortOrder
    isLaked?: SortOrder
    isDislaked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userAndReview?: UserReviewOrderByRelationAggregateInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    preview?: StringFilter<"Review"> | string
    category?: EnumCategoryFilter<"Review"> | $Enums.Category
    text?: StringFilter<"Review"> | string
    isLaked?: BoolFilter<"Review"> | boolean
    isDislaked?: BoolFilter<"Review"> | boolean
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    userAndReview?: UserReviewListRelationFilter
  }, "id" | "title">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    preview?: SortOrder
    category?: SortOrder
    text?: SortOrder
    isLaked?: SortOrder
    isDislaked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    title?: StringWithAggregatesFilter<"Review"> | string
    preview?: StringWithAggregatesFilter<"Review"> | string
    category?: EnumCategoryWithAggregatesFilter<"Review"> | $Enums.Category
    text?: StringWithAggregatesFilter<"Review"> | string
    isLaked?: BoolWithAggregatesFilter<"Review"> | boolean
    isDislaked?: BoolWithAggregatesFilter<"Review"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserReviewWhereInput = {
    AND?: UserReviewWhereInput | UserReviewWhereInput[]
    OR?: UserReviewWhereInput[]
    NOT?: UserReviewWhereInput | UserReviewWhereInput[]
    id?: IntFilter<"UserReview"> | number
    authorId?: IntFilter<"UserReview"> | number
    reviewId?: IntFilter<"UserReview"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type UserReviewOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    reviewId?: SortOrder
    user?: UserOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
  }

  export type UserReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserReviewWhereInput | UserReviewWhereInput[]
    OR?: UserReviewWhereInput[]
    NOT?: UserReviewWhereInput | UserReviewWhereInput[]
    authorId?: IntFilter<"UserReview"> | number
    reviewId?: IntFilter<"UserReview"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id">

  export type UserReviewOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    reviewId?: SortOrder
    _count?: UserReviewCountOrderByAggregateInput
    _avg?: UserReviewAvgOrderByAggregateInput
    _max?: UserReviewMaxOrderByAggregateInput
    _min?: UserReviewMinOrderByAggregateInput
    _sum?: UserReviewSumOrderByAggregateInput
  }

  export type UserReviewScalarWhereWithAggregatesInput = {
    AND?: UserReviewScalarWhereWithAggregatesInput | UserReviewScalarWhereWithAggregatesInput[]
    OR?: UserReviewScalarWhereWithAggregatesInput[]
    NOT?: UserReviewScalarWhereWithAggregatesInput | UserReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserReview"> | number
    authorId?: IntWithAggregatesFilter<"UserReview"> | number
    reviewId?: IntWithAggregatesFilter<"UserReview"> | number
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    text?: StringFilter<"Comment"> | string
    CommentReview?: CommentReviewListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    CommentReview?: CommentReviewOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    text?: StringFilter<"Comment"> | string
    CommentReview?: CommentReviewListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    text?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type CommentReviewWhereInput = {
    AND?: CommentReviewWhereInput | CommentReviewWhereInput[]
    OR?: CommentReviewWhereInput[]
    NOT?: CommentReviewWhereInput | CommentReviewWhereInput[]
    id?: IntFilter<"CommentReview"> | number
    userId?: IntFilter<"CommentReview"> | number
    commentId?: IntFilter<"CommentReview"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }

  export type CommentReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    user?: UserOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
  }

  export type CommentReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentReviewWhereInput | CommentReviewWhereInput[]
    OR?: CommentReviewWhereInput[]
    NOT?: CommentReviewWhereInput | CommentReviewWhereInput[]
    userId?: IntFilter<"CommentReview"> | number
    commentId?: IntFilter<"CommentReview"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }, "id">

  export type CommentReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    _count?: CommentReviewCountOrderByAggregateInput
    _avg?: CommentReviewAvgOrderByAggregateInput
    _max?: CommentReviewMaxOrderByAggregateInput
    _min?: CommentReviewMinOrderByAggregateInput
    _sum?: CommentReviewSumOrderByAggregateInput
  }

  export type CommentReviewScalarWhereWithAggregatesInput = {
    AND?: CommentReviewScalarWhereWithAggregatesInput | CommentReviewScalarWhereWithAggregatesInput[]
    OR?: CommentReviewScalarWhereWithAggregatesInput[]
    NOT?: CommentReviewScalarWhereWithAggregatesInput | CommentReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommentReview"> | number
    userId?: IntWithAggregatesFilter<"CommentReview"> | number
    commentId?: IntWithAggregatesFilter<"CommentReview"> | number
  }

  export type UserCreateInput = {
    email: string
    username: string
    hashPassword: string
    avatar: string
    role?: $Enums.Role
    currentHashedRefreshToken?: string | null
    userAndReview?: UserReviewCreateNestedManyWithoutUserInput
    CommentReview?: CommentReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    hashPassword: string
    avatar: string
    role?: $Enums.Role
    currentHashedRefreshToken?: string | null
    userAndReview?: UserReviewUncheckedCreateNestedManyWithoutUserInput
    CommentReview?: CommentReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashPassword?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    currentHashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userAndReview?: UserReviewUpdateManyWithoutUserNestedInput
    CommentReview?: CommentReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashPassword?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    currentHashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userAndReview?: UserReviewUncheckedUpdateManyWithoutUserNestedInput
    CommentReview?: CommentReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    hashPassword: string
    avatar: string
    role?: $Enums.Role
    currentHashedRefreshToken?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashPassword?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    currentHashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashPassword?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    currentHashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateInput = {
    title: string
    preview: string
    category: $Enums.Category
    text: string
    isLaked?: boolean
    isDislaked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userAndReview?: UserReviewCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    title: string
    preview: string
    category: $Enums.Category
    text: string
    isLaked?: boolean
    isDislaked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userAndReview?: UserReviewUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    preview?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    text?: StringFieldUpdateOperationsInput | string
    isLaked?: BoolFieldUpdateOperationsInput | boolean
    isDislaked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAndReview?: UserReviewUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    preview?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    text?: StringFieldUpdateOperationsInput | string
    isLaked?: BoolFieldUpdateOperationsInput | boolean
    isDislaked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAndReview?: UserReviewUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: number
    title: string
    preview: string
    category: $Enums.Category
    text: string
    isLaked?: boolean
    isDislaked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    preview?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    text?: StringFieldUpdateOperationsInput | string
    isLaked?: BoolFieldUpdateOperationsInput | boolean
    isDislaked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    preview?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    text?: StringFieldUpdateOperationsInput | string
    isLaked?: BoolFieldUpdateOperationsInput | boolean
    isDislaked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserReviewCreateInput = {
    user: UserCreateNestedOneWithoutUserAndReviewInput
    review: ReviewCreateNestedOneWithoutUserAndReviewInput
  }

  export type UserReviewUncheckedCreateInput = {
    id?: number
    authorId: number
    reviewId: number
  }

  export type UserReviewUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserAndReviewNestedInput
    review?: ReviewUpdateOneRequiredWithoutUserAndReviewNestedInput
  }

  export type UserReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    reviewId?: IntFieldUpdateOperationsInput | number
  }

  export type UserReviewCreateManyInput = {
    id?: number
    authorId: number
    reviewId: number
  }

  export type UserReviewUpdateManyMutationInput = {

  }

  export type UserReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    reviewId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateInput = {
    text: string
    CommentReview?: CommentReviewCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    text: string
    CommentReview?: CommentReviewUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    CommentReview?: CommentReviewUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    CommentReview?: CommentReviewUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: number
    text: string
  }

  export type CommentUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentReviewCreateInput = {
    user: UserCreateNestedOneWithoutCommentReviewInput
    comment: CommentCreateNestedOneWithoutCommentReviewInput
  }

  export type CommentReviewUncheckedCreateInput = {
    id?: number
    userId: number
    commentId: number
  }

  export type CommentReviewUpdateInput = {
    user?: UserUpdateOneRequiredWithoutCommentReviewNestedInput
    comment?: CommentUpdateOneRequiredWithoutCommentReviewNestedInput
  }

  export type CommentReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentReviewCreateManyInput = {
    id?: number
    userId: number
    commentId: number
  }

  export type CommentReviewUpdateManyMutationInput = {

  }

  export type CommentReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserReviewListRelationFilter = {
    every?: UserReviewWhereInput
    some?: UserReviewWhereInput
    none?: UserReviewWhereInput
  }

  export type CommentReviewListRelationFilter = {
    every?: CommentReviewWhereInput
    some?: CommentReviewWhereInput
    none?: CommentReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    hashPassword?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    currentHashedRefreshToken?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    hashPassword?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    currentHashedRefreshToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    hashPassword?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    currentHashedRefreshToken?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    preview?: SortOrder
    category?: SortOrder
    text?: SortOrder
    isLaked?: SortOrder
    isDislaked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    preview?: SortOrder
    category?: SortOrder
    text?: SortOrder
    isLaked?: SortOrder
    isDislaked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    preview?: SortOrder
    category?: SortOrder
    text?: SortOrder
    isLaked?: SortOrder
    isDislaked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type UserReviewCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    reviewId?: SortOrder
  }

  export type UserReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    reviewId?: SortOrder
  }

  export type UserReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    reviewId?: SortOrder
  }

  export type UserReviewMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    reviewId?: SortOrder
  }

  export type UserReviewSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    reviewId?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommentScalarRelationFilter = {
    is?: CommentWhereInput
    isNot?: CommentWhereInput
  }

  export type CommentReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type CommentReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type CommentReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type CommentReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type CommentReviewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type UserReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput> | UserReviewCreateWithoutUserInput[] | UserReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutUserInput | UserReviewCreateOrConnectWithoutUserInput[]
    createMany?: UserReviewCreateManyUserInputEnvelope
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
  }

  export type CommentReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentReviewCreateWithoutUserInput, CommentReviewUncheckedCreateWithoutUserInput> | CommentReviewCreateWithoutUserInput[] | CommentReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReviewCreateOrConnectWithoutUserInput | CommentReviewCreateOrConnectWithoutUserInput[]
    createMany?: CommentReviewCreateManyUserInputEnvelope
    connect?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
  }

  export type UserReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput> | UserReviewCreateWithoutUserInput[] | UserReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutUserInput | UserReviewCreateOrConnectWithoutUserInput[]
    createMany?: UserReviewCreateManyUserInputEnvelope
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
  }

  export type CommentReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentReviewCreateWithoutUserInput, CommentReviewUncheckedCreateWithoutUserInput> | CommentReviewCreateWithoutUserInput[] | CommentReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReviewCreateOrConnectWithoutUserInput | CommentReviewCreateOrConnectWithoutUserInput[]
    createMany?: CommentReviewCreateManyUserInputEnvelope
    connect?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput> | UserReviewCreateWithoutUserInput[] | UserReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutUserInput | UserReviewCreateOrConnectWithoutUserInput[]
    upsert?: UserReviewUpsertWithWhereUniqueWithoutUserInput | UserReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserReviewCreateManyUserInputEnvelope
    set?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    disconnect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    delete?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    update?: UserReviewUpdateWithWhereUniqueWithoutUserInput | UserReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserReviewUpdateManyWithWhereWithoutUserInput | UserReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
  }

  export type CommentReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentReviewCreateWithoutUserInput, CommentReviewUncheckedCreateWithoutUserInput> | CommentReviewCreateWithoutUserInput[] | CommentReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReviewCreateOrConnectWithoutUserInput | CommentReviewCreateOrConnectWithoutUserInput[]
    upsert?: CommentReviewUpsertWithWhereUniqueWithoutUserInput | CommentReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentReviewCreateManyUserInputEnvelope
    set?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    disconnect?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    delete?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    connect?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    update?: CommentReviewUpdateWithWhereUniqueWithoutUserInput | CommentReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentReviewUpdateManyWithWhereWithoutUserInput | CommentReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentReviewScalarWhereInput | CommentReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput> | UserReviewCreateWithoutUserInput[] | UserReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutUserInput | UserReviewCreateOrConnectWithoutUserInput[]
    upsert?: UserReviewUpsertWithWhereUniqueWithoutUserInput | UserReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserReviewCreateManyUserInputEnvelope
    set?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    disconnect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    delete?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    update?: UserReviewUpdateWithWhereUniqueWithoutUserInput | UserReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserReviewUpdateManyWithWhereWithoutUserInput | UserReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
  }

  export type CommentReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentReviewCreateWithoutUserInput, CommentReviewUncheckedCreateWithoutUserInput> | CommentReviewCreateWithoutUserInput[] | CommentReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReviewCreateOrConnectWithoutUserInput | CommentReviewCreateOrConnectWithoutUserInput[]
    upsert?: CommentReviewUpsertWithWhereUniqueWithoutUserInput | CommentReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentReviewCreateManyUserInputEnvelope
    set?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    disconnect?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    delete?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    connect?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    update?: CommentReviewUpdateWithWhereUniqueWithoutUserInput | CommentReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentReviewUpdateManyWithWhereWithoutUserInput | CommentReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentReviewScalarWhereInput | CommentReviewScalarWhereInput[]
  }

  export type UserReviewCreateNestedManyWithoutReviewInput = {
    create?: XOR<UserReviewCreateWithoutReviewInput, UserReviewUncheckedCreateWithoutReviewInput> | UserReviewCreateWithoutReviewInput[] | UserReviewUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutReviewInput | UserReviewCreateOrConnectWithoutReviewInput[]
    createMany?: UserReviewCreateManyReviewInputEnvelope
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
  }

  export type UserReviewUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<UserReviewCreateWithoutReviewInput, UserReviewUncheckedCreateWithoutReviewInput> | UserReviewCreateWithoutReviewInput[] | UserReviewUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutReviewInput | UserReviewCreateOrConnectWithoutReviewInput[]
    createMany?: UserReviewCreateManyReviewInputEnvelope
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserReviewUpdateManyWithoutReviewNestedInput = {
    create?: XOR<UserReviewCreateWithoutReviewInput, UserReviewUncheckedCreateWithoutReviewInput> | UserReviewCreateWithoutReviewInput[] | UserReviewUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutReviewInput | UserReviewCreateOrConnectWithoutReviewInput[]
    upsert?: UserReviewUpsertWithWhereUniqueWithoutReviewInput | UserReviewUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: UserReviewCreateManyReviewInputEnvelope
    set?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    disconnect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    delete?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    update?: UserReviewUpdateWithWhereUniqueWithoutReviewInput | UserReviewUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: UserReviewUpdateManyWithWhereWithoutReviewInput | UserReviewUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
  }

  export type UserReviewUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<UserReviewCreateWithoutReviewInput, UserReviewUncheckedCreateWithoutReviewInput> | UserReviewCreateWithoutReviewInput[] | UserReviewUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: UserReviewCreateOrConnectWithoutReviewInput | UserReviewCreateOrConnectWithoutReviewInput[]
    upsert?: UserReviewUpsertWithWhereUniqueWithoutReviewInput | UserReviewUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: UserReviewCreateManyReviewInputEnvelope
    set?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    disconnect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    delete?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    connect?: UserReviewWhereUniqueInput | UserReviewWhereUniqueInput[]
    update?: UserReviewUpdateWithWhereUniqueWithoutReviewInput | UserReviewUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: UserReviewUpdateManyWithWhereWithoutReviewInput | UserReviewUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserAndReviewInput = {
    create?: XOR<UserCreateWithoutUserAndReviewInput, UserUncheckedCreateWithoutUserAndReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAndReviewInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutUserAndReviewInput = {
    create?: XOR<ReviewCreateWithoutUserAndReviewInput, ReviewUncheckedCreateWithoutUserAndReviewInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutUserAndReviewInput
    connect?: ReviewWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserAndReviewNestedInput = {
    create?: XOR<UserCreateWithoutUserAndReviewInput, UserUncheckedCreateWithoutUserAndReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAndReviewInput
    upsert?: UserUpsertWithoutUserAndReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAndReviewInput, UserUpdateWithoutUserAndReviewInput>, UserUncheckedUpdateWithoutUserAndReviewInput>
  }

  export type ReviewUpdateOneRequiredWithoutUserAndReviewNestedInput = {
    create?: XOR<ReviewCreateWithoutUserAndReviewInput, ReviewUncheckedCreateWithoutUserAndReviewInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutUserAndReviewInput
    upsert?: ReviewUpsertWithoutUserAndReviewInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutUserAndReviewInput, ReviewUpdateWithoutUserAndReviewInput>, ReviewUncheckedUpdateWithoutUserAndReviewInput>
  }

  export type CommentReviewCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentReviewCreateWithoutCommentInput, CommentReviewUncheckedCreateWithoutCommentInput> | CommentReviewCreateWithoutCommentInput[] | CommentReviewUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReviewCreateOrConnectWithoutCommentInput | CommentReviewCreateOrConnectWithoutCommentInput[]
    createMany?: CommentReviewCreateManyCommentInputEnvelope
    connect?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
  }

  export type CommentReviewUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentReviewCreateWithoutCommentInput, CommentReviewUncheckedCreateWithoutCommentInput> | CommentReviewCreateWithoutCommentInput[] | CommentReviewUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReviewCreateOrConnectWithoutCommentInput | CommentReviewCreateOrConnectWithoutCommentInput[]
    createMany?: CommentReviewCreateManyCommentInputEnvelope
    connect?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
  }

  export type CommentReviewUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentReviewCreateWithoutCommentInput, CommentReviewUncheckedCreateWithoutCommentInput> | CommentReviewCreateWithoutCommentInput[] | CommentReviewUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReviewCreateOrConnectWithoutCommentInput | CommentReviewCreateOrConnectWithoutCommentInput[]
    upsert?: CommentReviewUpsertWithWhereUniqueWithoutCommentInput | CommentReviewUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentReviewCreateManyCommentInputEnvelope
    set?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    disconnect?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    delete?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    connect?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    update?: CommentReviewUpdateWithWhereUniqueWithoutCommentInput | CommentReviewUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentReviewUpdateManyWithWhereWithoutCommentInput | CommentReviewUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentReviewScalarWhereInput | CommentReviewScalarWhereInput[]
  }

  export type CommentReviewUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentReviewCreateWithoutCommentInput, CommentReviewUncheckedCreateWithoutCommentInput> | CommentReviewCreateWithoutCommentInput[] | CommentReviewUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReviewCreateOrConnectWithoutCommentInput | CommentReviewCreateOrConnectWithoutCommentInput[]
    upsert?: CommentReviewUpsertWithWhereUniqueWithoutCommentInput | CommentReviewUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentReviewCreateManyCommentInputEnvelope
    set?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    disconnect?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    delete?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    connect?: CommentReviewWhereUniqueInput | CommentReviewWhereUniqueInput[]
    update?: CommentReviewUpdateWithWhereUniqueWithoutCommentInput | CommentReviewUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentReviewUpdateManyWithWhereWithoutCommentInput | CommentReviewUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentReviewScalarWhereInput | CommentReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentReviewInput = {
    create?: XOR<UserCreateWithoutCommentReviewInput, UserUncheckedCreateWithoutCommentReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentReviewInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutCommentReviewInput = {
    create?: XOR<CommentCreateWithoutCommentReviewInput, CommentUncheckedCreateWithoutCommentReviewInput>
    connectOrCreate?: CommentCreateOrConnectWithoutCommentReviewInput
    connect?: CommentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentReviewNestedInput = {
    create?: XOR<UserCreateWithoutCommentReviewInput, UserUncheckedCreateWithoutCommentReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentReviewInput
    upsert?: UserUpsertWithoutCommentReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentReviewInput, UserUpdateWithoutCommentReviewInput>, UserUncheckedUpdateWithoutCommentReviewInput>
  }

  export type CommentUpdateOneRequiredWithoutCommentReviewNestedInput = {
    create?: XOR<CommentCreateWithoutCommentReviewInput, CommentUncheckedCreateWithoutCommentReviewInput>
    connectOrCreate?: CommentCreateOrConnectWithoutCommentReviewInput
    upsert?: CommentUpsertWithoutCommentReviewInput
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutCommentReviewInput, CommentUpdateWithoutCommentReviewInput>, CommentUncheckedUpdateWithoutCommentReviewInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserReviewCreateWithoutUserInput = {
    review: ReviewCreateNestedOneWithoutUserAndReviewInput
  }

  export type UserReviewUncheckedCreateWithoutUserInput = {
    id?: number
    reviewId: number
  }

  export type UserReviewCreateOrConnectWithoutUserInput = {
    where: UserReviewWhereUniqueInput
    create: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput>
  }

  export type UserReviewCreateManyUserInputEnvelope = {
    data: UserReviewCreateManyUserInput | UserReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentReviewCreateWithoutUserInput = {
    comment: CommentCreateNestedOneWithoutCommentReviewInput
  }

  export type CommentReviewUncheckedCreateWithoutUserInput = {
    id?: number
    commentId: number
  }

  export type CommentReviewCreateOrConnectWithoutUserInput = {
    where: CommentReviewWhereUniqueInput
    create: XOR<CommentReviewCreateWithoutUserInput, CommentReviewUncheckedCreateWithoutUserInput>
  }

  export type CommentReviewCreateManyUserInputEnvelope = {
    data: CommentReviewCreateManyUserInput | CommentReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: UserReviewWhereUniqueInput
    update: XOR<UserReviewUpdateWithoutUserInput, UserReviewUncheckedUpdateWithoutUserInput>
    create: XOR<UserReviewCreateWithoutUserInput, UserReviewUncheckedCreateWithoutUserInput>
  }

  export type UserReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: UserReviewWhereUniqueInput
    data: XOR<UserReviewUpdateWithoutUserInput, UserReviewUncheckedUpdateWithoutUserInput>
  }

  export type UserReviewUpdateManyWithWhereWithoutUserInput = {
    where: UserReviewScalarWhereInput
    data: XOR<UserReviewUpdateManyMutationInput, UserReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type UserReviewScalarWhereInput = {
    AND?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
    OR?: UserReviewScalarWhereInput[]
    NOT?: UserReviewScalarWhereInput | UserReviewScalarWhereInput[]
    id?: IntFilter<"UserReview"> | number
    authorId?: IntFilter<"UserReview"> | number
    reviewId?: IntFilter<"UserReview"> | number
  }

  export type CommentReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentReviewWhereUniqueInput
    update: XOR<CommentReviewUpdateWithoutUserInput, CommentReviewUncheckedUpdateWithoutUserInput>
    create: XOR<CommentReviewCreateWithoutUserInput, CommentReviewUncheckedCreateWithoutUserInput>
  }

  export type CommentReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentReviewWhereUniqueInput
    data: XOR<CommentReviewUpdateWithoutUserInput, CommentReviewUncheckedUpdateWithoutUserInput>
  }

  export type CommentReviewUpdateManyWithWhereWithoutUserInput = {
    where: CommentReviewScalarWhereInput
    data: XOR<CommentReviewUpdateManyMutationInput, CommentReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentReviewScalarWhereInput = {
    AND?: CommentReviewScalarWhereInput | CommentReviewScalarWhereInput[]
    OR?: CommentReviewScalarWhereInput[]
    NOT?: CommentReviewScalarWhereInput | CommentReviewScalarWhereInput[]
    id?: IntFilter<"CommentReview"> | number
    userId?: IntFilter<"CommentReview"> | number
    commentId?: IntFilter<"CommentReview"> | number
  }

  export type UserReviewCreateWithoutReviewInput = {
    user: UserCreateNestedOneWithoutUserAndReviewInput
  }

  export type UserReviewUncheckedCreateWithoutReviewInput = {
    id?: number
    authorId: number
  }

  export type UserReviewCreateOrConnectWithoutReviewInput = {
    where: UserReviewWhereUniqueInput
    create: XOR<UserReviewCreateWithoutReviewInput, UserReviewUncheckedCreateWithoutReviewInput>
  }

  export type UserReviewCreateManyReviewInputEnvelope = {
    data: UserReviewCreateManyReviewInput | UserReviewCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type UserReviewUpsertWithWhereUniqueWithoutReviewInput = {
    where: UserReviewWhereUniqueInput
    update: XOR<UserReviewUpdateWithoutReviewInput, UserReviewUncheckedUpdateWithoutReviewInput>
    create: XOR<UserReviewCreateWithoutReviewInput, UserReviewUncheckedCreateWithoutReviewInput>
  }

  export type UserReviewUpdateWithWhereUniqueWithoutReviewInput = {
    where: UserReviewWhereUniqueInput
    data: XOR<UserReviewUpdateWithoutReviewInput, UserReviewUncheckedUpdateWithoutReviewInput>
  }

  export type UserReviewUpdateManyWithWhereWithoutReviewInput = {
    where: UserReviewScalarWhereInput
    data: XOR<UserReviewUpdateManyMutationInput, UserReviewUncheckedUpdateManyWithoutReviewInput>
  }

  export type UserCreateWithoutUserAndReviewInput = {
    email: string
    username: string
    hashPassword: string
    avatar: string
    role?: $Enums.Role
    currentHashedRefreshToken?: string | null
    CommentReview?: CommentReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserAndReviewInput = {
    id?: number
    email: string
    username: string
    hashPassword: string
    avatar: string
    role?: $Enums.Role
    currentHashedRefreshToken?: string | null
    CommentReview?: CommentReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserAndReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAndReviewInput, UserUncheckedCreateWithoutUserAndReviewInput>
  }

  export type ReviewCreateWithoutUserAndReviewInput = {
    title: string
    preview: string
    category: $Enums.Category
    text: string
    isLaked?: boolean
    isDislaked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUncheckedCreateWithoutUserAndReviewInput = {
    id?: number
    title: string
    preview: string
    category: $Enums.Category
    text: string
    isLaked?: boolean
    isDislaked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserAndReviewInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserAndReviewInput, ReviewUncheckedCreateWithoutUserAndReviewInput>
  }

  export type UserUpsertWithoutUserAndReviewInput = {
    update: XOR<UserUpdateWithoutUserAndReviewInput, UserUncheckedUpdateWithoutUserAndReviewInput>
    create: XOR<UserCreateWithoutUserAndReviewInput, UserUncheckedCreateWithoutUserAndReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAndReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAndReviewInput, UserUncheckedUpdateWithoutUserAndReviewInput>
  }

  export type UserUpdateWithoutUserAndReviewInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashPassword?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    currentHashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    CommentReview?: CommentReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAndReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashPassword?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    currentHashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    CommentReview?: CommentReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewUpsertWithoutUserAndReviewInput = {
    update: XOR<ReviewUpdateWithoutUserAndReviewInput, ReviewUncheckedUpdateWithoutUserAndReviewInput>
    create: XOR<ReviewCreateWithoutUserAndReviewInput, ReviewUncheckedCreateWithoutUserAndReviewInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutUserAndReviewInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutUserAndReviewInput, ReviewUncheckedUpdateWithoutUserAndReviewInput>
  }

  export type ReviewUpdateWithoutUserAndReviewInput = {
    title?: StringFieldUpdateOperationsInput | string
    preview?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    text?: StringFieldUpdateOperationsInput | string
    isLaked?: BoolFieldUpdateOperationsInput | boolean
    isDislaked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateWithoutUserAndReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    preview?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    text?: StringFieldUpdateOperationsInput | string
    isLaked?: BoolFieldUpdateOperationsInput | boolean
    isDislaked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReviewCreateWithoutCommentInput = {
    user: UserCreateNestedOneWithoutCommentReviewInput
  }

  export type CommentReviewUncheckedCreateWithoutCommentInput = {
    id?: number
    userId: number
  }

  export type CommentReviewCreateOrConnectWithoutCommentInput = {
    where: CommentReviewWhereUniqueInput
    create: XOR<CommentReviewCreateWithoutCommentInput, CommentReviewUncheckedCreateWithoutCommentInput>
  }

  export type CommentReviewCreateManyCommentInputEnvelope = {
    data: CommentReviewCreateManyCommentInput | CommentReviewCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type CommentReviewUpsertWithWhereUniqueWithoutCommentInput = {
    where: CommentReviewWhereUniqueInput
    update: XOR<CommentReviewUpdateWithoutCommentInput, CommentReviewUncheckedUpdateWithoutCommentInput>
    create: XOR<CommentReviewCreateWithoutCommentInput, CommentReviewUncheckedCreateWithoutCommentInput>
  }

  export type CommentReviewUpdateWithWhereUniqueWithoutCommentInput = {
    where: CommentReviewWhereUniqueInput
    data: XOR<CommentReviewUpdateWithoutCommentInput, CommentReviewUncheckedUpdateWithoutCommentInput>
  }

  export type CommentReviewUpdateManyWithWhereWithoutCommentInput = {
    where: CommentReviewScalarWhereInput
    data: XOR<CommentReviewUpdateManyMutationInput, CommentReviewUncheckedUpdateManyWithoutCommentInput>
  }

  export type UserCreateWithoutCommentReviewInput = {
    email: string
    username: string
    hashPassword: string
    avatar: string
    role?: $Enums.Role
    currentHashedRefreshToken?: string | null
    userAndReview?: UserReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentReviewInput = {
    id?: number
    email: string
    username: string
    hashPassword: string
    avatar: string
    role?: $Enums.Role
    currentHashedRefreshToken?: string | null
    userAndReview?: UserReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentReviewInput, UserUncheckedCreateWithoutCommentReviewInput>
  }

  export type CommentCreateWithoutCommentReviewInput = {
    text: string
  }

  export type CommentUncheckedCreateWithoutCommentReviewInput = {
    id?: number
    text: string
  }

  export type CommentCreateOrConnectWithoutCommentReviewInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCommentReviewInput, CommentUncheckedCreateWithoutCommentReviewInput>
  }

  export type UserUpsertWithoutCommentReviewInput = {
    update: XOR<UserUpdateWithoutCommentReviewInput, UserUncheckedUpdateWithoutCommentReviewInput>
    create: XOR<UserCreateWithoutCommentReviewInput, UserUncheckedCreateWithoutCommentReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentReviewInput, UserUncheckedUpdateWithoutCommentReviewInput>
  }

  export type UserUpdateWithoutCommentReviewInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashPassword?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    currentHashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userAndReview?: UserReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    hashPassword?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    currentHashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userAndReview?: UserReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithoutCommentReviewInput = {
    update: XOR<CommentUpdateWithoutCommentReviewInput, CommentUncheckedUpdateWithoutCommentReviewInput>
    create: XOR<CommentCreateWithoutCommentReviewInput, CommentUncheckedCreateWithoutCommentReviewInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutCommentReviewInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutCommentReviewInput, CommentUncheckedUpdateWithoutCommentReviewInput>
  }

  export type CommentUpdateWithoutCommentReviewInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateWithoutCommentReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type UserReviewCreateManyUserInput = {
    id?: number
    reviewId: number
  }

  export type CommentReviewCreateManyUserInput = {
    id?: number
    commentId: number
  }

  export type UserReviewUpdateWithoutUserInput = {
    review?: ReviewUpdateOneRequiredWithoutUserAndReviewNestedInput
  }

  export type UserReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: IntFieldUpdateOperationsInput | number
  }

  export type UserReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentReviewUpdateWithoutUserInput = {
    comment?: CommentUpdateOneRequiredWithoutCommentReviewNestedInput
  }

  export type CommentReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type UserReviewCreateManyReviewInput = {
    id?: number
    authorId: number
  }

  export type UserReviewUpdateWithoutReviewInput = {
    user?: UserUpdateOneRequiredWithoutUserAndReviewNestedInput
  }

  export type UserReviewUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type UserReviewUncheckedUpdateManyWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentReviewCreateManyCommentInput = {
    id?: number
    userId: number
  }

  export type CommentReviewUpdateWithoutCommentInput = {
    user?: UserUpdateOneRequiredWithoutCommentReviewNestedInput
  }

  export type CommentReviewUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentReviewUncheckedUpdateManyWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}