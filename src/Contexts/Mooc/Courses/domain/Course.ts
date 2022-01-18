import { CourseId } from '../../Shared/domain/CourseId';
import { CourseName } from './CourseName';

export class Course {
  readonly id: CourseId;
  readonly name: CourseName;
  readonly duration: string;

  constructor({ id, name, duration }: { id: CourseId; name: CourseName; duration: string; }) {
    this.id = id;
    this.name = name;
    this.duration = duration;
  }
}
