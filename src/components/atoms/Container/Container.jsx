const Container = (props) => {
  return (
    <div className="w-full flex items-center justify-between px-16 pt-20">
      {props.children}
    </div>
  );
};

export default Container;
