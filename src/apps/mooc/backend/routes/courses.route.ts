import { Router, Request, Response } from 'express';
import { body, param } from 'express-validator';
import container from '../dependency-injection';
import { CoursePutController } from '../controllers/CoursePutController';
import { validateReqSchema } from '.';

export const register = (router: Router) => {
  const reqSchema = [
    param('id').exists().isString(),
    body('name').exists().isString(),
    body('duration').exists().isString(),
  ];

  const coursePutController: CoursePutController = container.get('Apps.mooc.controllers.CoursePutController');

  router.put('/courses/:id', reqSchema, validateReqSchema, (req: Request, res: Response) => {
    coursePutController.run(req, res);
  });
};
