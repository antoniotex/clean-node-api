const validator = require('validator')
const EmailValidator = require('./email-validator')
const MissingParamError = require('../errors/missing-param-error')

const makeSut = () => {
  return new EmailValidator()
}

describe('Email Validator', () => {
  test('should return true if validator returns true', () => {
    const sut = makeSut()
    const isEmailValid = sut.isValid('valid_email@mail.com')
    expect(isEmailValid).toBe(true)
  })

  test('should return true if validator returns true', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEmailValid = sut.isValid('invalid_email@mail.com')
    expect(isEmailValid).toBe(false)
  })

  test('should call validator with correct email', () => {
    const sut = makeSut()
    sut.isValid('any_email@mail.com')
    expect(validator.email).toBe('any_email@mail.com')
  })

  test('Should throw if no params is provided', async () => {
    const sut = makeSut()
    // Quando não é async, nao chamamos o rejects e chamamos com arrow function
    expect(() => sut.isValid()).toThrow(new MissingParamError('email'))
  })
})
