# npm-package-reader
Simple library for read and parse `package.json` files.

## Install

```bash
npm i npm-package-reader
```


# API

+ **[readPackage](#readpackage)** - Asynchronous function to read and parse `package.json`.
+ **[readPackageSync](#readpackagesync)** - Synchronous function to read and parse `package.json`.

# Usage

## readPackage
#### `readPackage(cwd?: string): Promise<IPackageJson | false>`

> **NOTE**: This function reads the `package.json` file asynchronously from the specified directory (default is the current working directory).

```ts
import { readPackage } from 'npm-package-reader';

async function getPackageData() {
  const data = await readPackage(); // Reads from the current working directory
  console.log(data);
}

getPackageData();
```

## readPackageSync
### `readPackageSync(cwd?: string): IPackageJson | false`

> **NOTE**: This function reads the `package.json` file synchronously from the specified directory (default is the current working directory).

```ts
import { readPackageSync } from 'npm-package-reader';

function getPackageDataSync() {
  const data = readPackageSync(); // Reads from the current working directory
  console.log(data);
}

getPackageDataSync();
```