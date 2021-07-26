export const firstToUppercase = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const joinPaths = (...paths: string[]) => {
  const newPath = paths.map((path) => path.replaceAll("/", "")).join("/");
  const firstChar = paths[0][0];
  return firstChar === "/" ? `/${newPath}` : newPath;
};

export const downloadString = (string: string, filename: string, datatype = "application/json") => {
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    `data:${datatype};charset=utf-8,${encodeURIComponent(string)}`
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
