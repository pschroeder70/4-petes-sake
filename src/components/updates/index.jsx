const Updates = (props) => {
  return (
    <aside className='updates'>
      <h3 className='updates__title'>{props.title}</h3>
      {props.children}
    </aside>
  );
};

export default Updates;
