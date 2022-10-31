import { IsString } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  title: string;

  @IsString()
  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
