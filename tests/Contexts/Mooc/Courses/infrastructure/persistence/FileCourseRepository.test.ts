import { Course } from "../../../../../../src/Contexts/Mooc/Courses/domain/Course";
import { CourseName } from "../../../../../../src/Contexts/Mooc/Courses/domain/CourseName";
import { FileCourseRepository } from "../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository";
import { Uuid } from "../../../../../../src/Contexts/Shared/domain/value-object/Uuid";

describe('FileCourseRepository', () => {
  it('should save a course', async () => {

    const id = new Uuid('bf566b2d-9840-451c-b6d4-95a7fd6db00d');
    const name = new CourseName('some-name');
    const duration = 'some-duration';

    const course = new Course({id, name, duration});

    const repository = new FileCourseRepository();

    await repository.save(course);

    // 2. un extra momentaneo para recuperar el curso.
    const expectedCourse = await repository.search(id.value);
    expect(course).toEqual(expectedCourse);

  });

});
