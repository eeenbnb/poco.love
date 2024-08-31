import type { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("react-component", {
    description: "新しいコンポーネントを作ります",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component名の入力",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{pascalCase name}}/index.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "src/{{pascalCase name}}/styles.module.scss",
        templateFile: "templates/styles.hbs",
      },
      {
        type: "append",
        path: "src/index.ts",
        template:
          'export { {{pascalCase name}} } from "./{{pascalCase name}}";',
      },
    ],
  });
}
