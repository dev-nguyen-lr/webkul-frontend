# WEBKUL ADMIN FRONTEND

webkul管理システム

## Local Development

```shell script

## 用意
npm i


## 起動
npm run dev
```

### Recommended VSCode Settings

To ensure consistent formatting and linting, install the following VSCode extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Make sure to enable formatting on save:

1. Open the VSCode command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
2. Search for "Preferences: Open Settings (JSON)".
3. Add the following settings:
   ```json
   {
     "explorer.confirmDelete": false,
     "git.replaceTagsWhenPull": true,
     "editor.tabSize": 2,
     "editor.formatOnSave": false,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": "explicit"
     },
     "eslint.validate": ["javascript", "typescript"],
     "[javascript]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "[typescript]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },
     "javascript.updateImportsOnFileMove.enabled": "never",
     "typescript.updateImportsOnFileMove.enabled": "always"
   }
   ```

### Components

#### icons

This folder contains all the **SVG** icons used throughout the project. By centralizing icons into a dedicated folder, we ensure easy management, reuse, and scalability of icons across the application.

Using **SVG (Scalable Vector Graphics)** for icons has several advantages:

- **Scalability**: SVGs are vector-based, meaning they can scale to any size without losing quality, ensuring your icons look crisp on any screen resolution.
- **Customizable**: SVGs allow for easy customization through CSS, including changing the color, size, and even animation.
- **Performance**: SVGs are lightweight and do not require HTTP requests like images, improving page load times.

---

#### Molecules

**Molecules** are components made by combining **Atoms** (simple UI elements like buttons, input fields, etc.). They form a meaningful block in the interface that can perform specific functions, but they are still relatively simple and reusable.
Molecules provide the structure for larger components while maintaining a single responsibility. For example, a **FormInput** component that combines a label and an input field, or a **SearchBar** that has both an input field and a button.

#### Examples of Molecules:

- **FormInput**: A combination of a label and an input field.
- **Card**: A small UI block that might contain an image, title, and description.
- **SearchBar**: A text input and a search button combined to handle search functionality.

---

#### template

**Templates** are high-level components responsible for arranging **Atoms** and **Molecules** into a cohesive layout. They do not deal with the actual content of the page but focus on how different UI elements (such as Molecules and Atoms) are organized.

#### Examples of Templates:

1. **HeaderTemplate**: A template layout for the header of the website, containing navigation links, a logo, and possibly a search bar.
2. **DashboardTemplate**: A dashboard layout, typically consisting of a sidebar for navigation and a main content area.
3. **PageTemplate**: A general layout for any page, typically containing a header, footer, and main content section.

---

#### atom

**Atoms** are the basic building blocks of the UI. They represent the smallest possible components, such as buttons, inputs, labels, or icons. Atoms should be simple, reusable, and independent of the rest of the system.

##### Examples of Atoms:

- **Button**: A simple button component with different styles.
- **InputField**: A basic text input element.
- **Label**: A text label for form elements.
