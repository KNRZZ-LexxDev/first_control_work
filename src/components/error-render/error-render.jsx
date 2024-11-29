import { useNavigate } from "react-router-dom";

export const ErrorRender = ({ children, error }) => {
  if (error?.status) {
    if (error.message === 404) {
      return <div>Такой страницы не существует</div>;
    }
  }
  return <div>{children}</div>;
};
