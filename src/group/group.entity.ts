// import { Issue } from '@prisma/client';
import { Article } from 'src/article/article.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  // OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Organisation {
  @PrimaryGeneratedColumn()
  OrganisationID: number;

  @Column()
  OrganisationName: string;

  @Column()
  discruption: string;

  @Column()
  authrity: string;

  @Column()
  UserID: number;

  @Column()
  ArticleID: number;

  @ManyToOne(() => User, (user) => user.organisations)
  user: User;

  @ManyToOne(() => Article, (article) => article.organisation)
  articles: Article[];

  // @OneToMany(() => Issue, (issue) => issue.organisation)
  // issue: Issue[];
}
