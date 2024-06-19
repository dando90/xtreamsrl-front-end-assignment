import { BaseRepository } from "./BaseRepository";
import { CommentAPI } from "../types/comment";

class CommentsRepository extends BaseRepository<CommentAPI, CommentAPI> {
  collection = "comments";
}

export default CommentsRepository;
