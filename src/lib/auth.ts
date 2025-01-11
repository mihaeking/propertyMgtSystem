import bcrypt from "bcryptjs";

/**
 * Hashes a plain-text password using bcrypt.
 * @param password - The plain-text password to hash.
 * @returns The hashed password.
 */
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10; 
  return await bcrypt.hash(password, saltRounds);
};

/**
 * Compares a plain-text password with a hashed password.
 * @param password - The plain-text password.
 * @param hashedPassword - The hashed password to compare against.
 * @returns True if the passwords match, false otherwise.
 */
export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};
