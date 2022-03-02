import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">학력</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              전공
            </h5>
            <p className="font-semibold">학교 및 학원(졸업 및 이수 연도)</p>
            <p className="my-3">
              내용
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">경력</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">회사</h5>
            <p className="font-semibold">프로젝트이름</p>
            <p className="my-3">내용</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">기술스택</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">툴 & 소프트웨어</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
