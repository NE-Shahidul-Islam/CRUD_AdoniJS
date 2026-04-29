import vine from '@vinejs/vine'

export const createStudentValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(3),
    email: vine
      .string()
      .email()
      .trim()
      .unique(async (db: any, value: any) => {
        const student = await db.from('students').where('email', value).first()
        return !student
      }),
    phone: vine.string().trim().nullable().optional(),
    course: vine.string().trim(),
  })
)

export const updateStudentValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(3).optional(),
    email: vine
      .string()
      .email()
      .trim()
      .unique(async (db: any, value: any, field: any) => {
        const student = await db
          .from('students')
          .where('email', value)
          .whereNot('id', field.data.params.id)
          .first()
        return !student
      })
      .optional(),
    phone: vine.string().trim().nullable().optional(),
    course: vine.string().trim().optional(),
  })
)
