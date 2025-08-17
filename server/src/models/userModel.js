import { pool } from "../configs/db.js";

export const testDbQuery = async () => {
  const [rows] = await pool.query("SELECT 1 + 1 AS result");
  return rows[0].result;
};
