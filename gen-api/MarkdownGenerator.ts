import { ClassData, ClassMethodData, ClassPropertyData, InterfaceData } from './TSClassParser';
import { trim, prettifyReturnType } from './utils';

export default class MarkdownGenerator {
  static generate(data: ClassData, interfaces?: InterfaceData[]) {
    let m = '';

    m += MarkdownGenerator.generateHeader(data);
    m += MarkdownGenerator.generateStaticProperties(data.staticProperties);
    m += MarkdownGenerator.generateStaticMethods(data.staticMethods);
    m += MarkdownGenerator.generateProperties(data.properties);
    m += MarkdownGenerator.generateMethods(data.methods);
    m += MarkdownGenerator.generateTypeDefinitions(interfaces);

    m = trim(m) + '\n';

    return m;
  }

  static generateHeader(data: ClassData) {
    let m = '';

    m += '---\n';
    m += `id: ${data.name}\n`;
    m += `title: ${data.name}\n`;
    m += `custom_edit_url: https://github.com/graphql-compose/graphql-compose/blob/master/src/${
      data.name
    }.d.ts\n`;
    m += '---\n\n';

    m += `<!-- 
🛑🛑🛑
DO NOT EDIT THIS FILE!
IT WAS AUTOGENERATED FROM d.ts FILE
🛑🛑🛑
If you want to make changes in this file, please do it via
https://github.com/graphql-compose/graphql-compose/blob/master/src/${data.name}.d.ts
-->\n\n`;

    if (data.documentation) {
      m += `${trim(data.documentation)}\n\n`;
    }

    return m;
  }

  static generateStaticProperties(staticProperties: ClassPropertyData[]): string {
    let m = '';

    if (!staticProperties || staticProperties.length === 0) return m;

    m += '## Static properties\n\n';

    staticProperties.forEach((property) => {
      if (!MarkdownGenerator.isPublic(property)) return;
      m += `### static ${property.name}\n\n`;
      m += MarkdownGenerator.createPropertyCodeSnippet(property) + '\n\n';
      if (property.documentation) {
        m += trim(property.documentation) + '\n\n';
      }
    });

    return m;
  }

  static generateStaticMethods(staticMethods: ClassMethodData[]): string {
    let m = '';

    if (!staticMethods || staticMethods.length === 0) return m;

    m += '## Static methods\n\n';

    staticMethods.forEach((method) => {
      if (!MarkdownGenerator.isPublic(method)) return;
      m += `### static ${method.name}()\n\n`;
      m += MarkdownGenerator.createMethodCodeSnippet(method) + '\n\n';
      if (method.documentation) {
        m += trim(method.documentation) + '\n\n';
      }
    });

    return m;
  }

  static generateProperties(properties: ClassPropertyData[]): string {
    let m = '';

    if (!properties || properties.length === 0) return m;

    m += '## Properties\n\n';

    properties.forEach((property) => {
      if (!MarkdownGenerator.isPublic(property)) return;
      m += `### ${property.name}\n\n`;
      m += MarkdownGenerator.createPropertyCodeSnippet(property) + '\n\n';
      if (property.documentation) {
        m += trim(property.documentation) + '\n\n';
      }
    });

    return m;
  }

  static generateMethods(methods: ClassMethodData[]): string {
    let m = '';

    if (!methods || methods.length === 0) return m;

    let prevSection = '';

    methods.forEach((method) => {
      const { documentation, section, sectionDoc } = MarkdownGenerator.parseSectionAndDocs(
        method.documentation,
        prevSection || 'Methods'
      );

      if (prevSection !== section) {
        prevSection = section;
        m += `## ${section}\n\n`;

        if (sectionDoc) {
          m += sectionDoc + '\n\n';
        }
      }

      if (!MarkdownGenerator.isPublic(method)) return;
      m += `### ${method.name}()\n\n`;
      m += MarkdownGenerator.createMethodCodeSnippet(method) + '\n\n';
      if (documentation) {
        m += trim(documentation) + '\n\n';
      }
    });

    return m;
  }

  static generateTypeDefinitions(interfaces?: InterfaceData[]): string {
    let m = '';

    if (!interfaces || interfaces.length === 0) return m;

    m += '## Internal type definitions\n\n';

    interfaces.forEach((iface) => {
      m += `### ${trim(iface.name)}\n\n`;
      m += '```js\n';
      m += `${trim(iface.code)}\n`;
      m += '```\n\n';
    });

    return m;
  }

  static isPublic(method: ClassMethodData | ClassPropertyData) {
    if (method.flags) {
      if (method.flags.private) return false;
      if (method.flags.protected) return false;
    }
    return true;
  }

  static createMethodCodeSnippet(method: ClassMethodData): string {
    let m = '';
    m += '```js\n';

    // method name
    if (method.flags) {
      if (method.flags.static) m += 'static ';
      if (method.flags.private) m += 'private ';
      if (method.flags.protected) m += 'protected ';
      if (method.flags.readonly) m += 'readonly ';
    }
    m += `${method.name}${method.generics || ''}(`;

    // params
    if (method.parameters && method.parameters.length > 0) {
      m += '\n';
      method.parameters.forEach((param, i, a) => {
        if (param.documentation) {
          if (i > 0) m += '\n';
          m += `  // ${param.documentation.replace(/\n/g, '\n  // ')}\n`;
        }
        m += `  ${param.name}: ${param.type.replace(/\n/g, '\n  ')}`;
        if (i < a.length - 1) m += ',';
        m += '\n';
      });
    }

    // close
    m += `):${prettifyReturnType(method.type)}\n`;
    m += '```\n';

    return m;
  }

  static createPropertyCodeSnippet(property: ClassPropertyData): string {
    let m = '';
    m += '```js\n';

    // method name
    if (property.flags) {
      if (property.flags.static) m += 'static ';
      if (property.flags.private) m += 'private ';
      if (property.flags.protected) m += 'protected ';
      if (property.flags.readonly) m += 'readonly ';
    }
    m += `${property.name}:${prettifyReturnType(property.type)};\n`;
    m += '```\n';

    return m;
  }

  static parseSectionAndDocs(str: string = '', defaultSection: string = 'Methods') {
    let section = '';
    let sectionDoc = '';

    if (str) {
      const re = /(-----[-]+\n([^\n]+)([\s\S]*)\n-----[-]+)((.|[\r\n])*)$/im;
      const found = str.match(re);
      if (found) {
        section = found![2] || '';
        sectionDoc = found![3] || '';
        str = found![4] || '';
      }
    }

    return {
      section: trim(section) || defaultSection,
      sectionDoc: trim(sectionDoc),
      documentation: trim(str),
    };
  }
}
