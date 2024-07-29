import { locales } from '../locales'

export const preloadSearch = async ({ payload }): Promise<void> => {

  const sync =[{ collection: 'products'}, {collection: 'pages'}
    ]

  // in this example, this works.... but if you add more pages, around 12 in my app,
  // the query takes longer and this leaves behind some idle in transactions.
  // sync.map(c => {
  //   Promise.all(locales.locales.map(l => preload({ payload, sync: c, locale: l.code })))
  // })

  // this fixes the problem
  sync.map(c => {
    Promise.all(locales.locales.map((l, index) => {
      setTimeout(function () {
          preload({ payload, sync: c, locale: l.code })
    }, index * 1000);
    }))
  })
}

export const preload = async ({ payload, sync, locale }): Promise<void> => {
  console.log(sync, locale)
  let r = await payload.find({
    req: {payload},
    collection: sync.collection,
    depth: 1,
    limit: 10000,
    locale: locale,
    pagination: false,
  })
}
