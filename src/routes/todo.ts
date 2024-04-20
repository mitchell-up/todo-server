import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Todo } from "../entities/Todo";

const router = Router();
const todoRepository = AppDataSource.getRepository(Todo);

// 투두 리스트 조회
router.get("/", async (req, res) => {
  const todos = await todoRepository.find();
  res.json(todos);
});

// 투두 리스트 추가
router.post("/", async (req, res) => {
  const newTodo = new Todo();
  newTodo.task = req.body.task;
  newTodo.completed = false;

  const savedTodo = await todoRepository.save(newTodo);
  res.status(201).json(savedTodo);
});

// 투두 리스트 수정
router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const todo = await todoRepository.findOneBy({ id });

  if (todo) {
    todo.task = req.body.task !== undefined ? req.body.task : todo.task;
    todo.completed =
      req.body.completed !== undefined ? req.body.completed : todo.completed;
    const updatedTodo = await todoRepository.save(todo);
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// 투두 리스트 삭제
router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await todoRepository.delete(id);
  res.status(204).end();
});

export default router;
