import { Organisation } from 'src/group/group.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  UserID: number;

  @Column()
  UserName: string;

  @Column()
  UserIcon: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  update_at: Date;

  @OneToMany(() => Organisation, (organisation) => organisation.user)
  organisations: Organisation[];

  // @OneToMany(() => UserTag, (userTag) => userTag.user)
  // userTags: UserTag[];

  // @OneToMany(() => Answer, (answer) => answer.answerUser)
  // answers: Answer[];

  // @OneToMany(() => Issue, (issue) => issue.postUser)
  // issue: Issue[];
}
