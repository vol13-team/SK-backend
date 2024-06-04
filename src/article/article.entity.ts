import { Organisation } from 'src/group/group.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  ArticleID: number;

  @Column()
  ArticleTitle: string;

  @Column()
  ArticleLink: string;

  @Column()
  ArticleUserName: string;

  @ManyToOne(() => Organisation, (organisation) => organisation.articles)
  organisation: Organisation;

  // @ManyToOne(() => ArticleTag, (articleTag) => articleTag.article)
  // articleTags: ArticleTag[];
}
