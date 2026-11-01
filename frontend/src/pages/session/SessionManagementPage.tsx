import { useMemo, useState, type FormEvent } from "react";

type SessionType = 'group' | 'pt';
type SessionStatus = '모집 중' | '비공개';

interface FitnessSession {
  id: number;
  name: string;
  type: SessionType;
  branch: string;
  trainer: string;
  schedule: string;
  status: SessionStatus;
}

interface Props {
  classes?: FitnessSession[];
  onCreate?: () => void;
  onEdit?: (item: FitnessSession) => void;
  onDetail?: (item: FitnessSession) => void;
}

const sampleSessions: FitnessSession[] = [
  {
    id: 1,
    name: '모닝 플로우 요가',
    type: 'group',
    branch: '강남점',
    trainer: '이지은',
    schedule: '월/수/금 09:00',
    status: '모집 중'  
  },
  {
    id: 2,
    name: '리포머 필라테스',
    type: 'group',
    branch: '성수점',
    trainer: '박서연',
    schedule: '화/목 19:00',
    status: '모집 중'  
  },
  {
    id: 3,
    name: '바디 밸런스 PT',
    type: 'pt',
    branch: '강남점',
    trainer: '김도윤',
    schedule: '가능 시간 선택',
    status: '모집 중'  
  },
  {
    id: 4,
    name: '코어 & 스트레칭',
    type: 'group',
    branch: '잠실점',
    trainer: '정하늘',
    schedule: '월/수 20:00',
    status: '비공개'  
  },
  {
    id: 5,
    name: '체형 교정 PT',
    type: 'pt',
    branch: '성수점',
    trainer: '최민준',
    schedule: '가능 시간 선택',
    status: '모집 중'  
  },
];

const PAGE_SIZE = 2;

export default function ClassManagementPage({
  classes = sampleSessions,
  onCreate,
  onEdit,
  onDetail,
}: Props) {
  const [branch, setBranch] = useState("all");
  const [type, setType] = useState<"all" | SessionType>("all");
  const [status, setStatus] = useState<"all" | SessionStatus>("all");
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const branches = useMemo(
    () => [...new Set(classes.map((item) => item.branch))],
    [classes],
  );

  const branchSessions = classes.filter(
    (item) => branch === 'all' || item.branch === branch,
  );

  const filteredSessions = branchSessions.filter((item) => {
    const matchesType = type === 'all' || item.type === type;
    const matchesStatus = status === 'all' || item.status === status;

    const keyword = query.trim().toLocaleLowerCase('ko-KR');
    const searchTarget 
      = `${item.name} ${item.trainer}`.toLocaleLowerCase('ko-KR');
    
    const matchesQuery = keyword === '' || searchTarget.includes(keyword);

    return matchesType && matchesStatus && matchesQuery;
  });

  const counts = {
    all: branchSessions.length,
    group: branchSessions.filter((item) => item.type === 'group').length,
    pt: branchSessions.filter((item) => item.type === 'pt').length,
    open: branchSessions.filter((item) => item.status === '모집 중').length,
  };

  const totalPages = Math.max(
    1,
    Math.ceil(filteredSessions.length / PAGE_SIZE),
  );

  const currentPage = Math.min(page, totalPages);

  const startIndex = (currentPage - 1) * PAGE_SIZE;

  const visibleSessions = filteredSessions.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setQuery(searchInput);
    setPage(1);
  }

  function resetFilters() {
    setBranch("all");
    setType("all");
    setStatus("all");
    setSearchInput("");
    setQuery("");
    setPage(1);
  }

  return (
    <main>
      <h1>수업 관리</h1>

      <section aria-label="수업 운영 요약">
        <p>전체 수업: {counts.all}</p>
        <p>그룹 클래스: {counts.group}</p>
        <p>1:1 PT: {counts.pt}</p>
        <p>모집 중: {counts.open}</p>
      </section>

      <button
        type="button"
        onClick={onCreate}
        disabled={!onCreate}
      >+ 수업 등록</button>

      <label>
        운영 지점{" "}
        <select 
          value={branch}
          onChange={(event) => {
            setBranch(event.target.value);
            setPage(1);
          }}
        >
          <option value="all">전체 지점</option>

          {branches.map((branchName) => (
            <option key={branchName} value={branchName}>
              {branchName}
            </option>
          ))}
        </select>
      </label>

      <div>
        <button type="button" onClick={() => {
          setType("all");
          setPage(1);
        }}>전체</button>
        <button type="button" onClick={() => {
          setType("group");
          setPage(1);
        }}>그룹 클래스</button>
        <button type="button" onClick={() => {
          setType("pt");
          setPage(1);
        }}>1:1 PT</button>
      </div>

      <div>
        <span>공개 상태: </span>

        <button type="button" onClick={() => {
          setStatus("all");
          setPage(1);
        }}>전체 상태</button>
        <button type="button" onClick={() => {
          setStatus("모집 중");
          setPage(1);
        }}>모집 중</button>
        <button type="button" onClick={() => {
          setStatus("비공개");
          setPage(1);
        }}>비공개</button>
      </div>

      <p>현재 조건: {branch} / {type} / {status}</p>

      <form onSubmit={handleSearch}>
        <label>
          수업명 또는 트레이너{" "}
          <input 
            type="search"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="검색어를 입력하세요."
          />
        </label>

        <button type="submit">검색</button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">수업명</th>
            <th scope="col">유형</th>
            <th scope="col">지점</th>
            <th scope="col">담당</th>
            <th scope="col">일정</th>
            <th scope="col">상태</th>
            <th scope="col">관리</th>
          </tr>
        </thead>

        <tbody>
          {visibleSessions.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.type==="group" ? "그룹" : "1:1 PT"}</td>
              <td>{item.branch}</td>
              <td>{item.trainer}</td>
              <td>{item.schedule}</td>
              <td>{item.status}</td>
              <td>
                <button
                  type="button"
                  onClick={() => onEdit?.(item)}
                  disabled={!onEdit}
                >수정</button>

                <button
                  type="button"
                  onClick={() => onDetail?.(item)}
                  disabled={!onDetail}
                >상세</button>
              </td>
            </tr>
          ))}
          {filteredSessions.length === 0 && (
            <tr>
              <td colSpan={7}>
                <p>검색 결과가 없습니다.</p>
                <button type="button" onClick={resetFilters}>필터 초기화</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <nav aria-label="수업 목록 페이지">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setPage(currentPage -1)}
        >이전</button>

        <span>
          {" "}{currentPage} / {totalPages} 페이지{" "}
        </span>

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => setPage(currentPage + 1)}
        >다음</button>
      </nav>
    </main>
  );
}