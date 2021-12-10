const Container = (props) => {
  return (
    <div className={`container ${props.modifier}`}>
      {props.children}
    </div>
  );
};

export default Container;