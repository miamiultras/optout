# RSpack + Module Federation Micro Frontends

This project demonstrates the use of RSpack with Module Federation to create micro frontends.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Micro frontends architecture allows you to break down a frontend application into smaller, manageable pieces. This project uses RSpack and Module Federation to implement micro frontends.

## Features

- **Modular Architecture**: Break down your frontend into smaller, manageable modules.
- **RSpack Integration**: Utilize the power of RSpack for efficient bundling.
- **Module Federation**: Share code between different micro frontends seamlessly.

## Installation

```
npm install
```

## Usage

To run the project locally for the host or remotes, navigate to the appropriate directory and use the following command:
```
npm start
```

You can start the host and remotes separately. Changes in the remotes will be reflected in their components in the host at runtime through runtime linking.

This will start the development server and you can view the application in your browser.


This will start the development server and you can view the application in your browser.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.