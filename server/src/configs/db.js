import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "national_sports_federation",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function checkDbConnection() {
  try {
    const conn = await pool.getConnection();
    console.log("✅ MySQL Database connected successfully!");
    conn.release();
  } catch (err) {
    console.error("❌ Failed to connect to MySQL Database:", err.message);
  }
}
