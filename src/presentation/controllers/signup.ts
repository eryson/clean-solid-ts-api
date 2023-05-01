import { MissingParamError, InvalidParamError } from '../errors'
import { badRequest, serverError } from '../helpers/http-helper'
import {
  type HttpRequest,
  type Controller,
  type EmailValidator
} from '../protocols'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): any {
    try {
      const { email, password, passwordConfirmation } = httpRequest.body
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

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
      const isValid = this.emailValidator.isValid(email)

      if (!isValid) return badRequest(new InvalidParamError('email'))
    } catch (error) {
      return serverError()
    }
  }
}
