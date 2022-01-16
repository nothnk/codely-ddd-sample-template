import { CourseRepository } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';

export class CourseRepositoryMock implements CourseRepository {

  saveMock: jest.Mock;

  constructor () {
    this.saveMock = jest.fn();
  }

  async save(course: Course): Promise<void> {
    this.saveMock(course);
  }

  // private mockSave = jest.fn();


  // async save(course: Course): Promise<void> {
  //   this.mockSave(course);
  // }

  // assertLastSavedCourseIs(expected: Course): void {
  //   const mock = this.mockSave.mock;
  //   const lastSavedCourse = mock.calls[mock.calls.length - 1][0] as Course;
  //   expect(lastSavedCourse).toBeInstanceOf(Course);
  //   expect(lastSavedCourse.id).toEqual(expected.id);
  // }

}
