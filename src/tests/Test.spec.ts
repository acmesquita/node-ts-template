import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()
  user.name = 'Catharina'

  expect(user.name).toEqual('Catharina')
})
