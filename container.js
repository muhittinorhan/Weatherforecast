import Days from './days';
import Dropdown from './dropdown'; 

function Container() {
  return (
    <>   
        <div className="container">
          <Dropdown />
          <Days />
        </div> 
    </>
  );
}

export default Container;