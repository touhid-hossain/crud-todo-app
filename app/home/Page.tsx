"use client";

import Navbar from "@/components/shared/navbar";
import TodoInput from "@/components/shared/todo-input";
import TodoList from "@/components/shared/todo-list";
import { useState } from "react";

interface HomePageProps {
  userId: string;
  todos: any;
}

const HomePage = ({ userId, todos }: HomePageProps) => {
  const [updateTodoId, setUpdateTodoId] = useState();
  return (
    <>
      <Navbar />
      <TodoInput userId={userId} updateTodoId={updateTodoId} />
      <TodoList todos={todos} setUpdateTodoId={setUpdateTodoId}/>
    </>
  );
};

export default HomePage;