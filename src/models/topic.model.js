import { connection } from '../db.connection.js'

export async function getMTopics(course) {
  try {
    let query = 'SELECT * FROM topic t WHERE t.course = ?'

    const [rows] = await connection.query(query, [course])
    return rows
  } catch (error) {
    return error
  }
}

export async function getMTopic(id) {
  try {
    let query = 'SELECT * FROM topic t WHERE t.id = ?'

    const [rows] = await connection.query(query, [id])
    return rows
  } catch (error) {
    return error
  }
}

export async function postMTopic(newElement) {
  try {
    let query = 'INSERT INTO topic (code, course, name) VALUES (?, ?, ?)'

    const [rows] = await connection.query(query, [
      newElement.code,
      newElement.course,
      newElement.name,
    ])
    return rows.insertId
  } catch (error) {
    return error
  }
}

export async function putMTopic(updateElement) {
  try {
    let query = 'UPDATE topic t SET t.code = ?, t.name = ? WHERE t.id = ?'

    const [rows] = await connection.query(query, [
      updateElement.code,
      updateElement.name,
      updateElement.id,
    ])
    return rows
  } catch (error) {
    return error
  }
}

export async function deleteMTopic(id) {
  try {
    let query = 'DELETE FROM topic WHERE id = ?'

    const [rows] = await connection.query(query, [id])
    return rows
  } catch (error) {
    return error
  }
}
