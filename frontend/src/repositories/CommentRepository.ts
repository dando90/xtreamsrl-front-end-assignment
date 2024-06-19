import { BaseRepository } from "./BaseRepository";
import { CommentAPIGet, CommentAPIPost } from "../types/comment";

class CommentsRepository extends BaseRepository<CommentAPIGet, CommentAPIPost> {
  collection = "comments";
}

export default CommentsRepository;
