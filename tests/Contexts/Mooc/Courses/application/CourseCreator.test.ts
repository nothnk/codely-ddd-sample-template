import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { Uuid } from '../../../../../src/Contexts/Shared/domain/value-object/Uuid';
import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

describe('CourseCreator', () => {
  it('should create a valid course', async () => {

    const repository = new CourseRepositoryMock();

    const id = new Uuid('bf566b2d-9840-451c-b6d4-95a7fd6db00d');
    const name = 'some-name';
    const duration = 'some-duration';

    const creator = new CourseCreator(repository);

    const expectedCourse = new Course({id, name, duration});

    await creator.run({id: id.value, name, duration});

    repository.assertSaveHaveBeenCalledWidh(expectedCourse);

  });
});
