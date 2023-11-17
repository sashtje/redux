import React from 'react';
import { useSelector } from 'react-redux';

import {getUser} from "../../model/getUser";

interface PostAuthorProps {
  userId: string;
}

export const PostAuthor = ({ userId }: PostAuthorProps) => {
  const author = useSelector(getUser(userId));

  return <span>by {author ? author.name : 'Unknown author'}</span>
}
