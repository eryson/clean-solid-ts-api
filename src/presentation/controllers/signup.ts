import { type HttpRequest } from '../protocols/http'
import { type Controller } from '../protocols/controller'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): any {
    const requiredFields = [
      'name',
      'email',
      'password',
      'passwordConfirmation'
    ]

    for (const field of requiredFields) {
      if (httpRequest.body[field]) continue

      return badRequest(new MissingParamError(field))
    }
  }
}
