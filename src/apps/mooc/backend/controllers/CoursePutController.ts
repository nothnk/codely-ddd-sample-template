import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { CourseCreator } from '../../../../Contexts/Mooc/Courses/application/CourseCreator';
import { Controller } from './Controller';

export class CoursePutController implements Controller {

  constructor(private courseCreator: CourseCreator) {}

  async run(req: Request, res: Response) {
    const { name, duration } = req.body;

    await this.courseCreator.run({ id: req.params.id, name, duration });

    res.status(httpStatus.CREATED).send();
  }
}
