import { GetServerSidePropsContext } from 'next';
import { useMemo } from 'react';

const calculateAge = (birthdate: Date): number => {
  const birthDateObj = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }
  return age;
};

const ageCache = new Map<string, number>();

const useAge = (birthdate: Date): number => {
  const cacheKey = birthdate.toISOString();
  const cachedAge = ageCache.get(cacheKey);

  // Return the cached age if it exists or calculate the age and cache it
  return useMemo(() => {
    if (cachedAge !== undefined) {
      return cachedAge;
    }
    const age = calculateAge(birthdate);
    ageCache.set(cacheKey, age);
    return age;
  }, [birthdate, cacheKey, cachedAge]);
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const birthdate = ctx.query.birthdate as string;

  if (!birthdate) {
    return { props: { birthdate: null, age: null } };
  }

  const age = calculateAge(new Date(birthdate));
  return { props: { birthdate, age } };
}

export default useAge;
