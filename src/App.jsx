import { useContext } from "react";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = () => {
  // Context内のisAdminと更新関数の取得
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  // 切り替え押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {/* 三項演算子 */}
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin}></Card>
    </div>
  );
};
