import React, {useState, PropsWithChildren} from "react";

interface AuthContextProps {
  userName: string;
  isLoggedIn: boolean;
  changeUser: (data: string) => void;
}

const AuthContextData: AuthContextProps = {
  userName: "",
  isLoggedIn: false,
  changeUser: () => undefined
};

const AuthContext = React.createContext(AuthContextData);

export const ProvideAuthContext: React.FC<PropsWithChildren<{}>> = ({
  children
}: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<string>("dineshj");

  const changeUser = (data: string) => {
    setUser(data);
  };

  const context = {
    userName: user,
    isLoggedIn: true,
    changeUser
  };
  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthContext;
