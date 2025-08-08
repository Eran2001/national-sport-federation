import { toast } from "react-toastify";

const success = (message) => {
  toast.success(message);
};
const error = (message) => {
  toast.error(message);
};
const warning = (message) => {
  toast.warning(message);
};

const Notification = {
  success,
  error,
  warning,
};

export default Notification;

<ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick={true}
  rtl={false}
  pauseOnFocusLoss={false}
  draggable={false}
  pauseOnHover={true}
  theme="colored"
/>;
