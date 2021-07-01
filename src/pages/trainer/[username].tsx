import React from 'react';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';

type Props = {
  firstname: string;
}

const TrainerProfile: React.FC<Props> = ({ firstname }) => {
  return (
    <>
      <Title>{firstname}</Title>
    </>
  )
}

const Title = styled.h1`
  color: blue;
`;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const API_URL = 'https://dev-api.myjijo.com/api/v1';
  const { username } = params;
  const res = await fetch(`${API_URL}/trainer/${username}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ...data.result,
    },
  }
}

export default TrainerProfile;