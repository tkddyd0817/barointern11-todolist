//TodoStatus.tsx  css 완성본
import { FC } from 'react';

import { TodoStatusTypes } from '@/types/TodoTypes';

const TodoStatus: FC<TodoStatusTypes> = ({ remaining, completed }) => {
  return (
<div className="
  mb-3              /* 모바일: 작은 마진 */
  sm:mb-4           /* 데스크톱: 더 큰 마진 */
  p-2               /* 모바일: 작은 패딩 */
  sm:p-3            /* 데스크톱: 더 큰 패딩 */
  rounded-lg
">
  <p className="
    mb-1 
    text-xs         /* 모바일: 더 작은 텍스트 */
    sm:text-sm      /* 데스크톱: 기본 텍스트 크기 */
    text-black-500
    flex            /* 플렉스 레이아웃 사용 */
    items-center    /* 세로 중앙 정렬 */
    gap-1           /* 모바일: 작은 간격 */
    sm:gap-2        /* 데스크톱: 더 큰 간격 */
  ">
    남은 할 일: 
    <span className="
      font-semibold
      text-sm       /* 모바일: 작은 텍스트 */
      sm:text-base  /* 데스크톱: 더 큰 텍스트 */
    ">
      {remaining}
    </span>
  </p>
  <p className="
    text-xs         /* 모바일: 더 작은 텍스트 */
    sm:text-sm      /* 데스크톱: 기본 텍스트 크기 */
    text-black-500
    flex            /* 플렉스 레이아웃 사용 */
    items-center    /* 세로 중앙 정렬 */
    gap-1           /* 모바일: 작은 간격 */
    sm:gap-2        /* 데스크톱: 더 큰 간격 */
  ">
    완료된 일: 
    <span className="
      font-semibold
      text-sm       /* 모바일: 작은 텍스트 */
      sm:text-base  /* 데스크톱: 더 큰 텍스트 */
    ">
      {completed}
    </span>
  </p>
</div>
  );
};

export default TodoStatus;

