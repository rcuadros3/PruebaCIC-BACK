import {
  deleteMCourse,
  getMCourse,
  getMCourses,
  postMCourse,
  putMCourse,
} from '../models/course.model.js'

export const getCRoutes = async (req, res) => {
  try {
    const responseCourses = await getMCourses()
    res.status(200).json(responseCourses)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const getCRoute = async (req, res) => {
  const id = req.params.id
  try {
    const responseCourse = await getMCourse(id)
    if (responseCourse.length > 0) {
      res.status(200).json({ courses: responseCourse })
    } else {
      res
        .status(500)
        .json({ message: 'No se pudo traer la información del curso.' })
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const postCRoute = async (req, res) => {
  const body = req.body
  try {
    const responseNewCourse = await postMCourse(body)
    if (responseNewCourse > 0) {
      res.status(200).json({ message: 'Curso creado correctamente' })
    } else {
      res
        .status(500)
        .json({ message: 'No se pudo traer la información del curso.' })
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const putCRoute = async (req, res) => {
  let body = req.body
  const id = req.params.id
  try {
    body.id = id
    const responseUpdateCourse = await putMCourse(body)
    if (responseUpdateCourse.affectedRows) {
      res.status(200).json({ message: 'Curso actualizado correctamente.' })
    } else {
      res
        .status(500)
        .json({ message: 'No se pudo traer la información del curso.' })
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const deleteCRoute = async (req, res) => {
  const id = req.params.id
  try {
    const responseDeleteCourse = await deleteMCourse(id)
    if (responseDeleteCourse.affectedRows > 0) {
      res.status(200).json({ message: 'Curso eliminado correctamente.' })
    } else {
      res.status(500).json({ message: 'No se pudo eliminar el curso.' })
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
