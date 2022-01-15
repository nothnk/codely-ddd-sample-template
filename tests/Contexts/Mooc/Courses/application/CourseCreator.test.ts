import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseRepository } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository';
import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';

describe('CourseCreator', () => {
  it('should create a valid course', async () => {

    const repository: CourseRepository = {
       save: jest.fn()
    }

    const id = 'some-id';
    const name = 'some-name';
    const duration = 'some-duration';

    const creator = new CourseCreator(repository);

    const expectedCourse = new Course({id, name, duration});

    await creator.run(id, name, duration);

    expect(repository.save).toHaveBeenCalledWith(expectedCourse);

  });
});
