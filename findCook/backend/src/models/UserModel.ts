import mongoose from "mongoose";

export interface IUser {
    name: string;
    email: string;
    password: string;
    phone?: string;
    address?: string;
    city?: string;
    gender?: string;
}

const UserSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    gender: { type: String },
});

export const UserModel = mongoose.model<IUser>('User', UserSchema); 