import {
  Column,
  CreatedAt,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
  Unique
} from "sequelize-typescript";

@Table
export default class Event extends Model<Event> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  public id!: string;

  @Column
  public event_type!: string;

  @Unique
  @Column
  public visit_id!: string;

  @CreatedAt
  @Column
  public timestamp!: Date;

  @Unique
  @Column
  public caregiver_id!: string;

  @Unique
  @Column
  public care_recipient_id!: string;

  @Column
  public mood?: string;
}
