/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/movies', async (context) => {
  return context.view.render('pages/movies', { movie: 'Dune 2 by Denis Villeneuve' })
})
