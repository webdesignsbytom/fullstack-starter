// Saves typing. Import from config.js removes proc.env
// Use on pages to call
import { JWT_SECRET } from '../utils/config.js'

export const JWT_SECRET = process.env.JWT_SECRET
export const JWT_EXPIRY = process.env.JWT_EXPIRY
export const URL = process.env.HTTP_URL
export const PORT = process.env.PORT
