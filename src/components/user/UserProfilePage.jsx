import UserInfo from "./UserInfo";
import OrderHistoryItemContainer from "./OrderHistoryItemContainer";
import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";
import api from "../../api";

const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [orderitems, setOrderitems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const res = await api.get("user_info");
        console.log(res.data);
        setUserInfo(res.data);
        setOrderitems(res.data.items || []); // fallback to empty array
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <Spinner loading={loading} />;

  return (
    <div className="container my-5">
      {/* Profile Header */}
      <UserInfo userInfo={userInfo} />

      {/* Order History */}
      <OrderHistoryItemContainer orderitems={orderitems} />
    </div>
  );
};

export default UserProfilePage;
