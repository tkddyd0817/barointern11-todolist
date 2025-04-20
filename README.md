# Todo List Application

Next.js와 TypeScript를 활용한 할 일 관리 애플리케이션입니다.

## 🚀 주요 기능

- ✅ Todo CRUD (Create, Read, Update, Delete) 작업
- 🔄 완료 상태에 따른 필터링
- 📊 실시간 Todo 통계 현황
  - 남은 할 일 개수 표시
  - 완료된 할 일 개수 표시
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
### 2. 서버 상태 관리 (React Query)
### 3. Prefetch & Hydration 전략
### 4. 최적화된 데이터 관리
### 5. UI/UX 고려사항
- 반응형 디자인 (모바일 320~420px, 데스크톱 1024px 이상)
- 시맨틱 마크업
- 로딩 상태 표시
- 에러 처리 및 피드백
- 접근성 고려
### 6. Todo 통계 기능
- 실시간 Todo 수 추적
- 완료/미완료 항목 구분

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
- [O] 실시간 Todo 통계 현황

## 📝 프로젝트 구조

src/
├── app/
│ |
| ├──layout.tsx
│ └── page.tsx
├── components/
│ ├── Loading.tsx
│ ├── TodoContainer.tsx
│ ├── TodoInput.tsx
│ ├── TodoList.tsx
│ ├── TodoItem.tsx
│ ├── TodoStatus.tsx
│ └── TodoFilterTabs.tsx
├── hooks
| └──UseTodos.ts
|
├── api
│ └── TodoApi.ts
├── lib/
│ └── api.ts
├── providers
| └── TodoQueryProvider.tsx
|
└── types/
└── TodoTypes.ts


## 📝 Git 커밋 컨벤션

커밋 메시지는 다음과 같은 형식을 따릅니다:
```git commit -m "[Type]: [Subject]"```

### 커밋 타입 (Type)
| 타입 | 설명 |
|------|------|
| `feat` | 새로운 기능 추가, 기존 기능 수정/업데이트 |
| `fix` | 버그 수정 |
| `refactor` | 코드 리팩토링 |
| `chore` | 빌드 업무 수정, 패키지 매니저 수정 등 잡일 |
| `style` | CSS 등 사용자 UI 디자인 변경 |

### 실제 커밋 메시지 예시
```bash
feat: 실시간 Todo 통계 현황기능추가
feat: Todo 필터링 기능 구현
feat: Todo CRUD 기능 구현
style: Todo 컴포넌트 반응형 디자인 적용
refactor: Todo 상태관리 로직 최적화
```

### 커밋 메시지 작성 규칙
- 제목은 50자 이내로 작성
- 직관적인 의미 전달을 위해 직관적인 내용을 작성
















