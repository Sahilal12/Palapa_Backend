import { query } from "../database/db.js"

// Display all notes
export const getNotes = async(req,res)=>{
    try{
        const result = await query('Select * from notes')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"A server error occurred"})
    }
}

// Create a new notes
export const insertNotes = async (req, res) => {
    console.log(req.body);  // Log the request body to the console
    const { title, datetime, note } = req.body;
    try {
        await query("INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)", [title, datetime, note]);
        return res.status(200).json({ msg: "Notes added successfully" });
    } catch (error) {
        console.log("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "A server error occurred" });
    }
};

//  Mdify notes (judul, tanggal, dan catatan)
export const updateNotes = async(req,res)=>{
    const { title, datetime, note }= req.body
    const { id }=req.params
    try {
        await query("UPDATE notes SET title=?, datetime=?, note=? where id=?", [title, datetime, note, id])
        return res.status(200).json({msg:"Notes updated successfully"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"A server error occurred"})
    }
}

// Deleting notes
export const deleteNotes = async(req,res)=>{
    const {id} = req.params;
    try {
        await query("DELETE FROM notes where id=?", [id])
        return res.status(200).json({msg:"User Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"A server error occurred"})
    }
}

// Display one of the notes
export const getNotesById = async(req,res)=>{
    const { id }=req.params
    try{
        const result = await query('Select * from notes where id=?', [id])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"A server error occurred"})
    }
}

// Filter Notes
// export const getUserTest = async(req,res)=>{
//     const {id, title} = req.query
//     console.log(id, title)
//     console.log("Terpanggil")
//     try{
//         const result = await query('Select * from notes where id=?', [id,username])
//         return res.status(200).json({success:true, data:result})
//     }catch(e){
//         console.log("Terjadi kesalahan", e)
//         return res.status(500).json({msg:"A server error occurred"})
//     }
// }