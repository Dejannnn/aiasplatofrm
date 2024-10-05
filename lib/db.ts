// app/actions.ts
import { neon } from "@neondatabase/serverless";

export async function getConnection() {
    const sql = neon(process.env.DATABASE_URL!);
    return sql;
}