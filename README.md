# Todo List Application

Next.js와 TypeScript를 활용한 할 일 관리 애플리케이션입니다.

## 🚀 주요 기능

- ✅ Todo CRUD (Create, Read, Update, Delete) 작업
- 🔄 완료 상태에 따른 필터링
- 📱 반응형 디자인 (모바일 & 데스크톱)
- 🎯 TypeScript를 통한 타입 안전성
- 🔄 React Query를 활용한 서버 상태 관리
- ⚡ Prefetch를 통한 성능 최적화

## 🛠 사용 기술

- **Frontend**
  - Next.js 14 (App Router)
  - TypeScript
  - Tanstack Query (React Query)
  - Tailwind CSS
  - Lucide React (아이콘)

- **Backend**
  - json-server

## 📦 설치 및 실행

```bash
# 프로젝트 클론
git clone [repository-url]

# 의존성 설치
yarn install

# json-server 실행
yarn server

# 개발 서버 실행
yarn dev
```

## 🌟 주요 구현 사항

### 1. TypeScript 타입 안전성
```typescript
interface Todo {
  id: string;
  title: string;
  completed: boolean;
  date: string;
}
```

### 2. 서버 상태 관리 (React Query)
```typescript
// Prefetch 구현
// app/page.tsx
export default async function Homepage() {
  const queryClient = new QueryClient();
  
  // 초기 데이터 프리페치
  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TodoClient />
    </HydrationBoundary>
  );
}

// TodoContainer.tsx
export default function TodoContainer() {
  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 5 * 1000, // 5초 동안 데이터 신선도 유지
  });
}
```

### 3. Prefetch & Hydration 전략
```typescript
// app/page.tsx
export default async function HomePage() {
  const queryClient = new QueryClient();
  
  // 초기 데이터 프리페치
  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TodoContainer />
    </HydrationBoundary>
  );
}

// TodoContainer.tsx
export default function TodoContainer() {
  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 5 * 1000, // 5초 동안 데이터 신선도 유지
  });
}
```

### 4. 최적화된 데이터 관리
```typescript
// Optimistic Updates with Prefetch
const updateTodo = useMutation({
  mutationFn: updateTodoItem,
  onMutate: async (newTodo) => {
    await queryClient.cancelQueries({ queryKey: ['todos'] });
    
    // 이전 상태 저장
    const previousTodos = queryClient.getQueryData(['todos']);
    
    // 낙관적 업데이트
    queryClient.setQueryData(['todos'], (old) => {...});
    
    return { previousTodos };
  },
});
```

이렇게 실제 구현된 내용에 맞게 수정하는 것이 더 정확할 것 같습니다! 👍

### 5. UI/UX 고려사항
- 반응형 디자인 (모바일 320~420px, 데스크톱 1024px 이상)
- 시맨틱 마크업
- 로딩 상태 표시
- 에러 처리 및 피드백
- 접근성 고려

## 📱 반응형 디자인

- 모바일 (320~420px)
  - 컴팩트한 레이아웃
  - 터치 친화적 UI
  - 최적화된 버튼 크기

- 데스크톱 (1024px 이상)
  - 여유로운 레이아웃
  - 호버 효과
  - 확장된 기능성

## 🔄 API 엔드포인트

```typescript
// Todo CRUD 작업
GET    /todos           // 전체 Todo 목록
POST   /todos           // Todo 생성
PUT    /todos/:id       // Todo 수정
DELETE /todos/:id       // Todo 삭제

// 필터링
GET    /todos?completed=true    // 완료된 Todo
GET    /todos?completed=false   // 미완료 Todo
```

## 🎯 추가 구현 사항

- [O] 낙관적 업데이트 (Optimistic Updates)
- [O] 에러 바운더리
- [O] 로딩 상태 처리
- [O] 반응형 디자인
- [O] 접근성 고려
- [O] Prefetch를 통한 성능 최적화
- [O] Hydration 전략 구현

## 📝 프로젝트 구조

```
src/
├── app/
│   | 
|   ├──layout.tsx
│   └── page.tsx
├── components/
│   ├── Loading.tsx
│   ├── TodoContainer.tsx
│   ├── TodoInput.tsx
│   ├── TodoList.tsx
│   ├── TodoItem.tsx
│   └── TodoFilterTabs.tsx
├── hooks
|   └──UseTodos.ts
|
├── api
│   └── TodoApi.ts
├── lib/
│   └── api.ts
├── providers
|   └── TodoQueryProvider.tsx
| 
└── types/
    └── TodoTypes.ts
```

## 🤝 기여 방법

1. 이 저장소를 포크합니다
2. 새로운 브랜치를 생성합니다
3. 변경사항을 커밋합니다
4. 브랜치에 푸시합니다
5. Pull Request를 생성합니다

## 📜 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다.
