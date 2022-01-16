import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

describe('CourseCreator', () => {
  it('should create a valid course', async () => {

    const repository = new CourseRepositoryMock();

    const id = 'some-id';
    const name = 'some-name';
    const duration = 'some-duration';

    const creator = new CourseCreator(repository);

    const expectedCourse = new Course({id, name, duration});

    await creator.run(id, name, duration);

    expect(repository.saveMock).toHaveBeenCalledWith(expectedCourse);

  });
});
