export const Preloader = ({ children, isLoading }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <div>{children}</div>;
  };
  