import mongoose, { model } from 'mongoose';
const medical_recordSchema = new mongoose.Schema({});
export const Medical_record = mongoose.model('Medical_record', medical_recordSchema);
