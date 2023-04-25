export { };

declare global {
  type GlobalType = [boolean, string, number];

  interface GlobalInf {
    a: string;
    b: string;
  }

  const enum GlobalEnum {
    a = "enum_a",
    b = "enum_b",
  }

}
