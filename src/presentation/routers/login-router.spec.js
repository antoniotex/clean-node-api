const LoginRouter = require('./login-router')
const MissingParamError = require('../helpers/missing-param-error')

const makeSut = () => {
  return new LoginRouter()
}

describe('Login Router', () => {
  test('Should return 400 if no email is provided', () => {
    // sut = system under test. Padrão para dizer que é o objeto que estamos testando
    const sut = makeSut()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password is provided', () => {
    // sut = system under test. Padrão para dizer que é o objeto que estamos testando
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@email.com'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 500 if no httpRequest is provided', () => {
    // sut = system under test. Padrão para dizer que é o objeto que estamos testando
    const sut = makeSut()

    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Should return 500 if no httpRequest has no body', () => {
    // sut = system under test. Padrão para dizer que é o objeto que estamos testando
    const sut = makeSut()
    const httpRequest = {}
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })

//   test('Should call AuthUseCase with correct params', () => {
//     // sut = system under test. Padrão para dizer que é o objeto que estamos testando
//     const sut = makeSut()
//     const httpRequest = {}
//     const httpResponse = sut.route(httpRequest)
//     expect(httpResponse.statusCode).toBe(500)
//   })
})
