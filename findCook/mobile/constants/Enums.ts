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

export interface IUser {
    name: string;
    email: string;
    password: string;
    phone?: string;
    address?: string;
    city?: string;
    gender?: string;
    bookings?: string[];
}