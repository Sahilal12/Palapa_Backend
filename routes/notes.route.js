import express from 'express'
import { getNotes, getNotesById, insertNotes,  updateNotes, deleteNotes  } from '../controller/notes.controller.js'

const router = express.Router()

router.get('/notes', getNotes)
router.get('/notes/:id', getNotesById)
router.post('/notes/create', insertNotes)
router.put('/notes/:id', updateNotes)
router.delete('/notes/:id', deleteNotes)

export default router   