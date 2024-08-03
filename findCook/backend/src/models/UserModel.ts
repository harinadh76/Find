import mongoose from "mongoose";

export interface IUser {
    name: string;
    email: string;
    password: string;
}

const UserSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);