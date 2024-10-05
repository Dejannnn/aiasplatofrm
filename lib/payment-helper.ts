import { getConnection } from "@/lib/db";
import { cachedDataVersionTag } from "v8";

export async function handleCheckoutSessionCompleted({session, stripe}: {session: any, stripe: any}){

    //Send request to stripe 
    //CALL FUNCTION createOrUpdateUser when recive response
}
 
export async function createOrUpdateUser(customer: any, customerId: string) {
  try {
    const sql = await getConnection();
    const user = await sql`SELECT * FROM useres WHERE email = ${customer.email}`;
    if (user.length === 0) {
      await sql`INSERT INTO useres (email, full_name, customer_id) VALUES (${customer.emal}, ${customer.name}, ${customerId})`;
    }
  } catch (err) {
    console.error("Error in inserting user", err);
  }
}


async function updateUserSubstriction(sql: any, priceId: string, email: string){
    try{
        await sql`UPDATE users SET price_id = ${priceId}, status= 'active' WHERE email = ${email}`;
    }catch(error){
        console.log(">>>>>Error in inserting user", error);
    }
}