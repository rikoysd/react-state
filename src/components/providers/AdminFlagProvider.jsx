import { createContext, useState } from "react";

// Contextの器作成
export const AdminFlagContext = createContext({});

// providerの作成
export const AdminFlagProvider = (props) => {
  //
  const { children } = props;

  // 管理者フラグ
  const [isAdmin, setIsAdmin] = useState(false);

  // valueの中にグローバルに管理する値を渡す
  // AdminFlagContextの中にproviderがあるので、それでchildrenを囲む
  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  );
};
