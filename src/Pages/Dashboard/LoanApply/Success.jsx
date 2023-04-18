import React from 'react';
import "./Success.css"
const Success = () => {
    const [showCheckIcon, setShowCheckIcon] = useState(false);
  const handleClick = () => {
    setShowCheckIcon(false);
    setTimeout(() => {
      setShowCheckIcon(true);
    }, 10);
  };

    return (
        <div>
             <div className="success-checkmark">
      <div className={`check-icon ${showCheckIcon ? "show" : "hide"}`}>
        <span className="icon-line line-tip"></span>
        <span className="icon-line line-long"></span>
        <div className="icon-circle"></div>
        <div className="icon-fix"></div>
      </div>
      <button onClick={handleClick}>Click Me</button>
    </div>
        </div>
    );
};

export default Success;