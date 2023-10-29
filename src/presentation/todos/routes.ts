import { Router } from "express"
import { TodosController } from "./controller"

export class TodoRoutes {

  static get routes(): Router {
    
    const route = Router()

    const todoController = new TodosController()

    route.get('/', (req, resp) => todoController.getTodos(req, resp) )
    route.get('/:id', (req, resp) => todoController.getTodoById(req, resp) )
    
    route.post('/', (req, resp) => todoController.createTodo(req, resp) )

    route.put('/:id', (req, resp) => todoController.updateTodo(req, resp) )

    route.delete('/:id', (req, resp) => todoController.deleteTodo(req, resp) )

    return route
  }
}
