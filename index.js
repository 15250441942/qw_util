const parseTransform = (str, key) => {
  const regex = new RegExp(`${key}\\([^)]+\\)`);
  const d = str.match(regex);
  if (!d && d[0]) {
    return false;
  }
  return d[0].replace(new RegExp(`[${key}(|)|\\s]`, "g"), "").split(",");
};

export { parseTransform };
