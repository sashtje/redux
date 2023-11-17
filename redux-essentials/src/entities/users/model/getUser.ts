import {RootState} from "../../../app/model/store";

export const getUser = (userId: string) => (state: RootState) => state.users.find(user => user.id === userId);
