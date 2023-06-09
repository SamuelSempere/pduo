'use client'
import { useUser } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import styles from './../page.module.css'
import { useRouter } from 'next/navigation'

const Profile = () => 
{
  const router = useRouter()
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
console.log(user)
  return (
      user && (
          <div className={styles.container}>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={() => router.push('/api/auth/logout')}>Cerrar sesión</button>
          </div>
      )
  );
}
export default withPageAuthRequired(Profile)