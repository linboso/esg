import {useState, useRef, useEffect, useCallback} from 'react'

import './InfiniteLooper.css'

const InfiniteLooper = ({
  speed,
  direction,
  children,
}) => {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  const setupInstances = useCallback(() => {
  if (!innerRef?.current || !outerRef?.current) return;

  const { width } = innerRef.current.getBoundingClientRect();

  const { width: parentWidth } = outerRef.current.getBoundingClientRect();

  const instanceWidth = width / innerRef.current.children.length;

  if (width < parentWidth + instanceWidth) {
      setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
    }
  }, [looperInstances]);

  useEffect(() => {
      setupInstances();
  }, []);

  return (
    <div className="looper" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef}>
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteLooper