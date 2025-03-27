import { useCallbacks } from "../store/useCallbacks";
import { useRecoilState } from "recoil";
import { keywordAtom } from "../store";

export const SearchBox = () => {
  const [keyword, setKeyword] = useRecoilState(keywordAtom);

  const { fetchRealtime, fetchForcast } = useCallbacks();

  return (
    <div className="search-bar">
      <input
        type="text"
        value={keyword}
        placeholder="Enter city name..."
        onChange={(ev) => {
          setKeyword(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          fetchRealtime(keyword);
          fetchForcast(keyword);
        }}
      >
        Search
      </button>
    </div>
  );
};
