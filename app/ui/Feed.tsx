import { getIGPosts } from "../lib/data";
import Carousel from "./storybook_components/Carousel";

export default async function Feed() {
  const posts = await getIGPosts();

  return <Carousel posts={posts} />;
}
