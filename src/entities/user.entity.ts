import { Exclude } from 'class-transformer';
import { IsString, IsDate, IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './post.entity';
import { Profile } from './profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsString()
  email: string;

  // @Column()
  // @IsNotEmpty()
  // password: string;

  @Column()
  @IsDate()
  createdAt: Date;

  @Column({ nullable: true })
  @IsString()
  authStrategy: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @Exclude()
  @Column()
  @IsNotEmpty()
  password: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
