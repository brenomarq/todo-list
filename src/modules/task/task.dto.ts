export type TaskDTO = {
  id?: number;
  title: string;
  isCompleted?: boolean;
  createdAt?: string;
  tagId?: number;
};

export type Filter = {
  isCompleted: string;
};
