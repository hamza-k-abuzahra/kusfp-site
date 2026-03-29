import React from "react";
import PageSection from "../components/PageSection";
import { ROLES_DATA } from "@/constants";

const YourRolePage: React.FC = () => {
  return (
    <>
      <PageSection title="Your Role">
        <div className="space-y-4 text-lg text-[var(--text-secondary)] max-w-3xl mx-auto text-center">
          <p>
            Change is not driven by a single voice, but by the collective effort
            of individuals taking responsibility in their own spaces.
          </p>
          <p>
            Whether you are a student, a community member, or simply an
            individual seeking to make a difference, your role matters.
          </p>
        </div>
      </PageSection>

      <div className="bg-[var(--background-secondary)] py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {ROLES_DATA.map((role, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                {role.title}
              </h3>

              <p className="mt-3 text-[var(--text-muted)]">
                {role.description}
              </p>

              <ul className="mt-6 space-y-3 list-disc list-inside text-[var(--text-secondary)]">
                {role.actions.map((action, i) => (
                  <li key={i}>{action}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default YourRolePage;