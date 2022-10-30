import { IsString, IsDate, IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsString()
  userName: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  @IsDate()
  createdAt: Date;

  @Column({ nullable: true })
  @IsString()
  authStrategy: string;
}
