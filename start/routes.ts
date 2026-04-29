/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home')

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create']).as('new_account.create')
    router.post('signup', [controllers.NewAccount, 'store']).as('new_account.store')

    router.get('login', [controllers.Session, 'create']).as('session.create')
    router.post('login', [controllers.Session, 'store']).as('session.store')
  })
  .use(middleware.guest())

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy'])

    router.get('students', [controllers.Students, 'index']).as('students.index')
    router.get('students/create', [controllers.Students, 'create']).as('students.create')
    router.post('students', [controllers.Students, 'store']).as('students.store')
    router.get('students/:id/edit', [controllers.Students, 'edit']).as('students.edit')
    router.post('students/:id', [controllers.Students, 'update']).as('students.update')
    router.post('students/:id/delete', [controllers.Students, 'destroy']).as('students.destroy')
  })
  .use(middleware.auth())
