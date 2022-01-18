import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseNameLengthExceeded } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseNameLengthExceeded';
import { Uuid } from '../../../../../src/Contexts/Shared/domain/value-object/Uuid';
import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseName';

describe('CourseCreator', () => {
  it('should create a valid course', async () => {

    const repository = new CourseRepositoryMock();

    const id = 'bf566b2d-9840-451c-b6d4-95a7fd6db00d';
    const name = 'some-name';
    const duration = 'some-duration';

    const creator = new CourseCreator(repository);

    const expectedCourse = new Course({id: new Uuid(id), name: new CourseName(name), duration});

    await creator.run({id, name, duration});

    repository.assertSaveHaveBeenCalledWidh(expectedCourse);

  });

  it('should throw error if course name length is exceeded', async () => {

    const repository = new CourseRepositoryMock();
    const creator = new CourseCreator(repository);

    const id = 'bf566b2d-9840-451c-b6d4-95a7fd6db00d';
    const name = 'some-name'.repeat(30);
    const duration = 'some-duration';

    expect(() => {
      const expectedCourse = new Course({id: new Uuid(id), name: new CourseName(name), duration});

      creator.run({id: id, name, duration});

      repository.assertSaveHaveBeenCalledWidh(expectedCourse);

    }).toThrow(CourseNameLengthExceeded)

  });


});
