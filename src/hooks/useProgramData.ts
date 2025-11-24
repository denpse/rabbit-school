"use client";
import { useTranslations } from "next-intl";
export function useProgramData() {
  const t = useTranslations();

  const programData = [
    {
      description: t("weWorkPage.programs.education.section2.desc1"),
    },
    {
      description: t("weWorkPage.programs.education.section2.desc2"),
    },
    {
      description: t("weWorkPage.programs.education.section2.desc3"),
    },
  ];

  return programData;
}

export function useProgramData1() {
  const t = useTranslations();
  const programData = [
    {
      description: t("weWorkPage.programs.education.section3.desc1"),
    },
    {
      description: t("weWorkPage.programs.education.section3.desc2"),
    },
    {
      description: t("weWorkPage.programs.education.section3.desc3"),
    },
    {
      description: t("weWorkPage.programs.education.section3.desc4"),
    },
  ];

  return programData;
}
export function useVocationalData() {
  const t = useTranslations();
  const programData = [
    {
      description: t("weWorkPage.programs.vocational.section1.desc1"),
    },
    {
      description: t("weWorkPage.programs.vocational.section1.desc2"),
    },
    {
      description: t("weWorkPage.programs.vocational.section1.desc3"),
    },
    {
      description: t("weWorkPage.programs.vocational.section1.desc4"),
    },
    {
      description: t("weWorkPage.programs.vocational.section1.desc5"),
    },
    {
      description: t("weWorkPage.programs.vocational.section1.desc6"),
    },
  ];

  return programData;
}

export function useTeacherTrainingData() {
  const t = useTranslations();
  const programData = [
    {
      description: t("weWorkPage.programs.teacher.section1.desc1"),
    },
    {
      description: t("weWorkPage.programs.teacher.section1.desc2"),
    },
    {
      description: t("weWorkPage.programs.teacher.section1.desc3"),
    },
    {
      description: t("weWorkPage.programs.teacher.section1.desc4"),
    },
    {
      description: t("weWorkPage.programs.teacher.section1.desc5"),
    },
  ];

  return programData;
}
