import React, { useState } from "react";
import styled from "styled-components";
import {
  DragDropContext,
  Draggable,
  Droppable,
  resetServerContext,
} from "react-beautiful-dnd";
import "./style.css";

const COLLECTION = [
  { id: "1", label: "Apple" },
  { id: "2", label: "Banana" },
  { id: "3", label: "orange" },
];

const DndForm = () => {
  const [items, setItems] = useState(COLLECTION);
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  const onDragStart = (start, provided) => {
    console.log("onDragStart", start, provided);
  };

  const onDragUpdate = (update, provided) => {
    console.log("onDragUpdate", update, provided);
  };

  const onDragEnd = (result, provided) => {
    console.log("onDragEnd", result, provided);
  };

  const getRenderItem = (items) => (
    provided,
    snapshot,
    rubric
  ) => {
    const item = items[rubric.source.index];
    return (
      <>
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={provided.draggableProps.style}
          className={snapshot.isDragging ? "dragging" : ""}
        >
          {item.label}
        </li>
      </>
    );
  };

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      {enabled && (
        <Wrapper>
          <Droppable droppableId="tools" isDropDisabled>
            {(provided, snapshot) => {
              return (
                <LeftWapper ref={provided.innerRef} {...provided.droppableProps}>
                  <ul ref={provided.innerRef} className="shop">
                    {items.map((item, index) => {
                      const shouldRenderClone =
                        item.id === snapshot.draggingFromThisWith;
                      return (
                        <React.Fragment key={item.id}>
                          {shouldRenderClone ? (
                            <li className="react-beatiful-dnd-copy">
                              {item.label}
                            </li>
                          ) : (
                            <Draggable draggableId={item.id} index={index}>
                              {(provided, snapshot) => (
                                <React.Fragment>
                                  <li
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={
                                      snapshot.isDragging ? "dragging" : ""
                                    }
                                  >
                                    {item.label}
                                  </li>
                                </React.Fragment>
                              )}
                            </Draggable>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </ul>
                </LeftWapper>
              );
            }}
          </Droppable>

          <Droppable droppableId="form">
            {(provided, snapshot) => {
              return (
                <MiddleWrapper ref={provided.innerRef} {...provided.droppableProps}></MiddleWrapper>
              );
            }}
          </Droppable>
          <RightWrapper></RightWrapper>
        </Wrapper>
      )}
    </DragDropContext>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #6dc1e6;
  display: flex;
  justify-content: space-between;
`;

const LeftWapper = styled.div`
  width: 350px;
  height: 100%;
  background-color: aquamarine;
  flex-shrink: 0;
`;

const MiddleWrapper = styled.div`
  min-width: 500px;
  flex-grow: 10;
`;

const RightWrapper = styled.div`
  width: 300px;
  height: 100%;
  background-color: #e8d4ba;
`;

export default DndForm;
