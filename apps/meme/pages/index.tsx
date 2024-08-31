const Page = () => {
  return null;
};

export const getServerSideProps = async () => {
  return {
    redirect: {
      statusCode: 301,
      destination: "https://www.twitch.tv/meme_poco",
    },
  };
};

export default Page;
