import vine, { VineString } from '@vinejs/vine'
import db from '@adonisjs/lucid/services/db'

declare module '@vinejs/vine' {
  interface VineString {
    unique(callback: (database: typeof db, value: string, field: any) => Promise<boolean>): this
  }
}

VineString.macro('unique', function (this: any, callback) {
  return this.use(
    vine.createRule(
      async (value: any, _, field: any) => {
        if (typeof value !== 'string') return
        const isUnique = await callback(db, value, field)
        if (!isUnique) {
          field.report('The {{ field }} has already been taken', 'unique', field)
        }
      },
      { isAsync: true }
    )()
  )
})
