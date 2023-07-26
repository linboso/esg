import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Slider from '@mui/material/Slider';

import './App.css'
import './InfiniteLooper.css'

const AppStyle = {
  backgroundImage:"url('IMG_0618.PNG')",
  height:'100vh',
  width: '100vw',  
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',  
  backgroundPosition: 'center',
  animation: 'loopAnimation 10s infinite',  
}

const InfiniteLooper = function InfiniteLooper({
  speed,
  direction,
  children,
}) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;

    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }

    resetAnimation();
  }, [looperInstances]);
  
  
  /*
    6 instances, 200 each = 1200
    parent = 1700
  */

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className="looper" ref={outerRef} >
      <div className="looper__innerList" ref={innerRef} data-animate="true">
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

// 初始化測試資料
const initialData = {
  items: {
    'item-1': { id: 'item-1', imageUrl: 'new-moon.png' },
    'item-2': { id: 'item-2', imageUrl: 'play.png' },
    'item-3': { id: 'item-3', imageUrl: 'right-arrow.png' },
    'item-4': { id: 'item-4', imageUrl: 'sun.png' },
  },
  columns: {
    'column-a': {
      id: 'column-a',
      title: 'A 欄位',
      itemIds: ['item-1', 'item-2', 'item-3', 'item-4'],
    },
    'column-b': {
      id: 'column-b',
      title: 'B 欄位',
      itemIds: [],
    },
  },
};

const App = () => {
  const [data, setData] = useState(initialData);
  const [showSlider, setShowSlider] = useState(false);
  const [isItemDraggedToColumnB, setIsItemDraggedToColumnB] = useState(false);
  const [sliderValue, setSliderValue] = useState(5);

  // 拖曳結束後更新資料
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (destination.droppableId === 'column-b') {
      setIsItemDraggedToColumnB(true);
      setShowSlider(true);
    }
    if (destination.droppableId === 'column-a'){
      setIsItemDraggedToColumnB(false);
      setShowSlider(false);
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = data.columns[source.droppableId];
    const endColumn = data.columns[destination.droppableId];

    if (startColumn === endColumn) {
      const newItemIds = Array.from(startColumn.itemIds);
      newItemIds.splice(source.index, 1);
      newItemIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        itemIds: newItemIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newData);
    } else {
      const startItemIds = Array.from(startColumn.itemIds);
      startItemIds.splice(source.index, 1);

      const endItemIds = Array.from(endColumn.itemIds);
      endItemIds.splice(destination.index, 0, draggableId);

      const newStartColumn = {
        ...startColumn,
        itemIds: startItemIds,
      };

      const newEndColumn = {
        ...endColumn,
        itemIds: endItemIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newStartColumn.id]: newStartColumn,
          [newEndColumn.id]: newEndColumn,
        },
      };

      setData(newData);
    }
  };
  useEffect(() => {
    if (showSlider) {
      setSliderValue(5);
    }
  }, [showSlider]);

  return (
    <>
    <div>
      <InfiniteLooper speed={20} direction="left">
        <div style={AppStyle} />              
      </InfiniteLooper>
    </div>    
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns">
          <div className="fixed-column" style={{  position: 'fixed',width: '100vw',minHeight:"50px",display:'flex',justifyContent:'center'}}>
            <Droppable droppableId="column-a" direction="horizontal">
              {(provided) => (
                <div className="column" {...provided.draggableProps} ref={provided.innerRef}>
                  <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {data.columns['column-a'].title}</h2>
                  <div className="item-container" style={{ display: 'flex' , justifyContent: 'center', alignItems: 'center', width: '100vw', minHeight:'50px'}}>
                    {data.columns['column-a'].itemIds.map((itemId, index) => {
                      const item = data.items[itemId];
                      return (
                        <Draggable key={item.id} draggableId={item.id} index={index} isDragDisabled={isItemDraggedToColumnB}>
                          {(provided) => (
                            <div
                              className="item"
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <img
                                src={item.imageUrl}
                                alt={`Item ${item.id}`}
                                style={{ maxWidth: '50px', maxHeight: '50px' }}
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div
            className="fixed-column"
            style={{ position: 'fixed', bottom: '20vh', width: '100vw', minHeight:'50px',display:'flex',justifyContent:'center'}}
          >
            <Droppable droppableId="column-b" direction="horizontal">
              {(provided) => (
                <div className="column" {...provided.draggableProps} ref={provided.innerRef}>
                  <h2 style={{ display: 'flex' , justifyContent: 'center', alignItems: 'center'}}>{data.columns['column-b'].title}</h2>
                  <div className="item-container" style={{ display: 'flex' , justifyContent: 'center', alignItems: 'center'}}>
                    {data.columns['column-b'].itemIds.map((itemId, index) => {
                      const item = data.items[itemId];
                      return (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <div
                              className="item"
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <img
                                src={item.imageUrl}
                                alt={`Item ${item.id}`}
                                style={{ maxWidth: `${sliderValue + 45}px`, maxHeight: `${sliderValue + 45}px` }}
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                  {/* The indicator image placed at the bottom */}
                  <div
                    className="indicator"
                    style={{
                      width: '650px', // 調整指示圖片寬度
                      height: '50px', // 調整指示圖片高度
                      position: 'absolute',
                      left: '50%', // 讓指示圖片水平居中
                      transform:'translateX(-50%)',
                      zIndex: -1, // Set the z-index to -1 to keep it below the draggable items
                    }}
                  >
                    {/* You can put your indicator image here */}
                    <img src="/dashline_v1.png" alt="Indicator" width='650px'/>
                  </div>
                </div>
              )}
            </Droppable>
          </div>
          {showSlider &&
                <div
                  style={{
                    position: 'fixed',
                    bottom: '5vh',
                    left: '50%',
                    transform:'translateX(-50%)',
                    width: '20vw',
                    textAlign: 'center',
                  }}
                >
                  <Slider
                      value={sliderValue}
                      onChange={(event, newValue) => setSliderValue(newValue)}
                      aria-label="slider"
                      color="secondary"
                      valueLabelDisplay="auto"
                      step={5}
                      marks
                      min={5}
                      max={60}
                    />
                </div>
            }
        </div>
      </DragDropContext>
    </>
  );
};

export default App;
