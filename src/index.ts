import { promises as fsPromises, readFileSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { IPackageJson } from "./package-json";

const toPath = (urlOrPath: URL | string): string => urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath;

const getPackagePath = (cwd: string) => resolve(toPath(cwd) ?? '.', 'package.json');

export const readPackage = async (cwd = process.cwd()): Promise<IPackageJson> => {
	const packageFile = await fsPromises.readFile(getPackagePath(cwd), { encoding: 'utf8' });
	return JSON.parse(packageFile);
}

export const readPackageSync = (cwd = process.cwd()): IPackageJson => {
	const packageFile = readFileSync(getPackagePath(cwd), 'utf8');
	return JSON.parse(packageFile);
}
