

const Content = (props) => {
  return (
    <div className='content'>
      {props.children}

      <canvas id="canvas" width="150" height="150">word</canvas>
    </div>
  );
};

export default Content;
import './context.js'