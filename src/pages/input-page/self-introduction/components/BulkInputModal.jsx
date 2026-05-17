// BulkInputModal.jsx
import { useState } from "react";
import QuestionCard from "./QuestionCard";

function BulkInputModal({ onClose, onConfirm }) {
  const [question, setQuestion] = useState("");
  const [content, setContent] = useState("");

  const handleConfirm = () => {
    onConfirm?.({ question, content });
    onClose?.();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45"
      onClick={(e) => { if (e.target === e.currentTarget) onClose?.(); }}
    >
      <div className="relative w-full max-w-[640px] mx-4 bg-white rounded-[12px] border border-[#E0E0E0] px-[28px] pt-[28px] pb-[24px]">

        {/* 닫기 버튼 */}
        <button
          className="absolute top-[16px] right-[16px] text-[#717171] hover:text-black transition-colors"
          onClick={onClose}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* 헤더 */}
        <h2 className="text-[18px] font-medium text-black mb-[6px]">일괄 입력하기</h2>
        <p className="text-[14px] text-black mb-[20px]">
          전체 내용을 한 번에 작성·붙여넣기하여 입력할 수 있습니다.
        </p>

        {/* QuestionCard */}
        <QuestionCard
          question={question}
          content={content}
          showPlus={false}
          showMinus={false}
          onContentChange={(q, c) => {
            setQuestion(q);
            setContent(c);
          }}
        />

        {/* 확인 버튼 */}
        <div className="mt-[20px] flex justify-center">
          <button
            className="w-[140px] h-[44px] border border-[#717171] rounded-[4px] text-[15px] text-black hover:border-[#09469F] hover:text-[#09469F] transition-colors"
            onClick={handleConfirm}
          >
            확인
          </button>
        </div>

      </div>
    </div>
  );
}

export default BulkInputModal;