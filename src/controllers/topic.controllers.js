import {
  deleteMTopic,
  getMTopic,
  getMTopics,
  postMTopic,
  putMTopic,
} from '../models/topic.model.js'

export const getCTopics = async (req, res) => {
  const course = req.params.course
  try {
    const responseTopics = await getMTopics(course)
    res.status(200).json(responseTopics)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const getCTopic = async (req, res) => {
  const id = req.params.id
  try {
    const responseTopic = await getMTopic(id)
    if (responseTopic.length > 0) {
      res.status(200).json(responseTopic)
    } else {
      res
        .status(500)
        .json({ message: 'No se pudo traer la información del tema.' })
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const postCTopic = async (req, res) => {
  const body = req.body
  try {
    const responseNewTopic = await postMTopic(body)
    if (responseNewTopic > 0) {
      res.status(200).json({ message: 'Tema creado correctamente' })
    } else {
      res
        .status(500)
        .json({ message: 'No se pudo crear la información del Tema.' })
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const putCTopic = async (req, res) => {
  let body = req.body
  const id = req.params.id
  try {
    body.id = id
    const responseUpdateTopic = await putMTopic(body)
    if (responseUpdateTopic.affectedRows) {
      res.status(200).json({ message: 'Tema actualizado correctamente.' })
    } else {
      res
        .status(500)
        .json({ message: 'No se pudo traer la información del tema.' })
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const deleteCTopic = async (req, res) => {
  const id = req.params.id
  try {
    const responseDeleteTopic = await deleteMTopic(id)
    if (responseDeleteTopic.affectedRows > 0) {
      res.status(200).json({ message: 'Tema eliminado correctamente.' })
    } else {
      res.status(500).json({ message: 'No se pudo eliminar el tema.' })
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
