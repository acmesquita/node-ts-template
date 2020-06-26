import { User } from '@models/User'

export class UserController {
  instance () {
    const user = new User()
    return user
  }
}
