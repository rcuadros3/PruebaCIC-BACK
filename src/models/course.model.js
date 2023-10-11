import { connection } from '../db.connection.js'

export async function getMCourses() {
  try {
    let query = 'SELECT * FROM course'

    const [rows] = await connection.query(query)
    return rows
  } catch (error) {
    return error
  }
}

export async function getMCourse(id) {
  try {
    let query = 'SELECT * FROM course c WHERE c.id = ?'

    const [rows] = await connection.query(query, [id])
    return rows
  } catch (error) {
    return error
  }
}

export async function postMCourse(newElement) {
  try {
    let query = 'INSERT INTO course (code, name, tutor) VALUES (?, ?, ?)'

    const [rows] = await connection.query(query, [
      newElement.code,
      newElement.name,
      newElement.tutor,
    ])
    return rows.insertId
  } catch (error) {
    return error
  }
}

export async function putMCourse(updateElement) {
  try {
    let query =
      'UPDATE course c SET c.code = ?, c.name = ?, c.tutor = ? WHERE c.id = ?'

    const [rows] = await connection.query(query, [
      updateElement.code,
      updateElement.name,
      updateElement.tutor,
      updateElement.id,
    ])
    return rows
  } catch (error) {
    return error
  }
}

export async function deleteMCourse(id) {
  try {
    let query = 'DELETE FROM course WHERE id = ?'

    const [rows] = await connection.query(query, [id])
    return rows
  } catch (error) {
    return error
  }
}