import { type HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): any {
    const requiredFields = ['name', 'email']

    for (const field of requiredFields) {
      if (httpRequest.body[field]) continue

      return badRequest(new MissingParamError(field))
    }
  }
}
