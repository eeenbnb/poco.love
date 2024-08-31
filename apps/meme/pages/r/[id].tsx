import { Text } from "@poco.love/components";
import { GetServerSideProps, NextPage } from "next";

const Page: NextPage<{ id: string }> = ({ id }) => {
  return <Text>not found:{id}</Text>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect: { [key: string]: string } = {
    twitter: "https://x.com/meme__poco",
    udn2: "https://x.com/udon_no_nikomi",
    "1ac73c8b": "https://x.com/katsudon_udn2", // NOTE: CRC32
  };
  const { id } = ctx.query;

  if (typeof id === "string" && redirect[id]) {
    return {
      redirect: {
        statusCode: 301,
        destination: redirect[id],
      },
    };
  }

  return {
    props: { id },
  };
};

export default Page;
