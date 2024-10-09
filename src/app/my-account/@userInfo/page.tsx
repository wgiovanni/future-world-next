import { validateAccessToken } from "../../../utils/auth/validateAccessToken";

export const dynamic = 'force-dynamic';

export default async function MyAccountPage() {
    const customer = await validateAccessToken();
  
    return (
      <div>
        <h2>Account info</h2>
        <section>
          <p>Nombre {customer?.firstName}</p>
          <p>Email: {customer?.email}</p>
        </section>
      </div>
    );
  }