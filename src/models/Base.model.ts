import { ObjectType, Field } from 'type-graphql';
import { Column, BaseEntity, BeforeInsert, BeforeUpdate } from 'typeorm';

@ObjectType()
export default abstract class BaseModel extends BaseEntity {
  @Field()
  @Column()
  createdAt!: Date;

  @Field()
  @Column()
  updatedAt!: Date;

  @BeforeInsert()
  setCreatedDate() {
    const date = new Date();
    this.createdAt = date;
    this.updatedAt = date;
  }

  @BeforeUpdate()
  setUpdatedDate() {
    this.updatedAt = new Date();
  }
}
