import Student from '#models/student'
import { createStudentValidator, updateStudentValidator } from '#validators/student'
import type { HttpContext } from '@adonisjs/core/http'

export default class StudentsController {
  /**
   * Display a list of all students
   */
  async index({ view }: HttpContext) {
    const students = await Student.all()
    return view.render('pages/students/index', { students })
  }

  /**
   * Display the form to create a new student
   */
  async create({ view }: HttpContext) {
    return view.render('pages/students/create')
  }

  /**
   * Handle the form submission to create a new student
   */
  async store({ request, response, session }: HttpContext) {
    const payload = await request.validateUsing(createStudentValidator)
    await Student.create(payload)

    session.flash('notification', {
      type: 'success',
      message: 'Student registered successfully',
    })

    return response.redirect().toRoute('students.index')
  }

  /**
   * Display the form to edit an existing student
   */
  async edit({ params, view }: HttpContext) {
    const student = await Student.findOrFail(params.id)
    return view.render('pages/students/edit', { student })
  }

  /**
   * Handle the form submission to update a student
   */
  async update({ params, request, response, session }: HttpContext) {
    const student = await Student.findOrFail(params.id)
    const payload = await request.validateUsing(updateStudentValidator, {
      meta: { params },
    })

    student.merge(payload)
    await student.save()

    session.flash('notification', {
      type: 'success',
      message: 'Student updated successfully',
    })

    return response.redirect().toRoute('students.index')
  }

  /**
   * Delete a student
   */
  async destroy({ params, response, session }: HttpContext) {
    const student = await Student.findOrFail(params.id)
    await student.delete()

    session.flash('notification', {
      type: 'success',
      message: 'Student deleted successfully',
    })

    return response.redirect().toRoute('students.index')
  }
}
