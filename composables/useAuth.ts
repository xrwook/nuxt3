import { useUserInfo } from "@/stores/userInfo";
const userInfo = useUserInfo();

export const useAuth = () => {
  const login = async (
    username: string = "kminchelle",
    password: string = "0lelplR"
  ): Promise<UserInfoInf> => {
    const { data, error } = await useFetchApi2("/auth/login", {
      method: "post",
      body: {
        username: username,
        password: password,
      },
    });
    const user: UserInfoInf = data.value as UserInfoInf;
    user.isLogin = true;
    return user;
  };

  const logout = async () => {
    // const { data, error } = await useFetchApi2("/auth/logout", {
    //   method: "post",
    // });
    const logout: UserInfoInf = {
      id: 0,
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      gender: "",
      isLogin: false,
    };
    userInfo.setUserInfo(logout);
  };

  return {
    login,
    logout,
  };
};
