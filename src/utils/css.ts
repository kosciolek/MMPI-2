export const variant =
  <PROPS extends unknown>(prop: PROPS[keyof PROPS], propName?: keyof PROPS) =>
  (propsInner: PROPS) =>
    // @ts-ignore
    propsInner[propName || "variant"] === prop ? "&" : "&.__NEVER";

export const iif =
  <PROPS extends unknown, PROP_NAME extends keyof PROPS>(prop: PROP_NAME, val?: PROPS[PROP_NAME]) =>
  (propsInner: PROPS) => {
    if (val !== undefined) return propsInner[prop] === val ? "&" : "&.__NEVER";
    return propsInner[prop] ? "&" : "&.__NEVER";
  };
