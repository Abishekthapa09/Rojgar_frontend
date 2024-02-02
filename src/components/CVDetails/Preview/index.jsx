import React, { forwardRef } from "react";
import {
  PreviewPersonal,
  PreviewSocial,
  PreviewLanguage,
  PreviewHobbies,
  PreviewHeader,
  PreviewEducation,
  PreviewExperience,
  PreviewSkills,
  PreviewProjects,
  PreviewCourses,
  PreviewReferences,
} from "../index";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { setLeftSide, setRightSide } from "../../../redux/site";

export const Preview = forwardRef(({ array }, ref) => {
  const dispatch = useDispatch();
  const { leftSide, rightSide, colors, isContentEditable } = useSelector(
    (state) => state.site
  );

  const { user } = useSelector((state) => state.user);

  const handleOnDrugEndLeft = (result) => {
    if (!result.destination) return;
    const items = Array.from(leftSide);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(setLeftSide(items));
  };

  const handleOnDrugEndRight = (result) => {
    if (!result.destination) return;
    const items = Array.from(rightSide);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(setRightSide(items));
  };

  const previews = {
    PreviewSocial: <PreviewSocial />,
    PreviewLanguage: <PreviewLanguage />,
    PreviewHobbies: <PreviewHobbies />,
    PreviewEducation: <PreviewEducation />,
    PreviewExperience: <PreviewExperience />,
    PreviewSkills: <PreviewSkills />,
    PreviewProjects: <PreviewProjects />,
    PreviewCourses: <PreviewCourses />,
    PreviewReferences: <PreviewReferences />,
  };

  return (
    <section>

      {
        user?.accountType === "seeker" &&
          <h1 className="bg-tertiary drop-shadow-sm text-white py-4 text-center text-2xl font-bold mb-2">Here is a preview of your remarkable CV.</h1>
      }

      <div
        className=" w-full h-full flex items-start justify-start overflow-auto border-2 border-black/50 my-2 drop-shadow-lg"
        style={{ background: colors.body }}
        ref={ref}
        contentEditable={isContentEditable}
        suppressContentEditableWarning={true}
      >

        <div
          className="w-2/6 h-auto min-h-full p-6"
        >

          <PreviewPersonal />
          <DragDropContext onDragEnd={handleOnDrugEndLeft}>
            <Droppable droppableId="leftSide">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {leftSide.map((item, index) => (
                    <Draggable
                      key={`${item.id}`}
                      draggableId={`${item.id}`}
                      index={index}
                      isDragDisabled={isContentEditable}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {previews[item.component]}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="w-4/6 h-auto min-h-full ">
        {/* <div className=" absolute opacity-40 right-2"><img src="/Logo.png" width="150px"  /></div> */}
          <PreviewHeader />
          <DragDropContext onDragEnd={handleOnDrugEndRight}>
            <Droppable droppableId="rightSide">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {rightSide.map((item, index) => (
                    <Draggable
                      key={`${item.id}`}
                      draggableId={`${item.id}`}
                      index={index}
                      isDragDisabled={isContentEditable}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {previews[item.component]}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          
        </div>
      </div>
    </section>
  );
});
