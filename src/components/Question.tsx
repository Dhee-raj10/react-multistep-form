import React from "react";
import { Question as QuestionType } from "../config";

interface Props {
  question: QuestionType;
  value: any;
  onChange: (val: any) => void;
  error?: string;
}

const Question: React.FC<Props> = ({ question, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">{question.label}</label>

      {question.type === "text" && (
        <input
          type="text"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full p-2 border rounded ${
            error ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-300`}
        />
      )}

      {question.type === "radio" && (
        <div className="flex flex-col gap-2">
          {question.options?.map((opt) => (
            <label
              key={opt}
              className={`px-3 py-2 border rounded cursor-pointer ${
                value === opt
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white border-gray-300"
              }`}
            >
              <input
                type="radio"
                name={question.id}
                value={opt}
                checked={value === opt}
                onChange={() => onChange(opt)}
                className="hidden"
              />
              {opt}
            </label>
          ))}
        </div>
      )}

      {question.type === "checkbox" && (
        <div className="flex flex-wrap gap-2">
          {question.options?.map((opt) => {
            const checked = Array.isArray(value) && value.includes(opt);
            return (
              <label
                key={opt}
                className={`px-3 py-2 border rounded cursor-pointer ${
                  checked
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white border-gray-300"
                }`}
              >
                <input
                  type="checkbox"
                  value={opt}
                  checked={checked}
                  onChange={() => {
                    if (checked) {
                      onChange(value.filter((v: string) => v !== opt));
                    } else {
                      onChange([...(value || []), opt]);
                    }
                  }}
                  className="hidden"
                />
                {opt}
              </label>
            );
          })}
        </div>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Question;
