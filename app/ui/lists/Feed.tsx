import { getIGPosts } from "../../lib/data";
import Carousel from "./Carousel";

export default async function Feed() {
  const posts = await getIGPosts();

  return <Carousel posts={posts} />;
}
