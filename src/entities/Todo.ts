import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  task: string = "";

  @Column()
  completed: boolean = false;
}
