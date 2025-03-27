import { useCallbacks } from "../store/useCallbacks";
import { useRecoilState } from "recoil";
import { keywordAtom } from "../store";
import { useEffect } from "react";

export const SearchBox = () => {
  const [keyword, setKeyword] = useRecoilState(keywordAtom);

  const { fetchForcast } = useCallbacks();

  useEffect(() => {
    fetchForcast(keyword);
  }, []);

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
      <div
        className="button"
        onClick={() => {
          fetchForcast(keyword);
        }}
      >
        Search
      </div>
    </div>
  );
};
