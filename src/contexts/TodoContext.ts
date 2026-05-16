
import { createContext } from "react";
import { Todo } from "@/types";

interface TodoStateContextType{
    todos: Todo[];
}

export const TodoStateContext = createContext<TodoStateContextType>({todos:[]});

interface TodoDispatchContextType {
    onCreate: (content: string) => void;    // 내용(스트링) 받아서 보이드함수로 반환
    onUpdate: (targetId: number) => void;
    onDelete: (targetId: number) => void;
}

export const TodoDisPatchContext = createContext<TodoDispatchContextType>({
    onCreate: (content: string) => {},
    onUpdate: (targetId: number) => {},
    onDelete: (targetId: number) => {},
});