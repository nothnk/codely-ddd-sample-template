import { Router, Request, Response  } from 'express';
import { ValidationError, validationResult } from 'express-validator';
import glob from 'glob';
import httpStatus from 'http-status';

export function registerRoutes(router: Router) {
  const routes = glob.sync(__dirname + '/**/*.route.*');
  routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}

export function validateReqSchema( req: Request, res: Response, next: Function) {
  // ejecutamos la validación de la request con la función de express-validator
  const validationErrors = validationResult(req);
  // En caso de no tener errores, seguimos con el proceso de la request normal.
  if (validationErrors.isEmpty()) {
    return next();
  }

  // Aquí es un extra para añadir más verbosidad a los errores, para indicar que campos son exactamente los que fallan.
  const errors = validationErrors.array().map((err: ValidationError) => ({
    [err.param] : err.msg
  }));

  // Por último devolvemos la respuesta con nuestro error
  return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
    errors
  });
}
