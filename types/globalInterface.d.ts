export { };

declare global {
  type GlobalType = [boolean, string, number];

  interface UserInfoInf {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    isLogin: boolean;
  }

  interface GlobalInf {
    a: string;
    b: string;
  }

  const enum GlobalEnum {
    a = "enum_a",
    b = "enum_b",
  }


}
