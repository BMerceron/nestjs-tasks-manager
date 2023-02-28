import { IsEnum } from 'class-validator';
import { TaskStatus } from '../enums/task-status.enum';

export class UpdateTaskDTO {
  @IsEnum(TaskStatus)
  status: TaskStatus;
  title: string;
  description: string;
}
