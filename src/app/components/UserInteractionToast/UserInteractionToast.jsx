import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const UserInteractionToast = () => {
  const [toastInfo, setToastInfo] = useState({
   name: "Jeanne",
   urlIcon : "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
  });

  useEffect(() => {
    if (toastInfo) {
      toast(`${toastInfo.name} vient de poser un pixel 🤖`, {
       position: "top-right",
       autoClose: 1000,
       hideProgressBar: true,
       closeOnClick: true,
      });
    }
  }, [toast]);

  //   {
  //     id: 1,
  //     username: "John",
  //     userIcon:
  //       "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
  //   },
  //   {
  //     id: 2,
  //     username: "Jeanne",
  //     userIcon:
  //       "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
  //   },
  //   {
  //     id: 3,
  //     username: "Jeannot",
  //     userIcon:
  //       "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
  //   },
  //   {
  //     id: 4,
  //     username: "Marie",
  //     userIcon:
  //       "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
  //   },
  // ]);
  return (
    <>
      <ToastContainer style={{opacity : "50%"}} />
    </>
  );
};

export default UserInteractionToast;
