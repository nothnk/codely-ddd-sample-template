import { CourseCreatorRequest } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreatorRequest';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseName';
import { CourseId } from '../../../../../src/Contexts/Mooc/Shared/domain/CourseId';
import { CourseIdMother } from '../../Shared/domain/Courses/CourseIdMother';
import { CourseDurationMother } from './CourseDurationMother';
import { CourseNameMother } from './CourseNameMother';

export class CourseMother {
  static create(id: CourseId, name: CourseName, duration: CourseDuration): Course {
    return new Course(id, name, duration );
  }

  static fromRequest(request: CourseCreatorRequest): Course {
    return this.create(
      CourseIdMother.create(request.id),
      CourseNameMother.create(request.name),
      CourseDurationMother.create(request.duration)
    );
  }

  static random(): Course {
    return this.create(CourseIdMother.random(), CourseNameMother.random(), CourseDurationMother.random());
  }
}
