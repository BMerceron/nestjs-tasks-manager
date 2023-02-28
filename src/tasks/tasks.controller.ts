import { CreateTaskDTO } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { UpdateTaskDTO } from './dto/update-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }
  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDTO): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Patch('/:id')
  // updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDTO) {
  //   return this.tasksService.updateTask(id, updateTaskDto);
  // }
  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   this.tasksService.deleteTask(id);
  // }
}
