import TSClassParser from '../../TSClassParser';
import MarkdownGenerator from '../../MarkdownGenerator';

const file = 'api-gen/__tests__/fixtures/TypeStorage.d.ts';

it('markdown TypeStorage.d.ts', () => {
  const data = TSClassParser.parseFile(file);
  expect(MarkdownGenerator.generate(data.classData, data.interfaces)).toMatchInlineSnapshot(`
"---
id: TypeStorage
title: TypeStorage
---

<!-- 
🛑🛑🛑
DO NOT EDIT THIS FILE!
IT WAS AUTOGENERATED FROM d.ts FILE
🛑🛑🛑
If you want to make changes in this file, please do it via
https://github.com/graphql-compose/graphql-compose/blob/master/src/TypeStorage.d.ts
-->

This is TypeStorage class
Helps to create any type
[Go TO](http://graphql.org)

## Static properties

### static statProperty

\`\`\`js
static statProperty: boolean;
\`\`\`

## Static methods

### static findMany()

\`\`\`js
static findMany(
  q: any
): string[]
\`\`\`

## Properties

### types

\`\`\`js
types: Map<K, V>;
\`\`\`

### size

\`\`\`js
readonly size: number;
\`\`\`

## Methods

### clear()

\`\`\`js
clear(): void
\`\`\`

### delete()

\`\`\`js
delete(
  key: K
): boolean
\`\`\`

### entries()

\`\`\`js
entries(): Iterator<[K, V]>
\`\`\`

### forEach()

\`\`\`js
forEach(
  callbackfn: (value: V, index: K, map: Map<K, V>) => any,
  thisArg: any
): void
\`\`\`

### get()

\`\`\`js
get(
  key: K
): V
\`\`\`

### has()

\`\`\`js
has(
  key: K
): boolean
\`\`\`

### keys()

\`\`\`js
keys(): Iterator<K>
\`\`\`

### set()

\`\`\`js
set(
  key: K,
  value: V
): this
\`\`\`

Set value to storage

### values()

\`\`\`js
values(): Iterator<V>
\`\`\`

### add()

\`\`\`js
add(
  value: V
): string | null
\`\`\`

## Custom methods

### hasInstance()

\`\`\`js
hasInstance(
  key: K,
  ClassObj: any
): boolean
\`\`\`

Ok

### getOrSet()

\`\`\`js
getOrSet(
  key: K,
  typeOrThunk: V | (() => V)
): V
\`\`\`
"
`);
});

it('parse TypeStorage.d.ts', () => {
  expect(TSClassParser.parseFile(file)).toMatchInlineSnapshot(`
Object {
  "classData": Object {
    "constructors": Array [
      Object {
        "documentation": "",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "test",
            "type": "boolean",
            "typeChecker": "boolean",
          },
        ],
        "type": "TypeStorage<K, V>",
      },
    ],
    "documentation": "This is TypeStorage class
Helps to create any type
[Go TO](http://graphql.org)",
    "methods": Array [
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "clear",
        "parameters": Array [],
        "type": "void",
        "typeChecker": "() => void",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "delete",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "key",
            "type": "K",
            "typeChecker": "K",
          },
        ],
        "type": "boolean",
        "typeChecker": "(key: K) => boolean",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "entries",
        "parameters": Array [],
        "type": "Iterator<[K, V]>",
        "typeChecker": "() => Iterator<[K, V]>",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "forEach",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "callbackfn",
            "type": "(value: V, index: K, map: Map<K, V>) => any",
            "typeChecker": "(value: V, index: K, map: Map<K, V>) => any",
          },
          Object {
            "documentation": "",
            "name": "thisArg",
            "type": "any",
            "typeChecker": "any",
          },
        ],
        "type": "void",
        "typeChecker": "(callbackfn: (value: V, index: K, map: Map<K, V>) => any, thisArg?: any) => void",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "get",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "key",
            "type": "K",
            "typeChecker": "K",
          },
        ],
        "type": "V",
        "typeChecker": "(key: K) => V",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "has",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "key",
            "type": "K",
            "typeChecker": "K",
          },
        ],
        "type": "boolean",
        "typeChecker": "(key: K) => boolean",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "keys",
        "parameters": Array [],
        "type": "Iterator<K>",
        "typeChecker": "() => Iterator<K>",
      },
      Object {
        "documentation": "Set value to storage",
        "flags": Object {},
        "name": "set",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "key",
            "type": "K",
            "typeChecker": "K",
          },
          Object {
            "documentation": "",
            "name": "value",
            "type": "V",
            "typeChecker": "V",
          },
        ],
        "type": "this",
        "typeChecker": "(key: K, value: V) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "values",
        "parameters": Array [],
        "type": "Iterator<V>",
        "typeChecker": "() => Iterator<V>",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "add",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "value",
            "type": "V",
            "typeChecker": "V",
          },
        ],
        "type": "string | null",
        "typeChecker": "(value: V) => string",
      },
      Object {
        "documentation": "-----------------------------------------------
Custom methods
-----------------------------------------------
Ok",
        "flags": Object {},
        "name": "hasInstance",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "key",
            "type": "K",
            "typeChecker": "K",
          },
          Object {
            "documentation": "",
            "name": "ClassObj",
            "type": "any",
            "typeChecker": "any",
          },
        ],
        "type": "boolean",
        "typeChecker": "(key: K, ClassObj: any) => boolean",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "getOrSet",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "key",
            "type": "K",
            "typeChecker": "K",
          },
          Object {
            "documentation": "",
            "name": "typeOrThunk",
            "type": "V | (() => V)",
            "typeChecker": "V | (() => V)",
          },
        ],
        "type": "V",
        "typeChecker": "(key: K, typeOrThunk: V | (() => V)) => V",
      },
    ],
    "name": "TypeStorage",
    "properties": Array [
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "types",
        "type": "Map<K, V>",
        "typeChecker": "Map<K, V>",
      },
      Object {
        "documentation": "",
        "flags": Object {
          "readonly": true,
        },
        "name": "size",
        "type": "number",
        "typeChecker": "number",
      },
      Object {
        "documentation": "",
        "flags": Object {
          "protected": true,
        },
        "name": "prot",
        "type": "number",
        "typeChecker": "number",
      },
      Object {
        "documentation": "",
        "flags": Object {
          "private": true,
        },
        "name": "priv",
        "type": "number",
        "typeChecker": "number",
      },
    ],
    "staticMethods": Array [
      Object {
        "documentation": "",
        "flags": Object {
          "static": true,
        },
        "name": "findMany",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "q",
            "type": "any",
            "typeChecker": "any",
          },
        ],
        "type": "string[]",
        "typeChecker": "(q: any) => string[]",
      },
    ],
    "staticProperties": Array [
      Object {
        "documentation": "",
        "flags": Object {
          "static": true,
        },
        "name": "statProperty",
        "type": "boolean",
        "typeChecker": "boolean",
      },
    ],
    "type": "",
    "typeChecker": "typeof TypeStorage",
  },
  "interfaces": Array [],
}
`);
});
