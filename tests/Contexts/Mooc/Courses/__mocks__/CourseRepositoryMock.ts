import { CourseRepository } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';

export class CourseRepositoryMock implements CourseRepository {

  private saveMock: jest.Mock;

  constructor () {
    this.saveMock = jest.fn();
  }

  async save(course: Course): Promise<void> {
    this.saveMock(course);
  }

  assertSaveHaveBeenCalledWidh(expected: Course): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected);
  }

  // assertLastSavedCourseIs(expected: Course): void {
  //   const mock = this.saveMock.mock;
  //   const lastSavedCourse = mock.calls[mock.calls.length - 1][0] as Course;
  //   expect(lastSavedCourse).toBeInstanceOf(Course);
  //   expect(lastSavedCourse.id).toEqual(expected.id);
  // }

}
