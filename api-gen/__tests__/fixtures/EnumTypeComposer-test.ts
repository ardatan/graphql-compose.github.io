import TSClassParser from '../../TSClassParser';
import MarkdownGenerator from '../../MarkdownGenerator';

const file = 'api-gen/__tests__/fixtures/EnumTypeComposer.d.ts';

it('markdown TypeStorage.d.ts', () => {
  const data = TSClassParser.parseFile(file);
  expect(MarkdownGenerator.generate(data.classData, data.interfaces)).toMatchInlineSnapshot(`
"---
id: EnumTypeComposer
title: EnumTypeComposer
---

<!-- 
🛑🛑🛑
DO NOT EDIT THIS FILE!
IT WAS AUTOGENERATED FROM d.ts FILE
🛑🛑🛑
If you want to make changes in this file, please do it via
https://github.com/graphql-compose/graphql-compose/blob/master/src/EnumTypeComposer.d.ts
-->

## Static methods

### static create()

\`\`\`js
static create<TCtx = any>(
  typeDef: EnumTypeComposeDefinition,
  schemaComposer: SchemaComposer<TCtx>
): EnumTypeComposer<TCtx>
\`\`\`

### static createTemp()

\`\`\`js
static createTemp<TCtx = any>(
  typeDef: EnumTypeComposeDefinition,
  schemaComposer: SchemaComposer<TCtx>
): EnumTypeComposer<TCtx>
\`\`\`

## Properties

### schemaComposer

\`\`\`js
schemaComposer: SchemaComposer<TContext>;
\`\`\`

## Methods

### hasField()

\`\`\`js
hasField(
  name: string
): boolean
\`\`\`

### getFields()

\`\`\`js
getFields(): GraphQLEnumValueConfigMap
\`\`\`

### getField()

\`\`\`js
getField(
  name: string
): GraphQLEnumValueConfig
\`\`\`

### getFieldNames()

\`\`\`js
getFieldNames(): string[]
\`\`\`

### setFields()

\`\`\`js
setFields(
  values: GraphQLEnumValueConfigMap
): this
\`\`\`

### setField()

\`\`\`js
setField(
  name: string,
  valueConfig: GraphQLEnumValueConfig
): this
\`\`\`

### addFields()

\`\`\`js
addFields(
  newValues: GraphQLEnumValueConfigMap
): this
\`\`\`

### removeField()

\`\`\`js
removeField(
  nameOrArray: string | string[]
): this
\`\`\`

### removeOtherFields()

\`\`\`js
removeOtherFields(
  fieldNameOrArray: string | string[]
): this
\`\`\`

### reorderFields()

\`\`\`js
reorderFields(
  names: string[]
): this
\`\`\`

### extendField()

\`\`\`js
extendField(
  name: string,
  partialValueConfig: Partial<GraphQLEnumValueConfig>
): this
\`\`\`

### deprecateFields()

\`\`\`js
deprecateFields(
  fields: {
      [fieldName: string]: string;
  } | string[] | string
): this
\`\`\`

### getExtensions()

\`\`\`js
getExtensions(): Extensions
\`\`\`

### setExtensions()

\`\`\`js
setExtensions(
  extensions: Extensions
): this
\`\`\`

### extendExtensions()

\`\`\`js
extendExtensions(
  extensions: Extensions
): this
\`\`\`

### clearExtensions()

\`\`\`js
clearExtensions(): this
\`\`\`

### getExtension()

\`\`\`js
getExtension(
  extensionName: string
): any
\`\`\`

### hasExtension()

\`\`\`js
hasExtension(
  extensionName: string
): boolean
\`\`\`

### setExtension()

\`\`\`js
setExtension(
  extensionName: string,
  value: any
): this
\`\`\`

### removeExtension()

\`\`\`js
removeExtension(
  extensionName: string
): this
\`\`\`

### getType()

\`\`\`js
getType(): GraphQLEnumType
\`\`\`

### getTypePlural()

\`\`\`js
getTypePlural(): GraphQLList<GraphQLEnumType>
\`\`\`

### getTypeNonNull()

\`\`\`js
getTypeNonNull(): GraphQLNonNull<GraphQLEnumType>
\`\`\`

### getTypeName()

\`\`\`js
getTypeName(): string
\`\`\`

### setTypeName()

\`\`\`js
setTypeName(
  name: string
): this
\`\`\`

### getDescription()

\`\`\`js
getDescription(): string
\`\`\`

### setDescription()

\`\`\`js
setDescription(
  description: string
): this
\`\`\`

### clone()

\`\`\`js
clone(
  newTypeName: string
): EnumTypeComposer<TContext>
\`\`\`

## Internal type definitions

### ComposeEnumTypeConfig

\`\`\`js
export type ComposeEnumTypeConfig = GraphQLEnumTypeConfig & {
  extensions?: Extensions;
};
\`\`\`

### EnumTypeComposeDefinition

\`\`\`js
export type EnumTypeComposeDefinition = TypeAsString | ComposeEnumTypeConfig | GraphQLEnumType;
\`\`\`

### GraphQLEnumTypeExtended

\`\`\`js
export type GraphQLEnumTypeExtended = GraphQLEnumType & {
  _gqcExtensions?: Extensions;
};
\`\`\`
"
`);
});

it('parse EnumTypeComposer.d.ts', () => {
  expect(TSClassParser.parseFile(file)).toMatchInlineSnapshot(`
Object {
  "classData": Object {
    "constructors": Array [
      Object {
        "documentation": "",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "gqType",
            "type": "GraphQLEnumType",
            "typeChecker": "any",
          },
          Object {
            "documentation": "",
            "name": "schemaComposer",
            "type": "SchemaComposer<TContext>",
            "typeChecker": "any",
          },
        ],
        "type": "EnumTypeComposer<TContext>",
      },
    ],
    "documentation": "",
    "methods": Array [
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "hasField",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "name",
            "type": "string",
            "typeChecker": "string",
          },
        ],
        "type": "boolean",
        "typeChecker": "(name: string) => boolean",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "getFields",
        "parameters": Array [],
        "type": "GraphQLEnumValueConfigMap",
        "typeChecker": "() => GraphQLEnumValueConfigMap",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "getField",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "name",
            "type": "string",
            "typeChecker": "string",
          },
        ],
        "type": "GraphQLEnumValueConfig",
        "typeChecker": "(name: string) => GraphQLEnumValueConfig",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "getFieldNames",
        "parameters": Array [],
        "type": "string[]",
        "typeChecker": "() => string[]",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "setFields",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "values",
            "type": "GraphQLEnumValueConfigMap",
            "typeChecker": "GraphQLEnumValueConfigMap",
          },
        ],
        "type": "this",
        "typeChecker": "(values: GraphQLEnumValueConfigMap) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "setField",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "name",
            "type": "string",
            "typeChecker": "string",
          },
          Object {
            "documentation": "",
            "name": "valueConfig",
            "type": "GraphQLEnumValueConfig",
            "typeChecker": "GraphQLEnumValueConfig",
          },
        ],
        "type": "this",
        "typeChecker": "(name: string, valueConfig: GraphQLEnumValueConfig) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "addFields",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "newValues",
            "type": "GraphQLEnumValueConfigMap",
            "typeChecker": "GraphQLEnumValueConfigMap",
          },
        ],
        "type": "this",
        "typeChecker": "(newValues: GraphQLEnumValueConfigMap) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "removeField",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "nameOrArray",
            "type": "string | string[]",
            "typeChecker": "string | string[]",
          },
        ],
        "type": "this",
        "typeChecker": "(nameOrArray: string | string[]) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "removeOtherFields",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "fieldNameOrArray",
            "type": "string | string[]",
            "typeChecker": "string | string[]",
          },
        ],
        "type": "this",
        "typeChecker": "(fieldNameOrArray: string | string[]) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "reorderFields",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "names",
            "type": "string[]",
            "typeChecker": "string[]",
          },
        ],
        "type": "this",
        "typeChecker": "(names: string[]) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "extendField",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "name",
            "type": "string",
            "typeChecker": "string",
          },
          Object {
            "documentation": "",
            "name": "partialValueConfig",
            "type": "Partial<GraphQLEnumValueConfig>",
            "typeChecker": "Partial<GraphQLEnumValueConfig>",
          },
        ],
        "type": "this",
        "typeChecker": "(name: string, partialValueConfig: Partial<GraphQLEnumValueConfig>) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "deprecateFields",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "fields",
            "type": "{
    [fieldName: string]: string;
} | string[] | string",
            "typeChecker": "string | string[] | { [fieldName: string]: string; }",
          },
        ],
        "type": "this",
        "typeChecker": "(fields: string | string[] | { [fieldName: string]: string; }) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "getExtensions",
        "parameters": Array [],
        "type": "Extensions",
        "typeChecker": "() => any",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "setExtensions",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "extensions",
            "type": "Extensions",
            "typeChecker": "any",
          },
        ],
        "type": "this",
        "typeChecker": "(extensions: any) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "extendExtensions",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "extensions",
            "type": "Extensions",
            "typeChecker": "any",
          },
        ],
        "type": "this",
        "typeChecker": "(extensions: any) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "clearExtensions",
        "parameters": Array [],
        "type": "this",
        "typeChecker": "() => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "getExtension",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "extensionName",
            "type": "string",
            "typeChecker": "string",
          },
        ],
        "type": "any",
        "typeChecker": "(extensionName: string) => any",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "hasExtension",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "extensionName",
            "type": "string",
            "typeChecker": "string",
          },
        ],
        "type": "boolean",
        "typeChecker": "(extensionName: string) => boolean",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "setExtension",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "extensionName",
            "type": "string",
            "typeChecker": "string",
          },
          Object {
            "documentation": "",
            "name": "value",
            "type": "any",
            "typeChecker": "any",
          },
        ],
        "type": "this",
        "typeChecker": "(extensionName: string, value: any) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "removeExtension",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "extensionName",
            "type": "string",
            "typeChecker": "string",
          },
        ],
        "type": "this",
        "typeChecker": "(extensionName: string) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "getType",
        "parameters": Array [],
        "type": "GraphQLEnumType",
        "typeChecker": "() => any",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "getTypePlural",
        "parameters": Array [],
        "type": "GraphQLList<GraphQLEnumType>",
        "typeChecker": "() => any",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "getTypeNonNull",
        "parameters": Array [],
        "type": "GraphQLNonNull<GraphQLEnumType>",
        "typeChecker": "() => any",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "getTypeName",
        "parameters": Array [],
        "type": "string",
        "typeChecker": "() => string",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "setTypeName",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "name",
            "type": "string",
            "typeChecker": "string",
          },
        ],
        "type": "this",
        "typeChecker": "(name: string) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "getDescription",
        "parameters": Array [],
        "type": "string",
        "typeChecker": "() => string",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "setDescription",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "description",
            "type": "string",
            "typeChecker": "string",
          },
        ],
        "type": "this",
        "typeChecker": "(description: string) => this",
      },
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "clone",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "newTypeName",
            "type": "string",
            "typeChecker": "string",
          },
        ],
        "type": "EnumTypeComposer<TContext>",
        "typeChecker": "(newTypeName: string) => EnumTypeComposer<TContext>",
      },
    ],
    "name": "EnumTypeComposer",
    "properties": Array [
      Object {
        "documentation": "",
        "flags": Object {},
        "name": "schemaComposer",
        "type": "SchemaComposer<TContext>",
        "typeChecker": "any",
      },
      Object {
        "documentation": "",
        "flags": Object {
          "protected": true,
        },
        "name": "gqType",
        "type": "GraphQLEnumTypeExtended",
        "typeChecker": "any",
      },
    ],
    "staticMethods": Array [
      Object {
        "documentation": "",
        "flags": Object {
          "static": true,
        },
        "generics": "<TCtx = any>",
        "name": "create",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "typeDef",
            "type": "EnumTypeComposeDefinition",
            "typeChecker": "any",
          },
          Object {
            "documentation": "",
            "name": "schemaComposer",
            "type": "SchemaComposer<TCtx>",
            "typeChecker": "any",
          },
        ],
        "type": "EnumTypeComposer<TCtx>",
        "typeChecker": "<TCtx = any>(typeDef: any, schemaComposer: any) => EnumTypeComposer<TCtx>",
      },
      Object {
        "documentation": "",
        "flags": Object {
          "static": true,
        },
        "generics": "<TCtx = any>",
        "name": "createTemp",
        "parameters": Array [
          Object {
            "documentation": "",
            "name": "typeDef",
            "type": "EnumTypeComposeDefinition",
            "typeChecker": "any",
          },
          Object {
            "documentation": "",
            "name": "schemaComposer",
            "type": "SchemaComposer<TCtx>",
            "typeChecker": "any",
          },
        ],
        "type": "EnumTypeComposer<TCtx>",
        "typeChecker": "<TCtx = any>(typeDef: any, schemaComposer?: any) => EnumTypeComposer<TCtx>",
      },
    ],
    "staticProperties": Array [],
    "type": "",
    "typeChecker": "typeof EnumTypeComposer",
  },
  "interfaces": Array [
    Object {
      "code": "

export type ComposeEnumTypeConfig = GraphQLEnumTypeConfig & {
  extensions?: Extensions;
};",
      "name": " ComposeEnumTypeConfig",
    },
    Object {
      "code": "

export type EnumTypeComposeDefinition = TypeAsString | ComposeEnumTypeConfig | GraphQLEnumType;",
      "name": " EnumTypeComposeDefinition",
    },
    Object {
      "code": "

export type GraphQLEnumTypeExtended = GraphQLEnumType & {
  _gqcExtensions?: Extensions;
};",
      "name": " GraphQLEnumTypeExtended",
    },
  ],
}
`);
});
