# DirectID Home Assessment

This project is a sophisticated demonstration of incorporating infinite scroll functionality for handling large data tables and internationalization in a React application. The project architecture adheres to the atomic design pattern, ensuring optimal scalability and maintainability.

## Key Features

- **Infinite Scrolling**: The application leverages the `react-infinite-scroll-component` library to implement infinite scrolling for extensive data tables. This feature ensures efficient loading and rendering of large datasets.

- **Internationalization**: The application utilizes the `react-i18next` library for internationalization, enabling easy translation of the application into various languages.

- **Atomic Design Pattern**: The project structure adheres to the atomic design pattern. This approach aids in organizing components in a manner that enhances reusability and maintainability.

- **Testing**: The application incorporates testing using Jest and the React Testing Library. This measure ensures code reliability, facilitates easier maintenance, and aids in debugging.

## Installation

Follow these steps to install the application:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
   
```console
git clone git@github.com:stormchaser33/DirectID_Home_Assessment.git
cd DirectId_Home_Assessment
npm install
```
## Usage

To initiate the application, navigate to the project directory and run `npm start`. The application will subsequently launch and can be accessed at `http://localhost:3000`.

```console
npm start
```

## Localization

This project employs `react-i18next` for internationalization. To add or modify translations, edit the translation files located in the `locales` folder. Each language should have its own file, and the keys in each file should correspond to the text elements in the application.
