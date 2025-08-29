import React, { useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { formConfig, Chapter, Screen, Question as QuestionType } from "./config";
import Question from "./components/Question";
import "./transitions.css";

type FormValues = { [questionId: string]: any };

const App: React.FC = () => {
  const [chapterIndex, setChapterIndex] = useState(0);
  const [screenIndex, setScreenIndex] = useState(0);

  const currentChapter: Chapter = formConfig[chapterIndex];
  const currentScreen: Screen = currentChapter.screens[screenIndex];

  const nodeRef = useRef<HTMLDivElement>(null);

  // Yup schema for current screen
  const schema = yup.object(
    currentScreen.questions.reduce((acc, q) => {
      if (q.required) {
        if (q.id === "email") {
          acc[q.id] = yup
            .string()
            .required("This field is required")
            .matches(
              /^.+@(gmail\.com|organizationname\.ac\.in)$/,
              "Email must be in @gmail.com form"
            );
        } else if (q.type === "checkbox") {
          acc[q.id] = yup.array().min(1, "Select at least one option");
        } else {
          acc[q.id] = yup.string().required("This field is required");
        }
      }
      return acc;
    }, {} as any)
  );

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {},
    mode: "onBlur", // validate when field is blurred
  });

  // Navigate to next screen/chapter
  const onNext = async () => {
    // Validate all fields on current screen, even if untouched
    const valid = await trigger(currentScreen.questions.map((q) => q.id));
    if (!valid) return; // stop if any invalid

    // move to next screen or chapter
    if (screenIndex < currentChapter.screens.length - 1) {
      setScreenIndex(screenIndex + 1);
    } else if (chapterIndex < formConfig.length - 1) {
      setChapterIndex(chapterIndex + 1);
      setScreenIndex(0);
    }
  };

  // Navigate back
  const onBack = () => {
    if (screenIndex > 0) setScreenIndex(screenIndex - 1);
    else if (chapterIndex > 0) {
      const prevChapter = formConfig[chapterIndex - 1];
      setChapterIndex(chapterIndex - 1);
      setScreenIndex(prevChapter.screens.length - 1);
    }
  };

  // Final submit
  const onSubmit = (data: FormValues) => {
    console.log("Final Answers:", data);
    alert("Check console for submitted answers!");
  };

  const isLastScreen =
    chapterIndex === formConfig.length - 1 &&
    screenIndex === currentChapter.screens.length - 1;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-200 via-pink-200 to-yellow-100 p-4">
      <div className="w-full max-w-md bg-white/90 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">{currentChapter.title}</h2>
        <h3 className="text-lg mb-4 text-center">{currentScreen.title}</h3>

        <TransitionGroup component={null}>
          <CSSTransition
            key={currentScreen.id}
            timeout={300}
            classNames="screen"
            nodeRef={nodeRef}
          >
            <div ref={nodeRef}>
              <form onSubmit={handleSubmit(onSubmit)}>
                {currentScreen.questions.map((q) => (
                  <Controller
                    key={q.id}
                    name={q.id}
                    control={control}
                    render={({ field }) => (
                      <Question
                        question={q}
                        value={field.value}
                        onChange={field.onChange}
                        error={errors[q.id]?.message as string}
                      />
                    )}
                  />
                ))}

                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={onBack}
                    disabled={chapterIndex === 0 && screenIndex === 0}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                  >
                    Back
                  </button>

                  {!isLastScreen && (
                    <button
                      type="button"
                      onClick={onNext}
                      className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      Continue
                    </button>
                  )}

                  {isLastScreen && (
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
