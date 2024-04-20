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

export default router;
