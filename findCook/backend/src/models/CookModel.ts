import e from "express";
import mongoose from "mongoose";

export interface ICook {
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    city: string;
    description: string;
    cookRating: number;
    cookRatingCount: number;
    type: string;
    experience: number;
    pricePerMonth: number;
    pricePerServing: number;
    status: string;
}

const CookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    city: { type: String },
    description: { type: String },
    cookRating: { type: Number },
    cookRatingCount: { type: Number },
    type: { type: String },
    experience: { type: Number },
    pricePerMonth: { type: Number },
    pricePerServing: { type: Number },
    status: { type: String }
});

export const CookModel = mongoose.model('Cook', CookSchema);