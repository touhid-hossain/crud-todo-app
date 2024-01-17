"use client";

import { changeTodoState, deleteTodo } from "@/action/todo-actions";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { toast } from "../ui/use-toast";

const TodoBox = ({ todo, setUpdateTodoId }: { todo: any, setUpdateTodoId: any }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  //In here I have to update the todo value Immutably after its coming from Todo-actions.
  const toggleTodo = () => {
    changeTodoState(todo._id).then((data) => {
      setIsCompleted(data.isCompleted);
    });
  };

  const handleDelete = () => {
    deleteTodo(todo._id).then((data) => {
      toast({
        title: "Deleted!",
        description: "Successfully deleted the task.",
        variant: "destructive"
      })
    });
  };


  return (
    <Card className="mt-5 w-[350px] sm:w-[400px] lg:w-[600px]">
      <div className="flex justify-between items-center py-4 px-10">
        <div className="flex items-center">
          <Image
            onClick={toggleTodo}
            alt="Circle Image"
            width={25}
            height={25}
            src={
              isCompleted
                ? "/assets/icons/CircleFill.svg"
                : "/assets/icons/Circle.svg"
            }
            className="cursor-pointer"
          />
          <CardHeader>
            <CardTitle
              className={isCompleted ? "line-through" : ""}
            >
              {todo.task}
            </CardTitle>
          </CardHeader>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            onClick={() => setUpdateTodoId(todo._id)}
            className="cursor-pointer"
            alt="Edit Icon"
            height={30}
            width={30}
            src="/assets/icons/Edit.svg"
          />
          <Image
            onClick={handleDelete}
            alt="Delete Icon"
            className="cursor-pointer"
            height={30}
            width={30}
            src="/assets/icons/Delete.svg"
          />
        </div>
      </div>
    </Card>
  );
};

export default TodoBox;
