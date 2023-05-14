import makeRequest from 'utils/makeRequest'
import encryptPassword from 'utils/encryptPassword'
import { AUTH_ENDPOINTS } from 'config/apiEndpoints'
import ILogin from 'models/Auth/ILogin'
import IUser from 'models/Auth/IUser'

export interface IAuthResponse {
  success: boolean
  message: string
  data: IUser
}

export const authService = {
  login: async (credentials: ILogin): Promise<IAuthResponse> => {
    try {
      const encryptedPassword = await encryptPassword(credentials.Password)
      const encryptedCredentials = {
        ...credentials,
        Password: encryptedPassword,
      }

      const response: IAuthResponse = await makeRequest(
        'POST',
        AUTH_ENDPOINTS.LOGIN,
        encryptedCredentials
      )
      return response
    } catch (error) {
      throw new Error('Login failed')
    }
  },
}
