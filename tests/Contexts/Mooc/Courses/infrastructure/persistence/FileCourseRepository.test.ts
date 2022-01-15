import { Course } from "../../../../../../src/Contexts/Mooc/Courses/domain/Course";
import { FileCourseRepository } from "../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository";

describe('FileCourseRepository', () => {
  it('should save a course', async () => {

    const id = 'some-id';
    const name = 'some-name';
    const duration = 'some-duration';

    const course = new Course({id, name, duration});

    const repository = new FileCourseRepository();

    await repository.save(course);

    // 2. un extra momentaneo para recuperar el curso.
    const expectedCourse = await repository.search('some-id');
    expect(course).toEqual(expectedCourse);

  });

});
