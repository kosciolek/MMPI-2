export const firstToUppercase = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const joinPaths = (...paths: string[]) => {
  const newPath = paths.map((path) => path.replaceAll("/", "")).join("/");
  const firstChar = paths[0][0];
  return firstChar === "/" ? `/${newPath}` : newPath;
};
