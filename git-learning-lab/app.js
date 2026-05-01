const STORAGE_KEY = "git-learning-lab-state-v5";
const THEME_KEY = "git-learning-lab-theme";
const PS_ROOT = "C:\\Training";
const PS_PROMPT = "PS C:\\Training\\OracleGitLab>";
const CODEX_DEFAULT_CWD = "C:\\Users\\Analyst";
const QUIZ_VISIBLE_COUNT = 3;
const QUIZ_EXIT_DELAY_MS = 360;
const QUIZ_OPTION_ORDER_VERSION = 2;
const QUIZ_SESSION_VERSION = 2;
const QUIZ_ROUND_COUNT = 3;
const QUIZ_ROUND_UNLOCK_SCORE = 10;

const oracleLab = {
  folder: "oracle-git-lab",
  folderDisplay: "OracleGitLab",
  branchName: "feature/ccs-emergency-orders-zip-prior-week-demo",
  branchLabel: "feature/ccs-emergency...",
  ticketTitle: "Emergency Orders by ZIP Code - Prior Week",
  firstFile: "README.md",
  firstFileContent: "Emergency Orders by ZIP - Prior Week",
  firstCommitMessage: "Add ticket context",
  featureFile: "ccs/sql/meters/ccs_emergency_response_activity_by_zip_prior_week.sql",
  featureFileLabel: "ccs/sql/meters/...prior_week.sql",
  featureCommitMessage: "Add emergency orders ZIP report"
};

const ORACLE_REPO_ROOT = "C:\\Repositories\\Oracle";

const projectLab = {
  folder: "longer-oracle-project",
  folderDisplay: "LongerOracleProject",
  branchName: "feature/ccs-modeling-date-dimension",
  branchLabel: "feature/ccs-modeling...",
  projectRoot: "projects/ccs-dimensional-modeling",
  readmeFile: "projects/ccs-dimensional-modeling/README.md",
  decisionFile: "projects/ccs-dimensional-modeling/decision-index.md",
  workstreamsFile: "projects/ccs-dimensional-modeling/workstreams.md",
  readmeContent: "Project: CCS dimensional modeling continuation",
  decisionContent: "Decision index: capture modeling choices and rationale",
  workstreamsContent: "Workstreams: dimensions, facts, validation, promotion",
  capsuleCommitMessage: "Add CCS dimensional modeling project capsule",
  workstreamCommitMessage: "Update date dimension workstream notes"
};

const oracleRepoMap = [
  {
    type: "folder",
    name: ".azuredevops",
    note: "ADO pull request template and repo process files",
    children: [{ type: "file", name: "pull_request_template.md", note: "PR description checklist" }]
  },
  {
    type: "folder",
    name: "ccs",
    note: "Customer Care and Service reporting assets",
    children: [
      {
        type: "folder",
        name: "bip",
        note: "BI Publisher models, reports, and templates",
        children: [
          { type: "folder", name: "data_models", note: "BIP data model definitions" },
          { type: "folder", name: "reports", note: "BIP report definitions" },
          { type: "folder", name: "templates", note: "BIP template files" }
        ]
      },
      {
        type: "folder",
        name: "sql",
        note: "CCS SQL organized by business area",
        children: [
          { type: "folder", name: "accounts", note: "Account and receivables extracts" },
          { type: "folder", name: "billing", note: "Billing and usage extracts" },
          {
            type: "folder",
            name: "meters",
            note: "Meter, field activity, and emergency response SQL",
            labTarget: "container",
            children: [
              { type: "file", name: "README.md", note: "Folder notes and conventions" },
              {
                type: "file",
                name: "ccs_emergency_response_activity_extract.sql",
                note: "Existing neighboring file learners can inspect for patterns"
              },
              {
                type: "file",
                name: "ccs_emergency_response_activity_by_zip_prior_week.sql",
                note: "New SQL asset created during this lab",
                path: oracleLab.featureFile,
                labTarget: "created"
              }
            ]
          },
          { type: "folder", name: "modeling", note: "CCS dimensional modeling assets" },
          { type: "folder", name: "shared", note: "Shared CCS extracts and reusable logic" }
        ]
      }
    ]
  },
  { type: "folder", name: "docs", note: "Shared documentation and process notes" },
  {
    type: "folder",
    name: "fusion",
    note: "Fusion SQL and reporting assets",
    children: [
      {
        type: "folder",
        name: "sql",
        note: "Fusion subject-area SQL",
        children: [
          { type: "folder", name: "ap", note: "Accounts payable" },
          { type: "folder", name: "ar", note: "Accounts receivable" },
          { type: "folder", name: "gl", note: "General ledger" },
          { type: "folder", name: "ppm", note: "Project portfolio management" }
        ]
      }
    ]
  },
  {
    type: "folder",
    name: "projects",
    note: "Project workspaces, context, and deliverables",
    children: [
      {
        type: "folder",
        name: "ccs-dimensional-modeling",
        note: "Longer project capsule for ongoing CCS dimensional modeling work",
        labTarget: "container",
        children: [
          {
            type: "file",
            name: "README.md",
            note: "Brief project purpose, scope, and current starting point",
            path: projectLab.readmeFile,
            labTarget: "created"
          },
          {
            type: "file",
            name: "decision-index.md",
            note: "Short index of decisions, rationale, and dates",
            path: projectLab.decisionFile,
            labTarget: "created"
          },
          {
            type: "file",
            name: "workstreams.md",
            note: "Optional workstream tracker when collaborators or parallel work are involved",
            path: projectLab.workstreamsFile,
            labTarget: "created"
          }
        ]
      }
    ]
  },
  { type: "folder", name: "tests", note: "Validation and test assets" },
  { type: "folder", name: "wacs", note: "WACS reporting assets" },
  { type: "file", name: "AGENTS.md", note: "Repo-local guidance for coding agents" },
  { type: "file", name: "README.md", note: "Repo overview; this lab creates a root README-style context file", path: oracleLab.firstFile, labTarget: "created" }
];

const modules = [
  {
    id: "git-basics",
    title: "GIT Lab 1: Orientation",
    level: "Beginner",
    time: "60 min",
    description:
      "A hands-on companion to the Oracle-first orientation: start from an ADO-style request, use a task branch, and keep changes reviewable.",
    outcomes: [
      "Anchor work to a ticket",
      "Use a safe task branch",
      "Read status and history",
      "Explain what a PR should communicate"
    ],
    lessons: [
      ["Why Git is here", "Traceability, safer review, and easier handoff."],
      ["Why ADO matters", "The ticket anchors the business request and review context."],
      ["Why review discipline matters", "Branches and PR notes make the handoff easier to audit."]
    ],
    resources: [["Git Docs", "https://git-scm.com/docs"]],
    labTitle: "Emergency orders demo branch",
    labSteps: ["Ticket context", "Init repo", "Commit context", "Branch", "Add SQL asset", "Merge"],
    meetingContext: [
      "Default workflow: ticket -> separate branch -> focused commit -> PR when work needs review.",
      "Demo request: CCS emergency orders by ZIP for the prior completed Monday-Sunday week.",
      "Good habits: small branch, honest validation notes, clear reviewer focus."
    ],
    commands: [
      { cmd: `mkdir ${oracleLab.folder}`, desc: "Creates a training folder for the Oracle workflow demo" },
      { cmd: `cd ${oracleLab.folder}`, desc: "Moves into the Oracle workflow demo folder" },
      { cmd: "git init", desc: "Initializes a new Git repository" },
      { cmd: `"${oracleLab.firstFileContent}" | Out-File README.md`, desc: "Captures the ADO ticket context in a README" },
      { cmd: "git status", desc: "Shows current file changes" },
      { cmd: "git add README.md", desc: "Stages the ticket context for commit" },
      { cmd: `git commit -m "${oracleLab.firstCommitMessage}"`, desc: "Creates the first traceable checkpoint on main" },
      { cmd: `git switch -c ${oracleLab.branchName}`, desc: "Creates and switches to the task branch" },
      { cmd: `edit ${oracleLab.featureFile}`, desc: "Adds the demo SQL file on the task branch" },
      { cmd: "git status", desc: "Shows the branch-specific SQL change" },
      { cmd: `git add ${oracleLab.featureFile}`, desc: "Stages the SQL asset for review" },
      { cmd: `git commit -m "${oracleLab.featureCommitMessage}"`, desc: "Creates a branch commit for the report asset" },
      { cmd: "git switch main", desc: "Returns HEAD to the main branch" },
      { cmd: `git merge ${oracleLab.branchName}`, desc: "Fast-forwards main to include the task branch work" }
    ],
    quiz: [
      {
        question: "In the team workflow, what should anchor the work?",
        options: ["ADO ticket", "Random local file", "Chat memory", "An unnamed branch"],
        answer: "ADO ticket",
        feedback: "The ticket keeps the business request and review context visible."
      },
      {
        question: "What does git add do?",
        options: ["Stage", "Delete", "Push", "Clone"],
        answer: "Stage",
        feedback: "git add stages the selected file snapshot for the next commit."
      },
      {
        question: "What is a commit?",
        options: ["Snapshot", "Folder", "User", "Branch"],
        answer: "Snapshot",
        feedback: "A commit is a checkpoint containing a file snapshot and message."
      },
      {
        question: "git status shows?",
        options: ["Changes", "Users", "Pipelines", "Secrets"],
        answer: "Changes",
        feedback: "git status summarizes staged, unstaged, and untracked changes."
      },
      {
        question: "Why use a separate branch?",
        options: ["Safer review", "Hide the work", "Skip validation", "Replace ADO"],
        answer: "Safer review",
        feedback: "Branches keep work isolated so review and handoff are easier."
      },
      {
        question: "What happens in this lab's fast-forward merge?",
        options: ["main moves to the feature commit", "Git deletes the SQL", "HEAD leaves the repository", "The staging area becomes a branch"],
        answer: "main moves to the feature commit",
        feedback: "Because main did not move independently, Git can move the main branch pointer forward."
      }
    ]
  },
  {
    id: "project-work",
    title: "GIT Lab 2: Projects",
    level: "Beginner",
    time: "45 min",
    description:
      "A second ADO methodology lab: create a small project capsule on main, keep decisions visible, then branch for day-to-day workstreams.",
    outcomes: [
      "Distinguish everyday branch work from longer project tracking",
      "Create README and decision-index files on main",
      "Use workstreams when parallel work or collaborators are involved",
      "Branch from the project capsule for focused work"
    ],
    lessons: [
      ["Use case 2", "Longer project work starts with visible project context, not a single loose SQL file."],
      ["Project capsule", "README and decision-index keep the starting point and choices legible on main."],
      ["Workstreams", "Parallel or multi-day work needs a small tracker so handoffs do not depend on chat memory."]
    ],
    resources: [["Git Docs", "https://git-scm.com/docs"]],
    labTitle: "GIT Lab 2: Projects",
    startLabel: "Start Lesson",
    folder: projectLab.folder,
    folderDisplay: projectLab.folderDisplay,
    repoPaths: [projectLab.readmeFile, projectLab.decisionFile, projectLab.workstreamsFile],
    repoContainerPaths: [projectLab.projectRoot],
    labSteps: [
      "Choose methodology",
      "Create project capsule",
      "Commit on main",
      "Branch workstream",
      "Update workstream",
      "Merge"
    ],
    meetingContext: [
      "Everyday work: use a focused branch tied to one ADO request.",
      "Longer projects: keep brief README and decision-index files on main so context survives handoffs.",
      "Use workstreams.md when collaborators or parallel workstreams are moving at the same time."
    ],
    commands: [
      { cmd: `mkdir ${projectLab.folder}`, desc: "Creates a training folder for the longer project workflow" },
      { cmd: `cd ${projectLab.folder}`, desc: "Moves into the longer project workflow folder" },
      { cmd: "git init", desc: "Initializes a new Git repository" },
      { cmd: `"${projectLab.readmeContent}" | Out-File ${projectLab.readmeFile}`, desc: "Creates the brief project README on main" },
      { cmd: `"${projectLab.decisionContent}" | Out-File ${projectLab.decisionFile}`, desc: "Creates the decision index on main" },
      { cmd: `"${projectLab.workstreamsContent}" | Out-File ${projectLab.workstreamsFile}`, desc: "Creates the workstream tracker for parallel work" },
      { cmd: "git status", desc: "Shows the project capsule files before staging" },
      {
        cmd: `git add ${projectLab.readmeFile} ${projectLab.decisionFile} ${projectLab.workstreamsFile}`,
        desc: "Stages the project capsule files together"
      },
      { cmd: `git commit -m "${projectLab.capsuleCommitMessage}"`, desc: "Commits the project capsule on main" },
      { cmd: `git switch -c ${projectLab.branchName}`, desc: "Creates a focused branch for one workstream" },
      { cmd: `edit ${projectLab.workstreamsFile}`, desc: "Updates workstream notes on the branch" },
      { cmd: "git status", desc: "Shows the branch-specific workstream change" },
      { cmd: `git add ${projectLab.workstreamsFile}`, desc: "Stages the workstream update" },
      { cmd: `git commit -m "${projectLab.workstreamCommitMessage}"`, desc: "Commits the focused workstream update" },
      { cmd: "git switch main", desc: "Returns to the main branch" },
      { cmd: `git merge ${projectLab.branchName}`, desc: "Fast-forwards main to include the workstream update" }
    ],
    quiz: [
      {
        question: "For longer Oracle project work, what should be visible on main?",
        options: ["README and decision-index", "Only chat notes", "Only a feature branch", "A private scratch file"],
        answer: "README and decision-index",
        feedback: "Longer work needs durable context on main so future handoffs are legible."
      },
      {
        question: "When is workstreams.md most useful?",
        options: ["Collaborators or parallel work", "A one-line typo fix", "Deleting the repo", "Skipping PR notes"],
        answer: "Collaborators or parallel work",
        feedback: "Use workstreams when multiple people or moving parts need a shared status view."
      },
      {
        question: "After the project capsule exists, where should everyday changes happen?",
        options: ["A focused branch", "Directly on main", "Only in memory", "Outside the repo"],
        answer: "A focused branch",
        feedback: "The capsule stays visible on main; day-to-day work still happens on reviewable branches."
      }
    ]
  }
];

const lessonCommandGroups = [
  [0, 1, 2, 3, 4],
  [5],
  [6],
  [7, 8, 9],
  [10, 11],
  [12, 13]
];

const projectLessons = [
  {
    title: "Choose the Methodology",
    concept:
      "Everyday requests stay branch-focused. Longer Oracle projects need a small project capsule so context survives beyond one task.",
    task: "Create the training folder and initialize Git for the longer project workflow.",
    hint: "Use case 2 starts by making the project legible before asking for help or changing governed assets.",
    complete: (state) => state.guidedStep >= 3
  },
  {
    title: "Project Capsule on Main",
    concept:
      "README and decision-index are the required starting point for longer work. workstreams.md is added when collaborators or parallel tracks are involved.",
    task: "Create README, decision-index, and workstreams files under the project folder.",
    hint: "These files are intentionally brief. They prevent the project from depending on chat memory.",
    complete: (state) => state.guidedStep >= 7
  },
  {
    title: "Commit Project Context",
    concept:
      "The project capsule belongs on main because it is shared context, not one person's feature work.",
    task: "Stage and commit the project context files on main.",
    hint: "This makes decisions and next steps visible before workstreams branch out.",
    complete: (state) => state.guidedStep >= 9
  },
  {
    title: "Branch a Workstream",
    concept:
      "Once the capsule exists, everyday work returns to the normal branch model.",
    task: "Create a focused branch and update the workstream tracker there.",
    hint: "The branch carries one workstream while main keeps the project map.",
    complete: (state) => state.guidedStep >= 12
  },
  {
    title: "Commit Workstream Progress",
    concept:
      "A workstream commit should explain what moved, what remains open, and what reviewers should inspect.",
    task: "Stage and commit the workstream update.",
    hint: "Small commits keep longer projects reviewable even when the project is broad.",
    complete: (state) => state.guidedStep >= 14
  },
  {
    title: "Merge and Continue",
    concept:
      "Merging the branch updates the shared project map. The next workstream can branch from that current context.",
    task: "Return to main and fast-forward merge the workstream branch.",
    hint: "Longer projects become a chain of visible decisions and focused branches.",
    complete: (state) => state.guidedStep >= getActiveModule().commands.length || state.taskFlags.merged
  }
];

const projectLessonCommandGroups = [
  [0, 1, 2],
  [3, 4, 5, 6],
  [7, 8],
  [9, 10, 11],
  [12, 13],
  [14, 15]
];

const codexLab = {
  id: "codex-workflow",
  title: "Codex",
  level: "Tool setup",
  time: "Download",
  labTitle: "Official OpenAI setup",
  description:
    "Codex is separate from the Git labs. This lesson covers setup, prompting, safe repo inspection, and reviewable analyst handoff artifacts.",
  outcomes: [
    "Install or open Codex",
    "Sign in with the right account",
    "Choose a repository folder",
    "Start a coding task",
    "Build reviewable repo notes"
  ],
  sections: [
    {
      type: "install",
      title: "Install Codex CLI",
      kicker: "CLI setup",
      intro:
        "Install Codex from PowerShell, sign in, then launch it from the repo folder so it has the right project context.",
      steps: [
        {
          label: "Check Node and npm",
          command: "node --version; npm --version",
          detail: "Confirms the JavaScript runtime and package manager are available before installing Codex."
        },
        {
          label: "Install Codex CLI",
          command: "npm install -g @openai/codex",
          detail: "Installs the Codex command globally so PowerShell can run it from any repo folder."
        },
        {
          label: "Sign in",
          command: "codex login",
          detail: "Starts the sign-in flow. Use the company-approved OpenAI account or API-key workflow."
        },
        {
          label: "Open the repo",
          command: `cd ${ORACLE_REPO_ROOT}`,
          detail: "Move into the Oracle repo before starting a Codex session."
        },
        {
          label: "Start Codex",
          command: "codex",
          detail: "Launches Codex in the current repo. Start in the default review-oriented mode until learners are comfortable."
        }
      ],
      notes: [
        "Run install and login once per workstation, then run codex from the project root when you need help.",
        "If the CLI has trouble on Windows, use the official setup page and follow the current Windows or WSL guidance.",
        "Use git status before and after a Codex session so changes stay visible and reviewable."
      ],
      readyChecklist: [
        "I can confirm Node, npm, Git, and Codex are available.",
        "I know to launch Codex from the repo root, not a random folder.",
        "I can explain why git status belongs before and after a Codex session."
      ],
      updateCommand: "codex --upgrade"
    },
    {
      type: "workflow",
      title: "Codex Onboarding Checklist",
      kicker: "Starter plan",
      intro:
        "Use this as the non-time-based starter path for a new learner. The goal is not speed; it is a repeatable operating rhythm.",
      task: "Work through the minimum setup and safety checks before asking Codex to change repo files.",
      reference: "Access -> repo root -> read-only scan -> branch -> prompt -> review",
      cards: [
        {
          label: "Access and setup",
          command: "codex login",
          detail: "Confirm the CLI opens and the learner knows which approved account or key workflow to use."
        },
        {
          label: "Workspace location",
          command: `cd ${ORACLE_REPO_ROOT}`,
          detail: "Start from the repo root so Codex sees the same files Git and VS Code see."
        },
        {
          label: "Read-only orientation",
          command: "Get-Location; rg --files; git status",
          detail: "Confirm folder, file map, and Git state before using Codex judgment."
        },
        {
          label: "First safe prompt",
          prompt:
            "Inspect this repo before editing. Identify the main folders, likely entry points, validation commands, risks, and open questions. Give me a short plan before changing files."
        },
        {
          label: "Review checkpoint",
          command: "git diff --stat",
          detail: "Inspect the changed-file surface before accepting work into a commit or PR."
        }
      ],
      readyChecklist: [
        "I can launch Codex from the repo root.",
        "I can run read-only orientation commands before edits.",
        "I can ask for inspection and a plan before implementation."
      ],
      formula: "Access -> orient -> branch -> prompt -> review -> validate"
    },
    {
      type: "prompting",
      title: "PACT Prompting Guide",
      kicker: "Prompting framework",
      intro: "Give Codex a working agreement: explain the purpose, grant authority, provide context, and define the task.",
      items: [
        ["Purpose", "Explain the business outcome, why the work matters, and what decision or deliverable it supports."],
        ["Authority", "Give permission to inspect files, use judgment, challenge weak assumptions, and ask before risky changes."],
        ["Context", "Provide the ADO ticket, repo area, known constraints, related files, and any validation expectations."],
        ["Task", "Define the output: orientation, plan, patch, SQL, PR notes, validation checklist, or review findings."]
      ],
      readyChecklist: [
        "I can write a prompt that states the business purpose.",
        "I can give Codex permission to inspect and challenge assumptions.",
        "I can define a narrow output instead of asking for a vague improvement."
      ],
      formula: "Purpose + Authority + Context + Task = better Codex output"
    },
    {
      type: "orientation",
      title: "Using Codex for ADO Ticket Orientation",
      kicker: "Use case #1",
      intro: "Before asking for code changes, use Codex to orient around the business question, repo location, expected output, and review risks.",
      questions: [
        "What business question is this ticket answering?",
        "What terms need definition before work starts?",
        "What date window or reporting period is required?",
        "What output fields are expected?",
        "What assumptions should be captured for review?"
      ],
      prompt:
        "I need to work on this ADO ticket in the Oracle repo.\n\nBefore suggesting code changes, help me orient.\n\nPlease:\n1. Restate the request in plain language.\n2. List the requirements you can infer from the ticket.\n3. List the questions or assumptions I should confirm.\n4. Suggest where to look in the Oracle repo for similar patterns.\n5. Recommend a safe branch name.\n6. Propose what a good PR summary and validation note should include.\n\nTicket:\n[paste ticket text here]",
      readyChecklist: [
        "I can ask Codex to restate the ticket before code changes.",
        "I can separate inferred requirements from questions to confirm.",
        "I can ask for repo search targets, branch name, PR summary, and validation notes."
      ]
    },
    {
      type: "safety",
      title: "Git Safety When Working With Codex",
      kicker: "Safety checklist",
      intro: "Low Git knowledge is okay. The goal is visible, reviewable work.",
      beforeEditing: ["Confirm you are not on main", "Create or use a task branch", "Keep changes small and reviewable"],
      longerWork: ["Open a draft PR", "Say what changed", "Say what is still open", "Say what needs review"],
      readyChecklist: [
        "I can explain why main should stay protected.",
        "I can keep Codex changes on a task branch.",
        "I can name what changed, what is open, and what needs review."
      ],
      footer: "If the work will take longer than one day, or the logic is still moving, open a draft PR early."
    },
    {
      type: "workflow",
      title: "Terminal Survival Before Codex",
      kicker: "Safe shell loop",
      intro:
        "Codex starts from the folder where the terminal is running. Use read-only commands first so the learner knows the workspace before asking for edits.",
      task: "Practice the read-only orientation loop before any Codex session.",
      reference: "Get-Location -> Get-ChildItem -Force -> rg --files -> git status",
      cards: [
        {
          label: "Confirm folder",
          command: "Get-Location",
          detail: "Shows the current folder so learners know which repo Codex will inspect."
        },
        {
          label: "List nearby files",
          command: "Get-ChildItem -Force",
          detail: "Reveals project files and hidden Git metadata without changing anything."
        },
        {
          label: "Map source files",
          command: "rg --files",
          detail: "Quickly lists repo files and helps learners find likely app, SQL, docs, or config areas."
        },
        {
          label: "Check Git state",
          command: "git status",
          detail: "Shows whether the repo is clean before Codex begins reasoning about changes."
        }
      ],
      readyChecklist: [
        "I can confirm the current folder before starting Codex.",
        "I can list nearby files without changing anything.",
        "I can use rg --files and git status as read-only orientation commands."
      ],
      formula: "Read first. Edit later."
    },
    {
      type: "workflow",
      title: "First Codex Sessions",
      kicker: "Inspect, plan, edit, verify",
      intro:
        "The safest first Codex session is not a broad rewrite. It asks Codex to inspect, explain the plan, keep the diff narrow, and name validation.",
      task: "Use a plan-first prompt before requesting implementation.",
      reference: "Inspect this repo and give me a short plan before editing.",
      cards: [
        {
          label: "Inspect first",
          prompt:
            "Inspect this repo before editing. Identify the main folders, likely entry points, validation commands, risks, and open questions."
        },
        {
          label: "Plan first",
          prompt:
            "Give me a short plan before editing. Keep the change narrow, preserve behavior, and list the validation command you will run."
        },
        {
          label: "Constrain scope",
          prompt:
            "Change only the files required for this task. Do not refactor unrelated code or reformat unrelated files."
        },
        {
          label: "Verify",
          prompt:
            "After the change, summarize the files changed, validation run, and any remaining risks or assumptions."
        }
      ],
      readyChecklist: [
        "I can ask Codex to inspect before editing.",
        "I can request a short plan and narrow file scope.",
        "I can ask for validation and remaining risks after the change."
      ],
      formula: "Inspect -> plan -> narrow edit -> validate -> review diff"
    },
    {
      type: "workflow",
      title: "Analyst Workflows With Codex",
      kicker: "SQL, data, docs",
      intro:
        "Codex is useful for analytics work when the prompt forces concrete review artifacts: lineage, data quality, documentation, briefing outlines, and risk notes.",
      task: "Match the prompt to the artifact the reviewer actually needs.",
      reference: "SQL_LINEAGE.md, DATA_QUALITY_REPORT.md, REPO_NOTES.md",
      cards: [
        {
          label: "SQL lineage",
          prompt:
            "Review the SQL files. Identify source tables, output grain, joins, filters, assumptions, data-quality risks, and open questions."
        },
        {
          label: "SQL review",
          prompt:
            "Review this SQL like a cautious analytics engineer. Separate readability issues from behavior or grain risks. Do not refactor yet."
        },
        {
          label: "CSV quality",
          prompt:
            "Profile this CSV and produce a markdown data-quality report with row count, columns, missing values, suspicious categories, type issues, and next checks."
        },
        {
          label: "Docs and briefing",
          prompt:
            "Turn these technical notes into a concise stakeholder outline with current state, risks, recommendation, next steps, and speaker notes."
        }
      ],
      readyChecklist: [
        "I can ask for SQL lineage without asking for a refactor.",
        "I can separate SQL readability issues from behavior risks.",
        "I can request a data-quality report that distinguishes findings from next checks."
      ],
      formula: "One artifact at a time keeps the work reviewable."
    },
    {
      type: "workflow",
      title: "Automation With codex exec",
      kicker: "Repeatable, reviewable output",
      intro:
        "Use codex exec for stable, repeatable tasks with a clear output file. Keep judgment-heavy or risky work interactive.",
      task: "Decide whether a task belongs in interactive Codex or a repeatable exec command.",
      reference: "codex exec \"Review this repo for docs gaps and SQL risks\" > CODEX_REVIEW.md",
      cards: [
        {
          label: "Good fit",
          command: "codex exec \"Summarize this repo in markdown\" > REPO_NOTES.md",
          detail: "Works well when the prompt, output file, and review step are stable."
        },
        {
          label: "Review output",
          command: "Get-Content .\\REPO_NOTES.md",
          detail: "Always inspect generated output before sharing, committing, or relying on it."
        },
        {
          label: "Manual checkpoint",
          prompt:
            "Tell me what still needs human review, what assumptions you made, and what validation is missing."
        },
        {
          label: "Avoid automation",
          detail:
            "Keep interactive control when the task needs sensitive judgment, unclear scope, broad file edits, or changing requirements."
        }
      ],
      readyChecklist: [
        "I can identify tasks that are stable enough for codex exec.",
        "I can write output to a reviewable file.",
        "I can name the manual checkpoint that remains after automation."
      ],
      formula: "Repeatable output is useful. Unsigned-off automation is still risk."
    }
  ],
  setupUrl: "https://openai.com/codex/get-started/",
  cliCommand: "npm install -g @openai/codex"
};

const capstoneLab = {
  id: "repo-review-kit",
  title: "GIT Lab 3: Repo Review Kit",
  level: "Capstone",
  time: "Self-paced",
  labTitle: "Analyst repo review kit",
  description:
    "A capstone workflow for turning Codex-assisted repo inspection into durable files that support review, handoff, and PR readiness.",
  section: {
    type: "workflow",
    title: "Analyst Repo Review Kit",
    kicker: "GIT Lab 3",
    intro:
      "Use Git discipline and Codex prompts together: inspect the repo, create one reviewable artifact at a time, then review the diff before committing.",
    task: "Simulate a small repo-review package that could support a PR or handoff.",
    reference: "REPO_NOTES.md -> SQL_LINEAGE.md -> DATA_QUALITY_REPORT.md -> CODEX_REVIEW.md",
    cards: [
      {
        label: "Milestone 1: Repo notes",
        prompt:
          "Inspect this repo before editing. Identify purpose, key folders, run commands, data or SQL assets, assumptions, risks, and open questions. Propose a REPO_NOTES.md outline first."
      },
      {
        label: "Milestone 2: SQL lineage",
        prompt:
          "Inspect the SQL files and draft SQL_LINEAGE.md with source tables, output grain, joins, filters, groupings, assumptions, risks, and open questions."
      },
      {
        label: "Milestone 3: Data quality",
        prompt:
          "Inspect available data files or define expected checks. Draft DATA_QUALITY_REPORT.md with columns, missing values, duplicate-key risks, date/category issues, limitations, and follow-ups."
      },
      {
        label: "Milestone 4: Final review",
        prompt:
          "Review the changed files without editing. Draft CODEX_REVIEW.md with changed files, unsupported claims, missing validation, risky assumptions, and final cleanup recommendations."
      }
    ],
    readyChecklist: [
      "I can split a larger Codex request into reviewable milestones.",
      "I can create one durable artifact at a time.",
      "I can ask Codex to review generated artifacts before committing."
    ],
    formula: "Capstone rule: ground first, write second, review last."
  },
  deliverables: [
    "REPO_NOTES.md",
    "SQL_LINEAGE.md",
    "DATA_QUALITY_REPORT.md",
    "CODEX_REVIEW.md"
  ]
};

const codexPromptLibrary = [
  {
    group: "Start safely",
    prompts: [
      {
        label: "Inspect before editing",
        text:
          "Inspect this repo before editing. Identify the main folders, likely entry points, validation commands, risks, and open questions. Give me a short plan before changing files."
      },
      {
        label: "Constrain the diff",
        text:
          "Change only the files required for this task. Do not refactor unrelated code or reformat unrelated files. Summarize every file you changed."
      }
    ]
  },
  {
    group: "ADO orientation",
    prompts: [
      {
        label: "Ticket orientation",
        text:
          "I need to work on this ADO ticket in the Oracle repo. Before suggesting code changes, restate the request, infer requirements, list questions, suggest files to inspect, recommend a branch name, and propose PR validation notes.\n\nTicket:\n[paste ticket text here]"
      },
      {
        label: "PR summary",
        text:
          "Draft a PR summary with: business purpose, files changed, validation performed, assumptions, open questions, and reviewer focus areas."
      }
    ]
  },
  {
    group: "Analyst review kit",
    prompts: [
      ...capstoneLab.section.cards.map((card) => ({ label: card.label, text: card.prompt }))
    ]
  }
];

const vscodeLab = {
  id: "vscode-lab",
  title: "VS Code Lab",
  level: "Beginner",
  time: "15 min",
  labTitle: "Editor orientation",
  setupUrl: "https://code.visualstudio.com/download",
  description:
    "A brief VS Code orientation for learners who need to understand the workspace, Explorer, terminal, and Source Control before touching repo files.",
  sections: [
    {
      title: "Open the Workspace",
      kicker: "Workspace setup",
      intro:
        "Start by opening the repo folder, not a single file. The Explorer, search, terminal, and Git panels all depend on the folder context.",
      checklist: [
        "Open VS Code",
        `Open folder: ${ORACLE_REPO_ROOT}`,
        "Confirm the Explorer shows the Oracle working tree",
        "Confirm the status bar shows the current Git branch"
      ],
      callout: "If VS Code is opened on one loose file, Git context and repo search will feel broken."
    },
    {
      title: "Find the Right File",
      kicker: "Navigation",
      intro:
        "Use the Explorer for known folders, Quick Open for known file names, and Search when you only know a term or table name.",
      checklist: [
        "Use Explorer to expand ccs/sql/meters",
        "Use Ctrl+P to jump to a file by name",
        "Use Ctrl+Shift+F to search across the repo",
        "Open related SQL files side by side before changing anything"
      ],
      callout: "For this lab, the target area is ccs/sql/meters. Similar neighboring SQL files are your pattern library."
    },
    {
      title: "Use Terminal and Source Control",
      kicker: "Git in VS Code",
      intro:
        "The integrated terminal and Source Control panel are two views of the same Git state. Use either, but keep the branch and staged files visible.",
      checklist: [
        "Open the integrated terminal",
        "Run git status before editing",
        "Create or switch to the task branch",
        "Review staged files before committing"
      ],
      callout: "Do not rely on memory. Let VS Code show the branch, changed files, and staged files before you commit."
    }
  ],
  shortcuts: [
    ["Open folder", "File > Open Folder"],
    ["Quick Open", "Ctrl+P"],
    ["Repo Search", "Ctrl+Shift+F"],
    ["Integrated Terminal", "Ctrl+`"],
    ["Source Control", "Ctrl+Shift+G"]
  ]
};

const lessons = [
  {
    title: "Setup and Context",
    concept:
      "Start from the work request, create a local repo space, and capture the ADO-style ticket context before code changes.",
    task: "Create the training folder, initialize Git, capture ticket context, and inspect status.",
    hint: "This mirrors the meeting workflow: ticket first, then Git and ADO context.",
    complete: (state) => state.guidedStep >= 5 || state.taskFlags.status
  },
  {
    title: "Stage Context",
    concept:
      "The staging area is the review buffer between local edits and committed history.",
    task: "Stage the README ticket context so the first checkpoint is intentional.",
    hint: "Staging lets you choose exactly what the next commit includes.",
    complete: (state) => state.guidedStep >= 6 || state.taskFlags.staged
  },
  {
    title: "Commit Checkpoint",
    concept:
      "A commit is a durable checkpoint with a message and file snapshot.",
    task: "Commit the ticket context on main before branching into task work.",
    hint: "A clean starting checkpoint makes later review easier.",
    complete: (state) => state.guidedStep >= 7 || state.taskFlags.committed
  },
  {
    title: "Task Branch",
    concept:
      "A branch is a safe working copy for a specific change. HEAD shows which branch you are on.",
    task: "Create the emergency-orders task branch and add the demo SQL asset there.",
    hint: "This is the branch reviewers would inspect in a pull request.",
    complete: (state) => state.guidedStep >= 10 || state.taskFlags.branchCreated
  },
  {
    title: "Reviewable Commit",
    concept:
      "A focused branch commit makes the review surface smaller and easier to explain.",
    task: "Stage and commit the SQL report asset on the task branch.",
    hint: "Clear commit messages help a reviewer understand intent without guessing.",
    complete: (state) => state.guidedStep >= 12 || state.taskFlags.branchCommitted
  },
  {
    title: "Merge and PR Readiness",
    concept:
      "A merge combines branch work back into the baseline. In real work, this happens through review and pull request discipline.",
    task: "Return to main and fast-forward merge the task branch.",
    hint: "The lab stops at merge mechanics; the meeting workflow continues with PR notes and validation context.",
    complete: (state) => state.guidedStep >= getActiveModule().commands.length || state.taskFlags.merged
  }
];

const glossaryTerms = [
  {
    term: "Repo",
    meaning: "The shared project folder where work is tracked"
  },
  {
    term: "Branch",
    meaning: "Your safe working copy for a specific change"
  },
  {
    term: "Main",
    meaning: "The protected version everyone treats as the baseline"
  },
  {
    term: "Commit",
    meaning: "A saved checkpoint of your work"
  },
  {
    term: "Pull request (PR)",
    meaning: "A request for review before your work is merged"
  },
  {
    term: "Draft PR",
    meaning: "An early review space for work that is not yet finished"
  }
];

const powershellReferenceTerms = [
  {
    term: "Prompt",
    meaning: "The line that starts with PS and shows the folder where the next command will run."
  },
  {
    term: "Working directory",
    meaning: "The current folder PowerShell is pointed at. Use cd to move."
  },
  {
    term: "Out-File",
    meaning: "A PowerShell command that writes text into a file."
  },
  {
    term: "Staging area",
    meaning: "Git's selected snapshot for the next commit."
  },
  {
    term: "HEAD",
    meaning: "Git's pointer to the branch or commit you currently have checked out."
  }
];

const powershellReferenceCommands = [
  {
    group: "PowerShell basics",
    commands: [
      { cmd: "help", desc: "List supported simulator commands" },
      { cmd: `mkdir ${oracleLab.folder}`, desc: "Create the training folder" },
      { cmd: `cd ${oracleLab.folder}`, desc: "Move into the training folder" },
      { cmd: `"${oracleLab.firstFileContent}" | Out-File README.md`, desc: "Write ticket context into README.md" },
      { cmd: `edit ${oracleLab.featureFile}`, desc: "Create or update the SQL file" }
    ]
  },
  {
    group: "Git workflow",
    commands: [
      { cmd: "git init", desc: "Start Git tracking in the folder" },
      { cmd: "git status", desc: "Inspect open, staged, and clean files" },
      { cmd: "git add README.md", desc: "Stage a file for commit" },
      { cmd: `git commit -m "${oracleLab.firstCommitMessage}"`, desc: "Save a checkpoint" },
      { cmd: `git switch -c ${oracleLab.branchName}`, desc: "Create and move to a task branch" },
      { cmd: "git log --oneline", desc: "Show compact commit history" },
      { cmd: `git merge ${oracleLab.branchName}`, desc: "Bring branch work back to main" }
    ]
  }
];

const quizzes = [
  {
    question: "Which area does git add move changes into?",
    options: ["Staging area", "Remote repository", "Commit history"],
    answer: 0,
    feedback: "git add copies the current file snapshot into the staging area."
  },
  {
    question: "What does HEAD identify?",
    options: ["The current branch or commit", "The newest remote branch", "The largest file in the repo"],
    answer: 0,
    feedback: "HEAD is Git's pointer to the current branch or detached commit."
  },
  {
    question: "What is a branch?",
    options: ["A movable label pointing to a commit", "A folder containing edited files", "A required remote backup"],
    answer: 0,
    feedback: "Branches are lightweight pointers. Commits hold the actual snapshots."
  },
  {
    question: "When does a merge conflict usually happen?",
    options: [
      "Two branches changed the same lines differently",
      "A file is staged before committing",
      "A branch is pushed to origin"
    ],
    answer: 0,
    feedback: "Git cannot choose safely when both sides edited the same content differently."
  }
];

const roundTwoQuizzes = [
  {
    question: "Fill in the command to initialize a new Git repository.",
    answer: "git init",
    placeholder: "git ...",
    feedback: "git init creates the local .git repository metadata."
  },
  {
    question: "Fill in the command to inspect working tree and staged changes.",
    answer: "git status",
    placeholder: "git ...",
    feedback: "git status is the safest first inspection command."
  },
  {
    question: "Fill in the command to stage the ticket context file.",
    answer: "git add README.md",
    placeholder: "git add ...",
    feedback: "Stage only the file you want included in the next checkpoint."
  },
  {
    question: "Fill in the command to commit the ticket context with the expected message.",
    answer: `git commit -m "${oracleLab.firstCommitMessage}"`,
    placeholder: "git commit -m ...",
    feedback: "A clear commit message keeps the baseline checkpoint traceable."
  },
  {
    question: "Fill in the command to create and switch to the task branch.",
    answer: `git switch -c ${oracleLab.branchName}`,
    placeholder: "git switch -c ...",
    feedback: "git switch -c creates the branch and moves HEAD to it."
  },
  {
    question: "Fill in the command to add the SQL asset on the task branch.",
    answer: `git add ${oracleLab.featureFile}`,
    placeholder: "git add ccs/sql/...",
    feedback: "Stage the SQL file directly so the next commit stays focused."
  },
  {
    question: "Fill in the command to commit the emergency orders SQL report.",
    answer: `git commit -m "${oracleLab.featureCommitMessage}"`,
    placeholder: "git commit -m ...",
    feedback: "This creates the reviewable branch checkpoint."
  },
  {
    question: "Fill in the command to return to main.",
    answer: "git switch main",
    placeholder: "git switch ...",
    feedback: "Switch back to main before merging the feature branch."
  },
  {
    question: "Fill in the command to fast-forward main with the task branch.",
    answer: `git merge ${oracleLab.branchName}`,
    placeholder: "git merge ...",
    feedback: "Because main has not diverged, the merge can fast-forward."
  },
  {
    question: "Fill in the command to inspect compact commit history.",
    answer: "git log --oneline",
    placeholder: "git log ...",
    feedback: "git log --oneline is a concise way to explain the branch story."
  }
];

const roundThreeQuizzes = [
  {
    question: "You are on main with a clean working tree. Type the command that creates and moves to the task branch.",
    acceptedAnswers: [`git switch -c ${oracleLab.branchName}`, `git checkout -b ${oracleLab.branchName}`],
    answerLabel: `git switch -c ${oracleLab.branchName}`,
    placeholder: "Type the full command",
    feedback: "A task branch isolates the work before the SQL asset is created."
  },
  {
    question: "Only the new SQL file should be in the next commit. Type the command that stages just that file.",
    acceptedAnswers: [`git add ${oracleLab.featureFile}`],
    answerLabel: `git add ${oracleLab.featureFile}`,
    placeholder: "Stage one file by path",
    feedback: "Staging by path keeps unrelated edits out of the review."
  },
  {
    question: "You need a compact history summary before writing PR notes. Type the inspection command.",
    acceptedAnswers: ["git log --oneline"],
    answerLabel: "git log --oneline",
    placeholder: "Inspect history",
    feedback: "A one-line log is enough to verify the commit sequence."
  },
  {
    question: "You finished the feature branch and need to return to main. Type the command.",
    acceptedAnswers: ["git switch main", "git checkout main"],
    answerLabel: "git switch main",
    placeholder: "Move HEAD back to main",
    feedback: "HEAD must be on main before this lab's merge step."
  },
  {
    question: "main has not diverged and you want to bring in the feature work. Type the merge command.",
    acceptedAnswers: [`git merge ${oracleLab.branchName}`],
    answerLabel: `git merge ${oracleLab.branchName}`,
    placeholder: "Merge the feature branch",
    feedback: "This fast-forwards main to the feature commit."
  },
  {
    question: "README.md was staged by mistake, but you do not want to delete it. Type the command to unstage it.",
    acceptedAnswers: ["git restore --staged README.md", "git reset HEAD README.md"],
    answerLabel: "git restore --staged README.md",
    placeholder: "Unstage without deleting",
    feedback: "Unstaging changes the index, not the file contents."
  },
  {
    question: "The branch is ready to publish for review. Type the command that pushes the current branch.",
    acceptedAnswers: ["git push", `git push -u origin ${oracleLab.branchName}`],
    answerLabel: "git push",
    placeholder: "Publish branch",
    feedback: "A push makes the branch available for remote review."
  },
  {
    question: "Before committing, confirm whether anything is staged or unstaged. Type the command.",
    acceptedAnswers: ["git status"],
    answerLabel: "git status",
    placeholder: "Inspect repository state",
    feedback: "git status is the quick reality check before committing."
  },
  {
    question: "After resolving a conflict in the SQL file, type the command that marks the resolved file for commit.",
    acceptedAnswers: [`git add ${oracleLab.featureFile}`],
    answerLabel: `git add ${oracleLab.featureFile}`,
    placeholder: "Stage the resolved file",
    feedback: "Resolved files are marked complete by staging them."
  },
  {
    question: "The terminal is cluttered, but repository state should not change. Type the command that clears the terminal view.",
    acceptedAnswers: ["clear", "cls"],
    answerLabel: "clear",
    placeholder: "Clear the view",
    feedback: "Clearing the terminal is cosmetic; it does not change Git state."
  }
];

const codexChoiceQuizzes = [
  {
    question: "What should you do before letting Codex edit files?",
    options: ["Check the current folder and Git status", "Run the first command Codex suggests", "Paste secrets for context", "Start by committing everything"],
    answer: "Check the current folder and Git status",
    feedback: "Codex works from local context. Confirm folder and repo state before edits."
  },
  {
    question: "Which command shows the current folder in PowerShell?",
    options: ["Get-Location", "git branch", "npm install", "codex exec"],
    answer: "Get-Location",
    feedback: "Get-Location answers the first safety question: where am I?"
  },
  {
    question: "What does rg --files do?",
    options: ["Lists files quickly", "Deletes ignored files", "Commits staged files", "Starts Codex"],
    answer: "Lists files quickly",
    feedback: "ripgrep is the fast file finder for mapping a repo before deeper inspection."
  },
  {
    question: "What is the safest first Codex prompt in a new repo?",
    options: ["Inspect this repo and give me a short plan before editing.", "Rewrite the whole app.", "Commit all local files.", "Ignore validation and move fast."],
    answer: "Inspect this repo and give me a short plan before editing.",
    feedback: "A plan-first prompt keeps the first interaction low-risk and reviewable."
  },
  {
    question: "Why should Codex changes stay small?",
    options: ["Small diffs are easier to review and recover", "Large diffs always run faster", "Git cannot track small changes", "ADO requires one file only"],
    answer: "Small diffs are easier to review and recover",
    feedback: "Small, scoped changes are easier to validate and easier to unwind."
  },
  {
    question: "Which prompt is best for SQL lineage?",
    options: ["Identify source tables, output grain, joins, filters, assumptions, and risks.", "Make the SQL prettier without reading it.", "Delete duplicate code automatically.", "Summarize the repo logo colors."],
    answer: "Identify source tables, output grain, joins, filters, assumptions, and risks.",
    feedback: "Lineage work should capture grain, sources, logic, assumptions, and review questions."
  },
  {
    question: "Before refactoring SQL, what should Codex explain?",
    options: ["Current behavior, row grain, filters, and joins", "Only indentation style", "GitHub usernames", "PowerPoint theme colors"],
    answer: "Current behavior, row grain, filters, and joins",
    feedback: "A safe SQL refactor starts by proving the existing behavior is understood."
  },
  {
    question: "What should a CSV data-quality report separate?",
    options: ["Observed issues, possible causes, and next actions", "Code comments and commit hashes", "Main and feature branches only", "PowerShell and Bash history"],
    answer: "Observed issues, possible causes, and next actions",
    feedback: "Good data-quality notes distinguish what is known from what still needs validation."
  },
  {
    question: "What should happen before committing Codex-generated markdown?",
    options: ["Review the diff and unsupported claims", "Trust it because markdown is harmless", "Delete the source files", "Skip validation if it looks polished"],
    answer: "Review the diff and unsupported claims",
    feedback: "Generated docs can still contain unsupported assumptions. Review them before committing."
  },
  {
    question: "What is codex exec best suited for?",
    options: ["Repeatable tasks with stable output", "Unclear exploratory work with changing scope", "Sensitive judgment with no review", "Deleting old branches"],
    answer: "Repeatable tasks with stable output",
    feedback: "codex exec is strongest when the prompt, output, and validation step are predictable."
  },
  {
    question: "When should work stay interactive instead of codex exec?",
    options: ["When scope is unclear or risk is high", "When the output is a fixed markdown report", "When the command is read-only", "When the prompt is already tested"],
    answer: "When scope is unclear or risk is high",
    feedback: "Interactive sessions let the user steer judgment-heavy or changing work."
  },
  {
    question: "What does git diff --stat help you inspect?",
    options: ["The change surface by file", "The current directory", "Installed npm packages", "The remote website design"],
    answer: "The change surface by file",
    feedback: "git diff --stat is the quick overview before reviewing full content changes."
  },
  {
    question: "What should a final Codex review prompt ask for?",
    options: ["Correctness risks, regressions, missing validation, and file evidence", "A larger rewrite", "A password reset", "Only praise for the implementation"],
    answer: "Correctness risks, regressions, missing validation, and file evidence",
    feedback: "A review prompt should lead with findings and cite the files that support them."
  },
  {
    question: "Why split a larger Codex workflow into milestones?",
    options: ["Each output can be grounded and reviewed before the next step", "It makes Codex ignore repo context", "It removes the need for Git", "It guarantees there are no assumptions"],
    answer: "Each output can be grounded and reviewed before the next step",
    feedback: "Milestones reduce scope drift and make artifacts easier to validate."
  },
  {
    question: "Which artifact set best matches the capstone repo review kit?",
    options: ["REPO_NOTES.md, SQL_LINEAGE.md, DATA_QUALITY_REPORT.md, CODEX_REVIEW.md", "Only a commit hash", "A private chat summary", "A screenshot with no notes"],
    answer: "REPO_NOTES.md, SQL_LINEAGE.md, DATA_QUALITY_REPORT.md, CODEX_REVIEW.md",
    feedback: "The capstone turns a Codex session into durable notes that can support a PR, review, or handoff."
  }
];

const codexRoundTwoQuizzes = [
  {
    question: "Fill in the PowerShell command that shows the current folder.",
    answer: "Get-Location",
    placeholder: "Get-...",
    feedback: "Get-Location confirms the folder Codex will use for context."
  },
  {
    question: "Fill in the PowerShell command that lists nearby files, including hidden items.",
    answer: "Get-ChildItem -Force",
    placeholder: "Get-ChildItem ...",
    feedback: "Get-ChildItem -Force is a safe read-only orientation command."
  },
  {
    question: "Fill in the command that lists repo files quickly.",
    answer: "rg --files",
    placeholder: "rg ...",
    feedback: "rg --files maps the repo faster than manually expanding folders."
  },
  {
    question: "Fill in the command that finds SQL files.",
    answer: "rg --files -g \"*.sql\"",
    placeholder: "rg --files -g ...",
    feedback: "This maps SQL scope before asking Codex to reason about lineage."
  },
  {
    question: "Fill in the command that checks the Git working tree.",
    answer: "git status",
    placeholder: "git ...",
    feedback: "git status is the default preflight before and after Codex work."
  },
  {
    question: "Fill in the command that summarizes changed files before a full diff review.",
    answer: "git diff --stat",
    placeholder: "git diff ...",
    feedback: "git diff --stat gives a compact change-surface view."
  },
  {
    question: "Fill in the command that launches interactive Codex from the current folder.",
    answer: "codex",
    placeholder: "codex...",
    feedback: "Run codex from the repo root so local context is correct."
  },
  {
    question: "Fill in the command that signs in to Codex CLI.",
    answer: "codex login",
    placeholder: "codex ...",
    feedback: "codex login starts the CLI authentication flow."
  },
  {
    question: "Fill in the install command for the Codex CLI.",
    answer: "npm install -g @openai/codex",
    placeholder: "npm install ...",
    feedback: "Install once per workstation, then launch Codex from the target repo."
  },
  {
    question: "Fill in the command pattern for a one-shot Codex run.",
    answer: "codex exec",
    placeholder: "codex ...",
    feedback: "codex exec is the one-shot mode for stable, repeatable tasks."
  }
];

const codexRoundThreeQuizzes = [
  {
    question: "You are in a new repo and need a safe first Codex session. Type the first inspection prompt.",
    acceptedAnswers: [
      "Inspect this repo and give me a short plan before editing.",
      "Inspect this repo before editing and give me a short plan."
    ],
    answerLabel: "Inspect this repo and give me a short plan before editing.",
    placeholder: "Type the prompt",
    feedback: "A plan-first prompt reduces broad rewrites and forces local context."
  },
  {
    question: "Type the PowerShell command that confirms where Codex will start.",
    acceptedAnswers: ["Get-Location", "pwd"],
    answerLabel: "Get-Location",
    placeholder: "Current folder command",
    feedback: "Confirm the active folder before launching Codex."
  },
  {
    question: "Type the command that finds all SQL files in the repo.",
    acceptedAnswers: ["rg --files -g \"*.sql\"", "rg --files -g '*.sql'"],
    answerLabel: "rg --files -g \"*.sql\"",
    placeholder: "Find SQL files",
    feedback: "Finding SQL files is the first step in a lineage or review workflow."
  },
  {
    question: "Type the command that scans for common SQL clauses across the repo.",
    acceptedAnswers: ["rg -n \"from|join|group by|where\" .", "rg -n 'from|join|group by|where' ."],
    answerLabel: "rg -n \"from|join|group by|where\" .",
    placeholder: "Scan SQL clauses",
    feedback: "Clause scans help spot sources, joins, filters, and aggregation."
  },
  {
    question: "Before keeping Codex changes, type the command that summarizes changed files.",
    acceptedAnswers: ["git diff --stat"],
    answerLabel: "git diff --stat",
    placeholder: "Diff summary command",
    feedback: "Use the stat view before reviewing the full diff."
  },
  {
    question: "Type the command that inspects actual content changes.",
    acceptedAnswers: ["git diff"],
    answerLabel: "git diff",
    placeholder: "Full diff command",
    feedback: "The full diff is the reality check before keeping generated changes."
  },
  {
    question: "Type a one-shot command that writes a repo review to CODEX_REVIEW.md.",
    acceptedAnswers: [
      "codex exec \"Review this repo for docs gaps and SQL risks\" > CODEX_REVIEW.md",
      "codex exec 'Review this repo for docs gaps and SQL risks' > CODEX_REVIEW.md"
    ],
    answerLabel: "codex exec \"Review this repo for docs gaps and SQL risks\" > CODEX_REVIEW.md",
    placeholder: "codex exec ... > CODEX_REVIEW.md",
    feedback: "One-shot output should still be reviewed manually before commit or sharing."
  },
  {
    question: "Type the prompt fragment that tells Codex to preserve SQL behavior during cleanup.",
    acceptedAnswers: [
      "Refactor for readability only. Preserve behavior, filters, grain, and output schema.",
      "Refactor this SQL for readability only. Preserve output schema, row grain, join behavior, and filters."
    ],
    answerLabel: "Refactor for readability only. Preserve behavior, filters, grain, and output schema.",
    placeholder: "Type the guardrail",
    feedback: "SQL cleanup must preserve row grain, filters, joins, and output schema unless explicitly changed."
  },
  {
    question: "Type the final capstone review prompt before committing generated artifacts.",
    acceptedAnswers: [
      "Review the changed files without editing. Flag unsupported claims, missing validation, risky assumptions, and final cleanup before commit.",
      "Review the changed files without editing. Draft CODEX_REVIEW.md with changed files, unsupported claims, missing validation, risky assumptions, and final cleanup recommendations."
    ],
    answerLabel: "Review the changed files without editing. Flag unsupported claims, missing validation, risky assumptions, and final cleanup before commit.",
    placeholder: "Final review prompt",
    feedback: "The final pass should review the artifacts without creating another uncontrolled edit."
  }
];

const conflictScenarios = [
  {
    id: "ccs-source-view",
    title: "CCS SQL source-view conflict",
    branch: "ccs-source-view-fix",
    conflictFile: "ccs/sql/meters/ccs_emergency_response_activity_extract.sql",
    baselineMessage: "Add CCS meters SQL baseline",
    mainMessage: "Point meters extract at curated CCS view",
    featureMessage: "Add meter status filters",
    mergeMessage: "Merge CCS source-view fix",
    baselineFiles: {
      "README.md": "# Oracle repository\n\nPractice resolving a CCS SQL merge conflict safely.\n",
      "ccs/sql/meters/README.md": "# CCS meters SQL\n\nMeter and field activity query assets.\n",
      "ccs/sql/meters/ccs_emergency_response_activity_extract.sql":
        "select activity_id, premise_id, meter_id, activity_status\nfrom raw_ccs.emergency_response_activity;\n"
    },
    mainContent:
      "select activity_id, premise_id, meter_id, activity_status\nfrom curated_ccs.emergency_response_activity_vw;\n",
    featureContent:
      "select activity_id, premise_id, meter_id, activity_status\nfrom raw_ccs.emergency_response_activity\nwhere activity_status in ('Open', 'Completed');\n"
  },
  {
    id: "emergency-orders",
    title: "Emergency orders SQL conflict",
    branch: "emergency-orders-filter-fix",
    conflictFile: "ccs/sql/emergency_orders_prior_week.sql",
    baselineMessage: "Add emergency orders prior-week baseline",
    mainMessage: "Use governed CCS source view",
    featureMessage: "Apply prior completed week filter",
    mergeMessage: "Merge emergency orders filter fix",
    baselineFiles: {
      "README.md": "# Conflict drill\n\nResolve a SQL merge conflict before review.\n",
      "ccs/sql/emergency_orders_prior_week.sql":
        "select order_id, zip_code, status, completed_date\nfrom raw_ccs.emergency_orders\nwhere status in ('Open', 'Closed');\n",
      "validation-notes.md": "# Validation notes\n\nCompare row counts by completed week before publishing.\n"
    },
    mainContent:
      "select order_id, zip_code, status, completed_date\nfrom curated_ccs.emergency_orders_vw\nwhere status in ('Open', 'Closed');\n",
    featureContent:
      "select order_id, zip_code, status, completed_date\nfrom raw_ccs.emergency_orders\nwhere completed_date >= dateadd(day, -7, current_date)\n  and completed_date < current_date;\n"
  },
  {
    id: "oracle-sql-runbook",
    title: "Oracle SQL review runbook conflict",
    branch: "oracle-sql-runbook-update",
    conflictFile: "docs/runbooks/oracle_sql_review_runbook.md",
    baselineMessage: "Document Oracle SQL review baseline",
    mainMessage: "Align runbook with PR template",
    featureMessage: "Add meters review checklist",
    mergeMessage: "Merge Oracle SQL runbook update",
    baselineFiles: {
      "README.md": "# Oracle repository\n\nResolve a documentation merge conflict before review.\n",
      "docs/runbooks/oracle_sql_review_runbook.md":
        "# Oracle SQL review runbook\n\nReview focus: readable SQL and clear validation notes\nReviewer: repo maintainer\n",
      ".azuredevops/pull_request_template.md": "# Pull Request\n\n## Summary\n## Validation\n"
    },
    mainContent:
      "# Oracle SQL review runbook\n\nReview focus: readable SQL, clear validation notes, and PR template alignment\nReviewer: repo maintainer\n",
    featureContent:
      "# Oracle SQL review runbook\n\nReview focus: readable SQL and clear validation notes\nMeters checklist: compare against neighboring CCS meters extracts\nReviewer: repo maintainer\n"
  },
  {
    id: "wacs-shared-lookup",
    title: "WACS shared lookup conflict",
    branch: "wacs-shared-lookup-update",
    conflictFile: "wacs/sql/shared/wacs_shared_erp_project_reference_lookup.sql",
    baselineMessage: "Add WACS shared lookup baseline",
    mainMessage: "Use governed ERP project source",
    featureMessage: "Add active project filter",
    mergeMessage: "Merge WACS shared lookup update",
    baselineFiles: {
      "README.md": "# Oracle repository\n\nResolve a WACS SQL merge conflict before review.\n",
      "wacs/sql/shared/README.md": "# WACS shared SQL\n\nShared lookup and reference queries.\n",
      "wacs/sql/shared/wacs_shared_erp_project_reference_lookup.sql":
        "select project_id, project_number, project_name\nfrom raw_wacs.erp_project_reference;\n"
    },
    mainContent:
      "select project_id, project_number, project_name\nfrom curated_wacs.erp_project_reference_vw;\n",
    featureContent:
      "select project_id, project_number, project_name\nfrom raw_wacs.erp_project_reference\nwhere project_status = 'ACTIVE';\n"
  }
];

const commandProcessSteps = [
  {
    area: "workspace",
    label: "Workspace",
    title: "Create the project folder",
    detail: "PowerShell creates a normal folder before Git is involved."
  },
  {
    area: "shell",
    label: "Shell location",
    title: "Move into the folder",
    detail: "The prompt changes so commands run inside the training project."
  },
  {
    area: "repository",
    label: "Repository",
    title: "Initialize Git metadata",
    detail: "Git creates the hidden .git store that makes the folder a repository."
  },
  {
    area: "working",
    label: "Working tree",
    title: "Capture ticket context",
    detail: "The README records the ADO-style request before any SQL asset is added."
  },
  {
    area: "status",
    label: "Inspection",
    title: "Inspect open changes",
    detail: "git status compares the working tree, staging area, and latest commit."
  },
  {
    area: "staging",
    label: "Staging area",
    title: "Stage the ticket context",
    detail: "git add prepares the README snapshot for the first traceable commit."
  },
  {
    area: "history",
    label: "Commit history",
    title: "Create a checkpoint",
    detail: "git commit writes the staged snapshot into repository history."
  },
  {
    area: "branch",
    label: "Branch pointer",
    title: "Create a feature branch",
    detail: "Git adds a new branch label at the current commit and moves HEAD to it."
  },
  {
    area: "working",
    label: "Working tree",
    title: "Add SQL on the task branch",
    detail: "The report SQL belongs to the current branch until it is committed."
  },
  {
    area: "status",
    label: "Inspection",
    title: "Inspect branch changes",
    detail: "git status shows the new SQL asset while HEAD is on the task branch."
  },
  {
    area: "staging",
    label: "Staging area",
    title: "Stage the branch change",
    detail: "git add prepares the SQL snapshot for review."
  },
  {
    area: "history",
    label: "Feature commit",
    title: "Commit on the branch",
    detail: "The feature branch now points to a new commit that main does not have yet."
  },
  {
    area: "branch",
    label: "HEAD switch",
    title: "Return to main",
    detail: "HEAD moves back to main, which still points at the first commit."
  },
  {
    area: "merge",
    label: "Merge",
    title: "Fast-forward main",
    detail: "main moves forward to the feature commit because it has not diverged."
  }
];

const projectProcessSteps = [
  {
    area: "workspace",
    label: "Workspace",
    title: "Create project lab folder",
    detail: "PowerShell creates the training folder for the longer-project workflow."
  },
  {
    area: "shell",
    label: "Shell location",
    title: "Move into the project lab",
    detail: "The prompt changes so the simulator runs commands inside the project workspace."
  },
  {
    area: "repository",
    label: "Repository",
    title: "Initialize Git metadata",
    detail: "Git starts tracking project context from this folder."
  },
  {
    area: "working",
    label: "Project README",
    title: "Create the project README",
    detail: "The README states the goal and current starting point for the longer project."
  },
  {
    area: "working",
    label: "Decision index",
    title: "Create decision-index.md",
    detail: "The decision index keeps choices and rationale visible on main."
  },
  {
    area: "working",
    label: "Workstreams",
    title: "Create workstreams.md",
    detail: "Workstreams keep collaborators and parallel tracks coordinated."
  },
  {
    area: "status",
    label: "Inspection",
    title: "Inspect capsule files",
    detail: "git status shows the capsule files before they are staged."
  },
  {
    area: "staging",
    label: "Staging area",
    title: "Stage the project capsule",
    detail: "README, decision-index, and workstreams are staged as shared context."
  },
  {
    area: "history",
    label: "Main commit",
    title: "Commit capsule on main",
    detail: "The shared project context is now a main-branch checkpoint."
  },
  {
    area: "branch",
    label: "Workstream branch",
    title: "Create a workstream branch",
    detail: "Everyday work resumes on a focused branch after the capsule exists."
  },
  {
    area: "working",
    label: "Workstream note",
    title: "Update workstreams.md",
    detail: "The branch records progress for one workstream without muddying main."
  },
  {
    area: "status",
    label: "Inspection",
    title: "Inspect branch change",
    detail: "git status confirms the workstream update is the only open change."
  },
  {
    area: "staging",
    label: "Staging area",
    title: "Stage workstream update",
    detail: "Only the intended workstream file is staged for the branch commit."
  },
  {
    area: "history",
    label: "Branch commit",
    title: "Commit workstream progress",
    detail: "The workstream branch now has a focused progress checkpoint."
  },
  {
    area: "branch",
    label: "HEAD switch",
    title: "Return to main",
    detail: "HEAD moves back to the shared project context on main."
  },
  {
    area: "merge",
    label: "Merge",
    title: "Merge workstream update",
    detail: "main fast-forwards so the project map includes the latest workstream note."
  }
];

let state;
let flowPointerDrag = null;
let flowNativeDragActive = false;
let suppressNextFlowClick = false;

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(loadTheme());
  state = loadState();
  bindEvents();
  render();
});

function createInitialState() {
  return {
    ...createTrainingState(),
    inLesson: false
  };
}

function createTrainingState(moduleId = "git-basics") {
  return {
    schemaVersion: 5,
    inLesson: true,
    viewMode: "guided",
    activeModuleId: moduleId,
    guidedStep: 0,
    cwd: PS_ROOT,
    folders: [],
    initialized: false,
    commits: [],
    branches: { main: null },
    remoteBranches: {},
    currentBranch: "main",
    branchLanes: { main: 0 },
    indexFiles: {},
    workingFiles: {},
    nextCommit: 0,
    editCounter: 1,
    lessonIndex: 0,
    expandedLessonIndex: null,
    repoExplorerOpen: true,
    repoExplorerTouched: false,
    explorerCollapsedFolders: [],
    explorerExpandedFolders: [],
    explorerExpandedFiles: [],
    flowCollapsedFiles: [],
    taskFlags: createTaskFlags(),
    readyChecks: {},
    quizAnswers: {},
    quizSession: createQuizSession("git-basics"),
    terminal: [
      {
        type: "note",
        text: "Ready. Type the highlighted command exactly, then press Enter."
      }
    ],
    pendingMerge: null,
    conflict: null
  };
}

function createCodexState() {
  return {
    ...createTrainingState("git-basics"),
    viewMode: "codex",
    activeModuleId: codexLab.id,
    guidedStep: 0,
    codexSection: 0,
    cwd: CODEX_DEFAULT_CWD,
    codexCli: createCodexCliState(),
    quizSession: createQuizSession(codexLab.id),
    terminal: [
      {
        type: "note",
        text: "Codex CLI simulator ready. Try: node --version; npm --version"
      },
      {
        type: "note",
        text: `Practice path: ${codexLab.cliCommand} -> codex login -> cd ${ORACLE_REPO_ROOT} -> codex`
      }
    ]
  };
}

function createCodexCliState() {
  return {
    installed: false,
    loggedIn: false,
    sessionOpen: false,
    promptRuns: []
  };
}

function createCapstoneState() {
  return {
    ...createTrainingState("git-basics"),
    viewMode: "capstone",
    activeModuleId: capstoneLab.id,
    guidedStep: 0,
    terminal: []
  };
}

function createVSCodeState() {
  return {
    ...createTrainingState("git-basics"),
    viewMode: "vscode",
    activeModuleId: vscodeLab.id,
    guidedStep: 0,
    vscodeSection: 0,
    terminal: []
  };
}

function createTaskFlags() {
  return {
    status: false,
    staged: false,
    committed: false,
    branchCreated: false,
    branchCommitted: false,
    merged: false,
    pushed: false,
    conflictResolved: false
  };
}

function createAdvancedState() {
  const baseFiles = {
    "README.md": "# Oracle repository\n\nTraining snapshot modeled on the Oracle repo structure.\n",
    "AGENTS.md": "# Oracle repo guidance\n\nUse repo-local conventions and keep changes reviewable.\n",
    ".azuredevops/pull_request_template.md": "# Pull Request\n\n## Summary\n## Validation\n## Reviewer focus\n",
    "ccs/sql/meters/README.md": "# CCS meters SQL\n\nMeter, field activity, and emergency response query assets.\n",
    "ccs/sql/meters/ccs_device_channel_multiplier_audit.sql":
      "select device_id, channel_id, multiplier\nfrom ccs_meter.channel_multiplier_audit;\n",
    "ccs/sql/meters/ccs_device_service_agreement_extract.sql":
      "select device_id, service_agreement_id, start_date, end_date\nfrom ccs_meter.device_service_agreement;\n",
    "ccs/sql/meters/ccs_emergency_response_activity_extract.sql":
      "select activity_id, premise_id, meter_id, activity_status\nfrom ccs_meter.emergency_response_activity;\n",
    "ccs/sql/meters/ccs_field_activity_appointment_performance.sql":
      "select appointment_id, activity_type, scheduled_date, completion_status\nfrom ccs_meter.field_activity_appointment;\n",
    "ccs/sql/meters/ccs_open_field_activity_extract.sql":
      "select activity_id, service_point_id, activity_status\nfrom ccs_meter.open_field_activity;\n",
    "docs/runbooks/oracle_sql_review_runbook.md":
      "# Oracle SQL review runbook\n\nReview SQL placement, naming, and validation notes before opening a PR.\n",
    "docs/sql_inventory.md": "# SQL inventory\n\nCatalog of promoted Oracle SQL assets by source area.\n",
    "fusion/sql/gl/fusion_gl_transactions_extract.sql":
      "select journal_id, ledger_name, accounting_date, entered_amount\nfrom fusion_gl.transactions;\n",
    "wacs/sql/work_orders/wacs_work_orders_open_work_orders.sql":
      "select work_order_id, project_number, status\nfrom wacs_work_orders.open_work_orders;\n"
  };

  const workingFiles = clone(baseFiles);
  workingFiles[oracleLab.featureFile] =
    "-- New CCS meters report asset created during the lab.\n" +
    "select zip_code, count(*) as emergency_order_count\n" +
    "from ccs_meter.emergency_response_activity\n" +
    "where completed_date >= dateadd(day, -7, current_date)\n" +
    "group by zip_code;\n";

  return {
    schemaVersion: 5,
    inLesson: true,
    viewMode: "practice",
    activeModuleId: "git-basics",
    guidedStep: modules[0].commands.length,
    cwd: "C:\\Training\\OracleGitLab",
    folders: [oracleLab.folder],
    initialized: true,
    commits: [
      {
        id: "c000",
        message: "Oracle repo baseline snapshot",
        parents: [],
        files: baseFiles,
        branch: "main",
        lane: 0,
        order: 0
      }
    ],
    branches: { main: "c000" },
    remoteBranches: { "origin/main": "c000" },
    currentBranch: "main",
    branchLanes: { main: 0 },
    indexFiles: clone(baseFiles),
    workingFiles,
    nextCommit: 1,
    editCounter: 1,
    lessonIndex: 0,
    expandedLessonIndex: null,
    repoExplorerOpen: true,
    repoExplorerTouched: false,
    explorerCollapsedFolders: [],
    explorerExpandedFolders: [],
    explorerExpandedFiles: [],
    flowCollapsedFiles: [],
    taskFlags: createTaskFlags(),
    readyChecks: {},
    quizAnswers: {},
    quizSession: createQuizSession("git-basics"),
    terminal: [
      {
        type: "note",
        text:
          "Lab ready. This is a local simulator, so commands update the model without touching real Git history."
      }
    ],
    pendingMerge: null,
    conflict: null
  };
}

function pickConflictScenario() {
  return conflictScenarios[Math.floor(Math.random() * conflictScenarios.length)];
}

function findConflictScenario(branch) {
  return conflictScenarios.find((scenario) => scenario.branch === branch);
}

function createConflictState(scenario = pickConflictScenario()) {
  const baseFiles = clone(scenario.baselineFiles);
  const mainFiles = clone(baseFiles);
  mainFiles[scenario.conflictFile] = scenario.mainContent;

  const featureFiles = clone(baseFiles);
  featureFiles[scenario.conflictFile] = scenario.featureContent;

  return {
    ...createAdvancedState(),
    initialized: true,
    inLesson: true,
    guidedStep: modules[0].commands.length,
    commits: [
      {
        id: "c000",
        message: scenario.baselineMessage,
        parents: [],
        files: baseFiles,
        branch: "main",
        lane: 0,
        order: 0
      },
      {
        id: "c001",
        message: scenario.mainMessage,
        parents: ["c000"],
        files: mainFiles,
        branch: "main",
        lane: 0,
        order: 1
      },
      {
        id: "c002",
        message: scenario.featureMessage,
        parents: ["c000"],
        files: featureFiles,
        branch: scenario.branch,
        lane: 1,
        order: 2
      }
    ],
    branches: { main: "c001", [scenario.branch]: "c002" },
    remoteBranches: { "origin/main": "c000" },
    currentBranch: "main",
    branchLanes: { main: 0, [scenario.branch]: 1 },
    indexFiles: clone(mainFiles),
    workingFiles: clone(mainFiles),
    nextCommit: 3,
    editCounter: 1,
    lessonIndex: 4,
    conflictScenarioId: scenario.id,
    terminal: [
      {
        type: "note",
        text:
          `Conflict drill loaded: ${scenario.title}. Run git merge ${scenario.branch}, then resolve ${scenario.conflictFile}, stage it, and commit.`
      }
    ],
    pendingMerge: null,
    conflict: null
  };
}

function bindEvents() {
  document.body.addEventListener("click", (event) => {
    if (suppressNextFlowClick) {
      event.preventDefault();
      event.stopPropagation();
      suppressNextFlowClick = false;
      return;
    }

    const copyButton = event.target.closest("[data-copy-text]");
    if (copyButton) {
      event.preventDefault();
      event.stopPropagation();
      copyTextToClipboard(copyButton);
      return;
    }

    const commandFill = event.target.closest("[data-command-fill]");
    if (commandFill) {
      event.preventDefault();
      event.stopPropagation();
      handleCommandChip(commandFill);
      return;
    }

    const lessonButton = event.target.closest("[data-lesson]");
    if (lessonButton) {
      handleLessonSelection(lessonButton);
      return;
    }

    const quizButton = event.target.closest("[data-quiz]");
    if (quizButton) {
      handleQuizAnswer(quizButton.dataset.quiz, Number(quizButton.dataset.option));
      return;
    }

    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) {
      return;
    }

    handleAction(actionButton);
  });

  document.body.addEventListener("dragstart", handleFlowFileDragStart);
  document.body.addEventListener("dragend", handleFlowFileDragEnd);
  document.body.addEventListener("dragover", handleFlowDragOver);
  document.body.addEventListener("dragleave", handleFlowDragLeave);
  document.body.addEventListener("drop", handleFlowDrop);
  document.body.addEventListener("pointerdown", handleFlowPointerDown);
  document.body.addEventListener("pointermove", handleFlowPointerMove);
  document.body.addEventListener("pointerup", handleFlowPointerUp);
  document.body.addEventListener("pointercancel", handleFlowPointerCancel);

  document.body.addEventListener("submit", (event) => {
    const quizForm = event.target.closest("[data-quiz-form]");
    if (!quizForm) {
      return;
    }

    event.preventDefault();
    const input = quizForm.querySelector("[name='quiz-answer']");
    handleQuizTextAnswer(quizForm.dataset.quizForm, input?.value || "");
  });

  document.body.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const commandFill = event.target.closest("[data-command-fill]");
    if (commandFill) {
      event.preventDefault();
      handleCommandChip(commandFill);
      return;
    }

    const lessonButton = event.target.closest("[data-lesson][role='button']");
    if (lessonButton) {
      event.preventDefault();
      handleLessonSelection(lessonButton);
    }
  });

  document.getElementById("themeToggle").addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleTheme();
  });

  document.getElementById("commandForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("commandInput");
    runCommand(input.value);
    input.value = "";
    input.focus();
  });

  document.getElementById("commandInput").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();
    const input = event.currentTarget;
    runCommand(input.value);
    input.value = "";
    input.focus();
  });

  document.getElementById("terminalOutput").addEventListener("click", (event) => {
    if (event.target.closest("button")) {
      return;
    }

    document.getElementById("commandInput").focus();
  });
}

function handleLessonSelection(lessonButton) {
  const lessonIndex = Number(lessonButton.dataset.lesson);
  const expandedLessonIndex = getExpandedLessonIndex();
  state.lessonIndex = lessonIndex;
  state.expandedLessonIndex =
    lessonButton.dataset.lessonToggle === "true" && expandedLessonIndex === lessonIndex ? -1 : lessonIndex;
  saveState();
  render();
}

function navigateGuidedLesson(delta) {
  const current = Number.isInteger(state.lessonIndex) ? state.lessonIndex : getCurrentLessonIndex();
  const next = clampIndex(current + delta, getActiveLessons().length);
  state.lessonIndex = next;
  state.expandedLessonIndex = next;
}

function handleCommandChip(button) {
  const command = button.dataset.commandFill;
  const commandIndex = Number(button.dataset.commandIndex);
  const canRewind =
    Number.isInteger(commandIndex) &&
    commandIndex >= 0 &&
    commandIndex < state.guidedStep &&
    state.inLesson &&
    !isPracticeMode();

  if (canRewind) {
    rewindToGuidedCommand(commandIndex);
  }

  typeCommandIntoIde(command);
}

function rewindToGuidedCommand(commandIndex) {
  const active = getActiveModule();
  const targetIndex = Math.max(0, Math.min(commandIndex, active.commands.length));
  const previousUiState = {
    activeModuleId: state.activeModuleId,
    quizSession: state.quizSession,
    repoExplorerOpen: state.repoExplorerOpen,
    repoExplorerTouched: state.repoExplorerTouched,
    explorerCollapsedFolders: state.explorerCollapsedFolders,
    explorerExpandedFolders: state.explorerExpandedFolders,
    explorerExpandedFiles: state.explorerExpandedFiles,
    flowCollapsedFiles: state.flowCollapsedFiles
  };

  state = {
    ...createTrainingState(),
    activeModuleId: previousUiState.activeModuleId || "git-basics",
    repoExplorerOpen: Boolean(previousUiState.repoExplorerOpen),
    repoExplorerTouched: Boolean(previousUiState.repoExplorerTouched),
    explorerCollapsedFolders: Array.isArray(previousUiState.explorerCollapsedFolders)
      ? [...previousUiState.explorerCollapsedFolders]
      : [],
    explorerExpandedFolders: Array.isArray(previousUiState.explorerExpandedFolders)
      ? [...previousUiState.explorerExpandedFolders]
      : [],
    explorerExpandedFiles: Array.isArray(previousUiState.explorerExpandedFiles)
      ? [...previousUiState.explorerExpandedFiles]
      : [],
    flowCollapsedFiles: Array.isArray(previousUiState.flowCollapsedFiles) ? [...previousUiState.flowCollapsedFiles] : [],
    quizSession: previousUiState.quizSession || createQuizSession(previousUiState.activeModuleId || "git-basics"),
    terminal: [
      {
        type: "note",
        text: `Rewound to step ${targetIndex + 1}. Prior commands were replayed so the repository matches this point.`
      }
    ]
  };

  for (let index = 0; index < targetIndex; index += 1) {
    const replayCommand = active.commands[index];
    appendTerminal("prompt", `${getPrompt()} ${replayCommand.cmd}`);
    const result = executeCommand(replayCommand.cmd);

    if (result.type === "error") {
      appendTerminal("error", `Replay stopped at step ${index + 1}: ${result.text}`);
      break;
    }

    appendTerminal("success", `Replayed - ${replayCommand.desc}`);
    if (result.text) {
      appendTerminal(result.type, result.text);
    }
    state.guidedStep = index + 1;
    maybeAdvanceLesson();
  }

  state.guidedStep = targetIndex;
  state.lessonIndex = getCurrentLessonIndex();
  state.expandedLessonIndex = state.lessonIndex;
  appendTerminal("note", `Ready to rerun: ${active.commands[targetIndex]?.cmd || "lesson complete"}`);
  saveState();
  render();
}

function typeCommandIntoIde(command) {
  const input = document.getElementById("commandInput");
  if (!input || !command) {
    return;
  }

  input.value = command;
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);
}

function toggleExplorerFolder(button) {
  const path = button.dataset.path;
  if (!path) {
    return;
  }

  const scope = button.dataset.scope || "work";
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  setExplorerFolderExpanded(scope, path, !isExpanded);
}

function toggleExplorerFile(button) {
  const path = button.dataset.path;
  if (!path) {
    return;
  }

  const scope = button.dataset.scope || "work";
  const key = explorerKey(scope, path);
  ensureExplorerState();
  if (state.explorerExpandedFiles.includes(key)) {
    state.explorerExpandedFiles = state.explorerExpandedFiles.filter((item) => item !== key);
    return;
  }

  state.explorerExpandedFiles.push(key);
}

function toggleFlowFile(button) {
  const key = button.dataset.flowKey;
  if (!key) {
    return;
  }

  ensureFlowFileState();
  if (state.flowCollapsedFiles.includes(key)) {
    state.flowCollapsedFiles = state.flowCollapsedFiles.filter((item) => item !== key);
    return;
  }

  state.flowCollapsedFiles.push(key);
}

function handleFlowFileDragStart(event) {
  const row = event.target.closest("[data-flow-file][draggable='true']");
  if (!row || !event.dataTransfer) {
    return;
  }

  const payload = {
    file: row.dataset.flowFile,
    location: row.dataset.flowLocation
  };
  const sourceCard = row.closest(".file-row") || row;

  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("application/x-git-learning-file", JSON.stringify(payload));
  event.dataTransfer.setData("text/plain", payload.file);
  flowNativeDragActive = true;
  sourceCard.classList.add("dragging");
}

function handleFlowFileDragEnd() {
  flowNativeDragActive = false;
  flowPointerDrag = null;
  clearFlowDragState();
}

function handleFlowDragOver(event) {
  const target = event.target.closest("[data-drop-target]");
  if (!target) {
    return;
  }

  event.preventDefault();
  target.classList.add("drag-over");
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
}

function handleFlowDragLeave(event) {
  const target = event.target.closest("[data-drop-target]");
  if (!target || (event.relatedTarget && target.contains(event.relatedTarget))) {
    return;
  }

  target.classList.remove("drag-over");
}

function handleFlowDrop(event) {
  const target = event.target.closest("[data-drop-target]");
  if (!target || !event.dataTransfer) {
    return;
  }

  event.preventDefault();
  const payload = parseFlowDragPayload(event.dataTransfer.getData("application/x-git-learning-file"));
  clearFlowDragState();

  if (!payload?.file) {
    return;
  }

  const targetName = target.dataset.dropTarget;
  handleFlowVisualDrop(targetName, payload);
}

function handleFlowPointerDown(event) {
  if (event.button !== 0) {
    return;
  }

  const dragSource = event.target.closest("[data-flow-file]");
  if (!dragSource) {
    return;
  }
  const sourceCard = dragSource.closest(".file-row") || dragSource;

  flowPointerDrag = {
    file: dragSource.dataset.flowFile,
    location: dragSource.dataset.flowLocation,
    startX: event.clientX,
    startY: event.clientY,
    dragging: false,
    source: sourceCard
  };
}

function handleFlowPointerMove(event) {
  if (!flowPointerDrag || flowNativeDragActive) {
    return;
  }

  const deltaX = event.clientX - flowPointerDrag.startX;
  const deltaY = event.clientY - flowPointerDrag.startY;
  if (!flowPointerDrag.dragging && Math.hypot(deltaX, deltaY) < 8) {
    return;
  }

  event.preventDefault();
  flowPointerDrag.dragging = true;
  flowPointerDrag.source?.classList.add("dragging");
  clearFlowDropHighlights();

  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest("[data-drop-target]");
  if (target) {
    target.classList.add("drag-over");
  }
}

function handleFlowPointerUp(event) {
  if (!flowPointerDrag) {
    return;
  }

  const drag = flowPointerDrag;
  flowPointerDrag = null;
  if (flowNativeDragActive || !drag.dragging) {
    return;
  }

  event.preventDefault();
  suppressNextFlowClick = true;
  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest("[data-drop-target]");
  clearFlowDragState();
  if (!target) {
    return;
  }

  handleFlowVisualDrop(target.dataset.dropTarget, drag);
}

function handleFlowPointerCancel() {
  flowPointerDrag = null;
  clearFlowDragState();
}

function handleFlowVisualDrop(targetName, payload) {
  if (targetName === "staging") {
    visualGitAdd(payload.file, payload.location);
    return;
  }

  if (targetName === "repository") {
    visualGitCommit(payload.file, payload.location);
  }
}

function visualGitAdd(file, location) {
  if (location !== "working") {
    appendTerminal("error", "Drop files from Step 1 into Step 2 to stage them with git add.");
    saveState();
    render();
    return;
  }

  const command = `git add ${file}`;
  appendTerminal("prompt", `${getPrompt()} ${command}`);
  const result = commandAdd([file]);
  appendTerminal(result.type, result.text);

  if (result.type !== "error") {
    advanceGuidedStepForVisualCommand(command);
  }

  saveState();
  render();
}

function visualGitCommit(file, location) {
  if (location !== "staged") {
    appendTerminal("error", "Drop staged files from Step 2 into Step 3 to save the next commit.");
    saveState();
    render();
    return;
  }

  const status = getStatus();
  if (!status.staged.some((entry) => entry.name === file)) {
    appendTerminal("error", `${file} is not currently staged.`);
    saveState();
    render();
    return;
  }

  const expected = getActiveModule().commands[state.guidedStep];
  const command =
    expected && normalizeCommand(expected.cmd).startsWith("git commit ")
      ? expected.cmd
      : `git commit -m "${defaultCommitMessage()}"`;
  appendTerminal("prompt", `${getPrompt()} ${command}`);

  const result = commandCommit(tokenize(command).slice(2));
  appendTerminal(result.type, result.text);

  if (result.type !== "error") {
    advanceGuidedStepForVisualCommand(command);
  }

  saveState();
  render();
}

function advanceGuidedStepForVisualCommand(command) {
  const expected = getActiveModule().commands[state.guidedStep];
  if (state.inLesson && expected && normalizeCommand(command) === normalizeCommand(expected.cmd)) {
    appendTerminal("success", `Guided step complete - ${expected.desc}`);
    state.guidedStep += 1;
  }

  maybeAdvanceLesson();
}

function parseFlowDragPayload(value) {
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

function clearFlowDragState() {
  clearFlowDropHighlights();
  document.querySelectorAll(".dragging, .drag-over").forEach((element) => {
    element.classList.remove("dragging", "drag-over");
  });
}

function clearFlowDropHighlights() {
  document.querySelectorAll(".drag-over").forEach((element) => {
    element.classList.remove("drag-over");
  });
}

function handleAction(button) {
  const action = button.dataset.action;

  if (action === "start-lesson") {
    state = createTrainingState(button.dataset.moduleId || "git-basics");
    saveState();
    render();
    return;
  }

  if (action === "open-simulator") {
    state = createAdvancedState();
    saveState();
    render();
    return;
  }

  if (action === "open-codex-lesson") {
    state = createCodexState();
    saveState();
    render();
    return;
  }

  if (action === "open-capstone-lab") {
    state = createCapstoneState();
    saveState();
    render();
    return;
  }

  if (action === "open-vscode-lab") {
    state = createVSCodeState();
    saveState();
    render();
    return;
  }

  if (action === "back-portal") {
    state.inLesson = false;
    saveState();
    render();
    return;
  }

  if (action === "reset") {
    state = isCodexMode()
      ? createCodexState()
      : isCapstoneMode()
        ? createCapstoneState()
        : isVSCodeMode()
          ? createVSCodeState()
          : isPracticeMode()
            ? createAdvancedState()
            : state.inLesson
              ? createTrainingState()
              : createInitialState();
    saveState();
    render();
    return;
  }

  if (action === "start-conflict") {
    state = createConflictState();
    saveState();
    render();
    return;
  }

  if (action === "toggle-theme") {
    toggleTheme();
    return;
  }

  if (action === "toggle-repo-explorer") {
    state.repoExplorerOpen = !state.repoExplorerOpen;
    state.repoExplorerTouched = true;
    saveState();
    render();
    return;
  }

  if (action === "toggle-explorer-folder") {
    toggleExplorerFolder(button);
    saveState();
    render();
    return;
  }

  if (action === "toggle-explorer-file") {
    toggleExplorerFile(button);
    saveState();
    render();
    return;
  }

  if (action === "toggle-flow-file") {
    toggleFlowFile(button);
    saveState();
    render();
    return;
  }

  if (action === "toggle-ready-check") {
    toggleReadyCheck(button.dataset.readyKey);
    saveState();
    render();
    return;
  }

  if (action === "lesson-prev" || action === "lesson-next") {
    const delta = action === "lesson-next" ? 1 : -1;
    navigateGuidedLesson(delta);
    saveState();
    render();
    return;
  }

  if (action === "codex-prev" || action === "codex-next" || action === "codex-section") {
    const current = Number.isInteger(state.codexSection) ? state.codexSection : 0;
    const requested =
      action === "codex-section"
        ? Number(button.dataset.codexSection)
        : current + (action === "codex-next" ? 1 : -1);
    state.codexSection = clampIndex(requested, codexLab.sections.length);
    saveState();
    render();
    return;
  }

  if (action === "vscode-prev" || action === "vscode-next" || action === "vscode-section") {
    const current = Number.isInteger(state.vscodeSection) ? state.vscodeSection : 0;
    const requested =
      action === "vscode-section"
        ? Number(button.dataset.vscodeSection)
        : current + (action === "vscode-next" ? 1 : -1);
    state.vscodeSection = clampIndex(requested, vscodeLab.sections.length);
    saveState();
    render();
    return;
  }

  if (action === "start-quiz-round") {
    const round = clampQuizRound(Number(button.dataset.round));
    state.quizSession = createQuizSession(state.activeModuleId, round);
    saveState();
    render();
    return;
  }

  if (action === "show-quiz-hint") {
    showQuizHint(button.dataset.quizId);
    saveState();
    render();
    return;
  }

  updateCommandPlaceholder();
}

function runCommand(rawCommand) {
  const command = String(rawCommand || "").trim();
  if (!command) {
    return;
  }

  if (command.toLowerCase() === "clear") {
    state.terminal = [];
    saveState();
    render();
    return;
  }

  if (isCodexMode()) {
    runCodexCommand(command);
    return;
  }

  appendTerminal("prompt", `${getPrompt()} ${command}`);

  const activeModule = getActiveModule();
  const expected = activeModule.commands[state.guidedStep];
  if (state.inLesson && expected && !isGuidedUtilityCommand(command)) {
    if (normalizeCommand(command) !== normalizeCommand(expected.cmd)) {
      appendTerminal("error", `Wrong command. Expected: ${expected.cmd}`);
      saveState();
      render();
      return;
    }

    const result = executeCommand(command);
    if (result.type === "error") {
      appendTerminal(result.type, result.text);
      saveState();
      render();
      return;
    }

    appendTerminal("success", `OK - ${expected.desc}`);
    if (result.text) {
      appendTerminal(result.type, result.text);
    }
    state.guidedStep += 1;
    maybeAdvanceLesson();
    saveState();
    render();
    return;
  }

  const result = executeCommand(command);
  appendTerminal(result.type, result.text);
  maybeAdvanceLesson();
  saveState();
  render();
}

function runCodexCommand(command) {
  ensureCodexCliState();
  appendTerminal("prompt", `${getCodexPrompt()} ${command}`);

  splitCodexCommandLine(command).forEach((part) => {
    const result = executeCodexCommand(part);
    appendTerminal(result.type, result.text);
  });

  saveState();
  render();
}

function splitCodexCommandLine(command) {
  const text = String(command || "").trim();
  if (!text || /^codex\s+(exec\s+)?["']?/i.test(text)) {
    return [text].filter(Boolean);
  }
  return text
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean);
}

function executeCodexCommand(command) {
  ensureCodexCliState();
  const text = String(command || "").trim();
  const normalized = normalizeCommand(text);
  const tokens = tokenize(text);
  const lower = tokens.map((token) => token.toLowerCase());

  if (!text) {
    return { type: "note", text: "Type a setup command or Codex prompt." };
  }

  if (normalized === "help" || normalized === "codex help") {
    return {
      type: "note",
      text:
        [
          "Codex simulator commands:",
          "  node --version",
          "  npm --version",
          `  ${codexLab.cliCommand}`,
          "  codex login",
          `  cd ${ORACLE_REPO_ROOT}`,
          "  Get-Location",
          "  Get-ChildItem -Force",
          "  rg --files",
          "  rg --files -g \"*.sql\"",
          "  git status",
          "  codex",
          "  codex exec \"Review this repo for docs gaps\"",
          "  exit"
        ].join("\n")
    };
  }

  if (normalized === "node --version") {
    return { type: "success", text: "v20.11.1" };
  }

  if (normalized === "npm --version") {
    return { type: "success", text: "10.2.4" };
  }

  if (normalized === normalizeCommand(codexLab.cliCommand)) {
    state.codexCli.installed = true;
    return { type: "success", text: "Installed @openai/codex globally. Next: codex login" };
  }

  if (normalized === "codex --upgrade" || normalized === "codex upgrade") {
    if (!state.codexCli.installed) {
      return { type: "error", text: "Codex is not installed yet. Run the install command first." };
    }
    return { type: "success", text: "Codex CLI is up to date in this simulator." };
  }

  if (normalized === "codex login") {
    if (!state.codexCli.installed) {
      return { type: "error", text: "Install Codex first: npm install -g @openai/codex" };
    }
    state.codexCli.loggedIn = true;
    return { type: "success", text: "Browser sign-in completed. Codex is authenticated for this simulator." };
  }

  if (lower[0] === "cd" || lower[0] === "set-location") {
    return commandCodexCd(tokens.slice(1));
  }

  if (normalized === "get-location" || normalized === "pwd") {
    return { type: "success", text: state.cwd || CODEX_DEFAULT_CWD };
  }

  if (["get-childitem -force", "dir", "ls"].includes(normalized)) {
    return { type: "success", text: renderCodexDirectoryListing() };
  }

  if (lower[0] === "rg" && lower[1] === "--files") {
    const sqlOnly = tokens.includes("-g") && tokens.some((token) => token.replaceAll("'", "").replaceAll('"', "") === "*.sql");
    return { type: "success", text: renderCodexFileSearch(sqlOnly) };
  }

  if (normalized === "git status") {
    if (!isCodexRepoRoot()) {
      return { type: "error", text: "fatal: not a git repository. Navigate to C:\\Repositories\\Oracle first." };
    }
    return {
      type: "success",
      text:
        [
          "On branch feature/codex-training-demo",
          "Your branch is up to date with origin/feature/codex-training-demo.",
          "nothing to commit, working tree clean"
        ].join("\n")
    };
  }

  if (normalized === "git branch") {
    return { type: "success", text: "  main\n* feature/codex-training-demo" };
  }

  if (normalized === "exit") {
    if (!state.codexCli.sessionOpen) {
      return { type: "note", text: "No Codex session is open." };
    }
    state.codexCli.sessionOpen = false;
    return { type: "success", text: "Closed Codex session. Back to PowerShell." };
  }

  if (lower[0] === "codex") {
    return commandCodex(tokens.slice(1), text);
  }

  if (state.codexCli.sessionOpen) {
    return runCodexPrompt(text, "interactive");
  }

  if (looksLikeCodexPrompt(text)) {
    return {
      type: "note",
      text: "This looks like a prompt. Start Codex first with codex, or run it as: codex \"your prompt\"."
    };
  }

  return { type: "error", text: "Command not recognized in the Codex simulator. Type help for supported commands." };
}

function commandCodexCd(args) {
  const target = args.join(" ").trim();
  if (!target) {
    return { type: "error", text: "Specify a folder, for example: cd C:\\Repositories\\Oracle" };
  }

  const normalizedTarget = target.replaceAll("/", "\\").replace(/^["']|["']$/g, "");
  const current = state.cwd || CODEX_DEFAULT_CWD;
  if (normalizedTarget === "..") {
    state.cwd = current.split("\\").slice(0, -1).join("\\") || "C:\\";
    return { type: "success", text: `Location changed to ${state.cwd}` };
  }

  if (normalizePathForCompare(normalizedTarget) === normalizePathForCompare(ORACLE_REPO_ROOT)) {
    state.cwd = ORACLE_REPO_ROOT;
    return { type: "success", text: `Location changed to ${ORACLE_REPO_ROOT}` };
  }

  if (normalizePathForCompare(normalizedTarget) === normalizePathForCompare("C:\\Repositories")) {
    state.cwd = "C:\\Repositories";
    return { type: "success", text: "Location changed to C:\\Repositories" };
  }

  if (normalizedTarget.toLowerCase() === "oracle" && normalizePathForCompare(current) === normalizePathForCompare("C:\\Repositories")) {
    state.cwd = ORACLE_REPO_ROOT;
    return { type: "success", text: `Location changed to ${ORACLE_REPO_ROOT}` };
  }

  return { type: "error", text: `Cannot find path '${target}' in this simulator. Try cd ${ORACLE_REPO_ROOT}` };
}

function commandCodex(args, rawText) {
  if (!state.codexCli.installed) {
    return { type: "error", text: "Codex is not installed yet. Run: npm install -g @openai/codex" };
  }
  if (!state.codexCli.loggedIn) {
    return { type: "error", text: "Codex is not authenticated yet. Run: codex login" };
  }
  if (!isCodexRepoRoot()) {
    return { type: "error", text: `Navigate to the repo root first: cd ${ORACLE_REPO_ROOT}` };
  }

  if (!args.length) {
    state.codexCli.sessionOpen = true;
    return {
      type: "success",
      text: "Codex session started in the Oracle repo. Paste a prompt, or type exit to close the session."
    };
  }

  const mode = args[0]?.toLowerCase() === "exec" ? "exec" : "one-shot";
  const prompt = args[0]?.toLowerCase() === "exec" ? args.slice(1).join(" ") : args.join(" ");
  if (!prompt.trim()) {
    return { type: "error", text: `Provide a prompt, for example: codex ${mode === "exec" ? "exec " : ""}"Inspect this repo"` };
  }

  return runCodexPrompt(prompt, mode, rawText);
}

function runCodexPrompt(prompt, mode = "interactive") {
  const response = simulateCodexPromptResponse(prompt, mode);
  state.codexCli.promptRuns.push({
    prompt,
    mode,
    cwd: state.cwd || CODEX_DEFAULT_CWD
  });
  return { type: "success", text: response };
}

function simulateCodexPromptResponse(prompt, mode) {
  const normalized = String(prompt).toLowerCase();
  const prefix = mode === "exec" ? "codex exec simulation" : "Codex simulation";
  if (normalized.includes("ado") || normalized.includes("ticket")) {
    return [
      `${prefix}: ADO orientation draft`,
      "1. Restate the request in plain language.",
      "2. Infer requirements separately from assumptions.",
      "3. Search likely Oracle repo areas before editing.",
      "4. Propose a branch name and PR validation notes."
    ].join("\n");
  }
  if (normalized.includes("sql") || normalized.includes("lineage")) {
    return [
      `${prefix}: SQL review plan`,
      "- Identify source tables, joins, filters, and output grain.",
      "- Compare nearby SQL files before changing behavior.",
      "- Capture assumptions and validation gaps before commit."
    ].join("\n");
  }
  if (normalized.includes("diff") || normalized.includes("review") || normalized.includes("risk")) {
    return [
      `${prefix}: review checkpoint`,
      "- Review changed files before commit.",
      "- Flag unsupported claims, missing validation, and behavior risks.",
      "- Keep the final PR summary tied to file evidence."
    ].join("\n");
  }
  if (normalized.includes("inspect") || normalized.includes("plan")) {
    return [
      `${prefix}: repo orientation plan`,
      "- Confirm current folder and Git branch.",
      "- Map files with rg --files.",
      "- Identify likely entry points and validation commands.",
      "- Ask before broad edits or uncertain assumptions."
    ].join("\n");
  }
  return [
    `${prefix}: prompt accepted`,
    "I would inspect local context, produce a short plan, keep edits narrow, and report validation plus residual risks."
  ].join("\n");
}

function looksLikeCodexPrompt(text) {
  return /\b(inspect|review|summarize|refactor|draft|identify|explain|analyze|prompt|ticket)\b/i.test(text);
}

function renderCodexDirectoryListing() {
  if (isCodexRepoRoot()) {
    return [".azuredevops", "ccs", "docs", "fusion", "projects", "tests", "wacs", "AGENTS.md", "README.md"].join("\n");
  }
  if (normalizePathForCompare(state.cwd || "") === normalizePathForCompare("C:\\Repositories")) {
    return "Oracle";
  }
  return "No repo files here yet. Use: cd C:\\Repositories\\Oracle";
}

function renderCodexFileSearch(sqlOnly = false) {
  if (!isCodexRepoRoot()) {
    return "No files found because the current folder is not the Oracle repo root.";
  }

  const files = flattenRepoMapFiles(oracleRepoMap);
  const filtered = sqlOnly ? files.filter((file) => file.toLowerCase().endsWith(".sql")) : files;
  return filtered.slice(0, 18).join("\n");
}

function flattenRepoMapFiles(items, parentPath = "") {
  return items.flatMap((item) => {
    const itemPath = item.path || [parentPath, item.name].filter(Boolean).join("/");
    if (item.type === "file") {
      return [itemPath];
    }
    return flattenRepoMapFiles(item.children || [], itemPath);
  });
}

function ensureCodexCliState() {
  state.codexCli = {
    ...createCodexCliState(),
    ...(state.codexCli && typeof state.codexCli === "object" ? state.codexCli : {})
  };
  state.codexCli.promptRuns = Array.isArray(state.codexCli.promptRuns) ? state.codexCli.promptRuns : [];
  if (!state.cwd) {
    state.cwd = CODEX_DEFAULT_CWD;
  }
  return state.codexCli;
}

function getCodexPrompt() {
  ensureCodexCliState();
  return state.codexCli.sessionOpen ? "codex>" : `PS ${state.cwd || CODEX_DEFAULT_CWD}>`;
}

function isCodexRepoRoot() {
  return normalizePathForCompare(state.cwd || "") === normalizePathForCompare(ORACLE_REPO_ROOT);
}

function normalizePathForCompare(path) {
  return String(path || "").replaceAll("/", "\\").replace(/\\+$/g, "").toLowerCase();
}

function executeCommand(command) {
  const outFile = parseOutFile(command);
  if (outFile) {
    return commandOutFile(outFile);
  }

  const tokens = tokenize(command);
  const lower = tokens.map((token) => token.toLowerCase());

  if (lower[0] === "help" || (lower[0] === "git" && lower[1] === "help")) {
    return {
      type: "note",
      text:
        [
          "Supported commands:",
          "  git status",
          "  git add <file> | git add .",
          '  git commit -m "message"',
          "  git branch | git branch <name>",
          "  git switch <branch> | git switch -c <branch>",
          "  git merge <branch>",
          "  git log --oneline",
          "  git push | git pull",
          "  git restore --staged <file>",
          "  mkdir <folder>",
          "  cd <folder>",
          "  git init",
          `  "${oracleLab.firstFileContent}" | Out-File README.md`,
          "  edit <file>",
          "  resolve <file>",
          "  clear"
        ].join("\n")
    };
  }

  if (lower[0] === "mkdir") {
    return commandMkdir(tokens.slice(1));
  }

  if (lower[0] === "cd") {
    return commandCd(tokens.slice(1));
  }

  if (lower[0] === "edit") {
    return commandEdit(tokens.slice(1));
  }

  if (lower[0] === "resolve") {
    return commandResolve(tokens.slice(1));
  }

  if (lower[0] !== "git") {
    return {
      type: "error",
      text: "Command not recognized. Use help to list supported simulator commands."
    };
  }

  switch (lower[1]) {
    case "init":
      return commandInit();
    case "status":
      return commandStatus();
    case "add":
      return commandAdd(tokens.slice(2));
    case "commit":
      return commandCommit(tokens.slice(2));
    case "branch":
      return commandBranch(tokens.slice(2));
    case "switch":
      return commandSwitch(tokens.slice(2));
    case "checkout":
      return commandSwitch(tokens.slice(2));
    case "merge":
      return commandMerge(tokens.slice(2));
    case "log":
      return commandLog(tokens.slice(2));
    case "push":
      return commandPush();
    case "pull":
      return commandPull();
    case "restore":
      return commandRestore(tokens.slice(2));
    default:
      return {
        type: "error",
        text: `git ${tokens[1] || ""} is not implemented in this lab. Use help for supported commands.`
      };
  }
}

function commandMkdir(args) {
  const folder = args[0];
  if (!folder) {
    return { type: "error", text: "Specify a folder name." };
  }

  if (!state.folders.includes(folder)) {
    state.folders.push(folder);
  }

  return { type: "success", text: `Directory created: ${folder}` };
}

function commandCd(args) {
  const folder = args[0];
  if (!folder) {
    return { type: "error", text: "Specify a folder to enter." };
  }

  if (!state.folders.includes(folder)) {
    return { type: "error", text: `Cannot find path '${folder}' because it does not exist.` };
  }

  state.cwd = `${PS_ROOT}\\${toTitleFolder(folder)}`;
  return { type: "success", text: `Location changed to ${state.cwd}` };
}

function commandInit() {
  if (state.initialized) {
    return { type: "note", text: "Reinitialized existing Git repository." };
  }

  state.initialized = true;
  state.currentBranch = "main";
  state.branches = { main: null };
  state.branchLanes = { main: 0 };
  state.remoteBranches = {};
  state.indexFiles = {};
  state.workingFiles = {};
  state.commits = [];
  state.nextCommit = 0;

  return { type: "success", text: "Initialized empty Git repository in .git/" };
}

function commandOutFile(outFile) {
  if (!state.initialized) {
    return { type: "error", text: "Create a Git repository first with git init." };
  }

  state.workingFiles[outFile.file] = `${outFile.content}\n`;
  return { type: "success", text: `Created ${outFile.file}` };
}

function commandStatus() {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  state.taskFlags.status = true;
  const status = getStatus();
  const lines = [`On branch ${state.currentBranch}`];

  if (!hasHeadCommit()) {
    lines.push("No commits yet");
  }

  if (state.conflict) {
    lines.push("You have unmerged paths.");
    lines.push(`  unresolved: ${state.conflict.files.join(", ")}`);
  }

  if (state.pendingMerge && !state.conflict) {
    lines.push(`All conflicts fixed but you are still merging ${state.pendingMerge.source}.`);
  }

  if (status.staged.length) {
    lines.push("Changes to be committed:");
    status.staged.forEach((entry) => lines.push(`  ${entry.stagedType}: ${entry.name}`));
  }

  if (status.unstaged.length) {
    lines.push("Changes not staged for commit:");
    status.unstaged.forEach((entry) => lines.push(`  ${entry.unstagedType}: ${entry.name}`));
  }

  if (status.untracked.length) {
    lines.push("Untracked files:");
    status.untracked.forEach((entry) => lines.push(`  ${entry.name}`));
  }

  if (status.clean && !state.pendingMerge) {
    lines.push("nothing to commit, working tree clean");
  }

  return {
    type: status.clean ? "success" : "note",
    text: lines.join("\n")
  };
}

function commandAdd(paths) {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  if (!paths.length) {
    return { type: "error", text: "Nothing specified. Use git add <file> or git add ." };
  }

  const selected = expandPaths(paths);
  if (!selected.length) {
    return { type: "error", text: "No matching files found in the working tree." };
  }

  selected.forEach((name) => {
    if (state.workingFiles[name] === undefined) {
      delete state.indexFiles[name];
    } else {
      state.indexFiles[name] = state.workingFiles[name];
    }
  });

  state.taskFlags.staged = getStatus().staged.length > 0 || state.taskFlags.staged;
  return {
    type: "success",
    text: `Staged ${selected.length} file${selected.length === 1 ? "" : "s"}: ${selected.join(", ")}`
  };
}

function commandCommit(args) {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  if (state.conflict) {
    return {
      type: "error",
      text: "Resolve all conflict markers before committing the merge."
    };
  }

  const status = getStatus();
  if (!status.staged.length && !state.pendingMerge) {
    return {
      type: "error",
      text: "No staged changes to commit. Use git add before git commit."
    };
  }

  const message = extractCommitMessage(args) || defaultCommitMessage();
  const parents = state.pendingMerge
    ? [state.pendingMerge.targetHead, state.pendingMerge.sourceHead]
    : hasHeadCommit()
      ? [headId()]
      : [];

  const commit = createCommitFromFiles(message, parents, clone(state.indexFiles));
  state.branches[state.currentBranch] = commit.id;
  state.indexFiles = clone(commit.files);

  if (state.pendingMerge) {
    state.workingFiles = clone(commit.files);
    state.taskFlags.merged = true;
    state.pendingMerge = null;
  }

  state.taskFlags.committed = true;
  if (state.currentBranch !== "main") {
    state.taskFlags.branchCommitted = true;
  }

  return {
    type: "success",
    text: `[${state.currentBranch} ${commit.id}] ${message}`
  };
}

function commandBranch(args) {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  if (!args.length) {
    const lines = Object.keys(state.branches)
      .sort()
      .map((name) => `${name === state.currentBranch ? "*" : " "} ${name} ${state.branches[name] || "(no commits yet)"}`);
    return { type: "success", text: lines.join("\n") };
  }

  const name = args[0];
  return createBranch(name, false);
}

function commandSwitch(args) {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  if (!args.length) {
    return { type: "error", text: "Specify a branch name." };
  }

  if (args[0] === "-c" || args[0] === "-b") {
    if (!args[1]) {
      return { type: "error", text: "Specify a new branch name." };
    }
    return createBranch(args[1], true);
  }

  const branch = args[0];
  if (!Object.prototype.hasOwnProperty.call(state.branches, branch)) {
    return { type: "error", text: `Branch not found: ${branch}` };
  }

  const status = getStatus();
  if (!status.clean || state.pendingMerge) {
    return {
      type: "error",
      text: "Working tree has open changes. Commit, stage, or reset the lab before switching branches."
    };
  }

  state.currentBranch = branch;
  const files = currentHeadFiles();
  state.indexFiles = clone(files);
  state.workingFiles = clone(files);
  state.pendingMerge = null;
  state.conflict = null;

  return { type: "success", text: `Switched to branch ${branch}` };
}

function commandMerge(args) {
  if (!state.initialized || !hasHeadCommit()) {
    return { type: "error", text: "Create at least one commit before merging branches." };
  }

  const source = args[0];
  if (!source) {
    return { type: "error", text: "Specify a branch to merge." };
  }

  if (!Object.prototype.hasOwnProperty.call(state.branches, source) || !state.branches[source]) {
    return { type: "error", text: `Branch not found: ${source}` };
  }

  if (source === state.currentBranch) {
    return { type: "success", text: "Already up to date." };
  }

  const status = getStatus();
  if (!status.clean || state.pendingMerge) {
    return {
      type: "error",
      text: "Commit or resolve current changes before starting a merge."
    };
  }

  const targetHead = headId();
  const sourceHead = state.branches[source];

  if (isAncestor(sourceHead, targetHead)) {
    return { type: "success", text: "Already up to date." };
  }

  if (isAncestor(targetHead, sourceHead)) {
    const sourceCommit = getCommit(sourceHead);
    state.branches[state.currentBranch] = sourceHead;
    state.indexFiles = clone(sourceCommit.files);
    state.workingFiles = clone(sourceCommit.files);
    state.taskFlags.merged = true;
    return {
      type: "success",
      text: `Fast-forward\n${targetHead}..${sourceHead}  ${source} -> ${state.currentBranch}`
    };
  }

  const baseId = getMergeBase(targetHead, sourceHead);
  const conflicts = findConflicts(baseId, targetHead, sourceHead);
  if (conflicts.length) {
    const scenario = findConflictScenario(source);
    const mergeMessage = scenario?.mergeMessage || `Merge branch '${source}'`;
    const targetFiles = clone(getCommit(targetHead).files);
    const sourceFiles = getCommit(sourceHead).files;
    conflicts.forEach((file) => {
      targetFiles[file] = [
        "<<<<<<< HEAD",
        getCommit(targetHead).files[file] || "",
        "=======",
        sourceFiles[file] || "",
        `>>>>>>> ${source}`
      ].join("\n");
    });

    state.workingFiles = targetFiles;
    state.indexFiles = clone(getCommit(targetHead).files);
    state.pendingMerge = { source, sourceHead, targetHead, mergeMessage };
    state.conflict = { files: conflicts, source, sourceHead, targetHead, mergeMessage };

    return {
      type: "error",
      text:
        [
          `CONFLICT: ${conflicts.join(", ")}`,
          "Automatic merge failed. Fix conflicts, then run:",
          `  resolve ${conflicts[0]}`,
          `  git add ${conflicts[0]}`,
          `  git commit -m "${mergeMessage}"`
        ].join("\n")
    };
  }

  const mergedFiles = mergeSnapshots(baseId, targetHead, sourceHead);
  const scenario = findConflictScenario(source);
  const commit = createCommitFromFiles(scenario?.mergeMessage || `Merge branch '${source}'`, [targetHead, sourceHead], mergedFiles);
  state.branches[state.currentBranch] = commit.id;
  state.indexFiles = clone(commit.files);
  state.workingFiles = clone(commit.files);
  state.taskFlags.merged = true;

  return {
    type: "success",
    text: `Merge made commit ${commit.id}.`
  };
}

function commandLog(args) {
  if (!state.initialized || !hasHeadCommit()) {
    return { type: "note", text: "No commits yet." };
  }

  const oneline = args.includes("--oneline");
  const commits = reachableCommits(headId());
  const lines = commits.map((commit) => {
    const branches = branchLabelsForCommit(commit.id);
    const labels = branches.length ? ` (${branches.join(", ")})` : "";
    return oneline
      ? `${commit.id}${labels} ${commit.message}`
      : `commit ${commit.id}${labels}\n    ${commit.message}`;
  });
  return { type: "success", text: lines.join("\n") };
}

function commandPush() {
  if (!state.initialized || !hasHeadCommit()) {
    return { type: "error", text: "Create a commit before pushing." };
  }

  if (state.pendingMerge || state.conflict) {
    return { type: "error", text: "Finish the merge before pushing." };
  }

  const remoteName = `origin/${state.currentBranch}`;
  state.remoteBranches[remoteName] = headId();
  state.taskFlags.pushed = true;
  return {
    type: "success",
    text: `Pushed ${state.currentBranch} to ${remoteName} at ${headId()}.`
  };
}

function commandPull() {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  const remoteName = `origin/${state.currentBranch}`;
  const remoteHead = state.remoteBranches[remoteName];
  if (!remoteHead) {
    return { type: "note", text: `${remoteName} does not exist yet. Use git push to publish it.` };
  }

  if (remoteHead === headId()) {
    return { type: "success", text: "Already up to date." };
  }

  if (isAncestor(headId(), remoteHead)) {
    const remoteCommit = getCommit(remoteHead);
    state.branches[state.currentBranch] = remoteHead;
    state.indexFiles = clone(remoteCommit.files);
    state.workingFiles = clone(remoteCommit.files);
    return { type: "success", text: `Fast-forwarded ${state.currentBranch} to ${remoteHead}.` };
  }

  return {
    type: "note",
    text: "Remote and local branches diverged. In real Git, pull would need a merge or rebase."
  };
}

function commandRestore(args) {
  if (!state.initialized) {
    return { type: "error", text: "fatal: not a git repository. Run git init first." };
  }

  if (args[0] !== "--staged") {
    return { type: "error", text: "This lab supports git restore --staged <file>." };
  }

  const file = args[1];
  if (!file) {
    return { type: "error", text: "Specify a file to unstage." };
  }

  const headFiles = currentHeadFiles();
  if (headFiles[file] === undefined) {
    delete state.indexFiles[file];
  } else {
    state.indexFiles[file] = headFiles[file];
  }

  return { type: "success", text: `Unstaged ${file}.` };
}

function commandEdit(args) {
  if (!state.initialized) {
    return { type: "error", text: "Create a Git repository first with git init." };
  }

  const file = args[0];
  if (!file) {
    return { type: "error", text: "Specify a file to edit." };
  }

  editFile(file);
  return { type: "note", text: `Edited ${file}. Use git status to inspect the working tree.` };
}

function commandResolve(args) {
  const file = args[0];
  if (!file) {
    return { type: "error", text: "Specify a conflicted file to resolve." };
  }

  if (!state.conflict || !state.conflict.files.includes(file)) {
    return { type: "error", text: `${file} is not marked as conflicted.` };
  }

  const mergeMessage = state.conflict.mergeMessage || state.pendingMerge?.mergeMessage;
  const targetContent = getCommit(state.conflict.targetHead).files[file] || "";
  const sourceContent = getCommit(state.conflict.sourceHead).files[file] || "";
  state.workingFiles[file] = mergeUniqueLines(targetContent, sourceContent);
  state.conflict.files = state.conflict.files.filter((name) => name !== file);

  if (!state.conflict.files.length) {
    state.conflict = null;
    state.taskFlags.conflictResolved = true;
  }

  return {
    type: "success",
    text: `Resolved ${file}. Stage it with git add ${file}, then commit with git commit -m "${mergeMessage || defaultCommitMessage()}".`
  };
}

function createBranch(name, switchTo) {
  if (!hasHeadCommit()) {
    return { type: "error", text: "Create the first commit before creating additional branches." };
  }

  if (!isValidBranchName(name)) {
    return {
      type: "error",
      text: "Branch names in this lab can use letters, numbers, dots, dashes, underscores, and slashes."
    };
  }

  if (Object.prototype.hasOwnProperty.call(state.branches, name)) {
    return { type: "error", text: `Branch already exists: ${name}` };
  }

  state.branches[name] = headId();
  state.branchLanes[name] = nextLane();
  state.taskFlags.branchCreated = true;

  if (switchTo) {
    state.currentBranch = name;
    return { type: "success", text: `Switched to a new branch ${name}` };
  }

  return { type: "success", text: `Created branch ${name} at ${headId()}.` };
}

function editFile(file) {
  const next = state.editCounter++;
  const existing = state.workingFiles[file];
  if (existing === undefined) {
    state.workingFiles[file] =
      `# ${file}\n\nCreated in the working tree.\nLocal edit ${next}: document the Oracle repo asset change.\n`;
    return;
  }

  const separator = existing.endsWith("\n") ? "" : "\n";
  state.workingFiles[file] =
    `${existing}${separator}Local edit ${next}: refine Oracle repo asset.\n`;
}

function extractCommitMessage(args) {
  const index = args.findIndex((arg) => arg === "-m" || arg === "--message");
  if (index === -1) {
    return "";
  }
  return args[index + 1] || "";
}

function defaultCommitMessage() {
  if (state.pendingMerge) {
    return state.pendingMerge.mergeMessage || `Merge branch '${state.pendingMerge.source}'`;
  }
  return "Update tracked files";
}

function createCommitFromFiles(message, parents, files) {
  const commit = {
    id: `c${String(state.nextCommit).padStart(3, "0")}`,
    message,
    parents,
    files: clone(files),
    branch: state.currentBranch,
    lane: state.branchLanes[state.currentBranch] || 0,
    order: state.commits.length
  };
  state.nextCommit += 1;
  state.commits.push(commit);
  return commit;
}

function getStatus() {
  const headFiles = currentHeadFiles();
  const names = uniqueSorted([
    ...Object.keys(headFiles),
    ...Object.keys(state.indexFiles),
    ...Object.keys(state.workingFiles)
  ]);

  const entries = names.map((name) => {
    const head = headFiles[name];
    const index = state.indexFiles[name];
    const working = state.workingFiles[name];
    const stagedType = index === head ? null : changeType(head, index);
    const untracked = head === undefined && index === undefined && working !== undefined;
    const unstagedType = untracked || working === index ? null : changeType(index, working);

    return {
      name,
      stagedType,
      unstagedType,
      untracked,
      conflicted: Boolean(state.conflict && state.conflict.files.includes(name)),
      working
    };
  });

  const staged = entries.filter((entry) => entry.stagedType);
  const untracked = entries.filter((entry) => entry.untracked);
  const unstaged = entries.filter((entry) => entry.unstagedType && !entry.untracked);

  return {
    entries,
    staged,
    unstaged,
    untracked,
    clean: !staged.length && !unstaged.length && !untracked.length && !state.conflict
  };
}

function changeType(before, after) {
  if (before === undefined && after !== undefined) {
    return "new file";
  }
  if (before !== undefined && after === undefined) {
    return "deleted";
  }
  return "modified";
}

function expandPaths(paths) {
  if (paths.includes(".") || paths.includes("-A") || paths.includes("--all")) {
    return uniqueSorted(Object.keys(state.workingFiles));
  }

  return uniqueSorted(
    paths.filter((file) => state.workingFiles[file] !== undefined || state.indexFiles[file] !== undefined)
  );
}

function isAncestor(ancestorId, descendantId) {
  const stack = [descendantId];
  const seen = new Set();

  while (stack.length) {
    const id = stack.pop();
    if (id === ancestorId) {
      return true;
    }
    if (seen.has(id)) {
      continue;
    }
    seen.add(id);
    const commit = getCommit(id);
    commit.parents.forEach((parent) => stack.push(parent));
  }

  return false;
}

function getMergeBase(targetId, sourceId) {
  const targetAncestors = new Set(reachableCommits(targetId).map((commit) => commit.id));
  return reachableCommits(sourceId).find((commit) => targetAncestors.has(commit.id))?.id || targetId;
}

function findConflicts(baseId, targetId, sourceId) {
  const base = getCommit(baseId).files;
  const target = getCommit(targetId).files;
  const source = getCommit(sourceId).files;
  const names = uniqueSorted([...Object.keys(base), ...Object.keys(target), ...Object.keys(source)]);

  return names.filter((name) => {
    const targetChanged = target[name] !== base[name];
    const sourceChanged = source[name] !== base[name];
    return targetChanged && sourceChanged && target[name] !== source[name];
  });
}

function mergeSnapshots(baseId, targetId, sourceId) {
  const base = getCommit(baseId).files;
  const target = clone(getCommit(targetId).files);
  const source = getCommit(sourceId).files;
  const names = uniqueSorted([...Object.keys(base), ...Object.keys(target), ...Object.keys(source)]);

  names.forEach((name) => {
    const sourceChanged = source[name] !== base[name];
    const targetChanged = target[name] !== base[name];
    if (sourceChanged && !targetChanged) {
      if (source[name] === undefined) {
        delete target[name];
      } else {
        target[name] = source[name];
      }
    }
  });

  return target;
}

function reachableCommits(startId) {
  const result = [];
  const seen = new Set();

  function visit(id) {
    if (!id || seen.has(id)) {
      return;
    }
    seen.add(id);
    const commit = getCommit(id);
    result.push(commit);
    commit.parents.forEach(visit);
  }

  visit(startId);
  return result.sort((a, b) => b.order - a.order);
}

function mergeUniqueLines(targetContent, sourceContent) {
  const lines = [];
  [targetContent, sourceContent].forEach((content) => {
    String(content)
      .split(/\r?\n/)
      .map((line) => line.trimEnd())
      .filter(Boolean)
      .forEach((line) => {
        if (!lines.includes(line)) {
          lines.push(line);
        }
      });
  });
  lines.push("Resolution: reviewed combined rule set before publish");
  return `${lines.join("\n")}\n`;
}

function maybeAdvanceLesson() {
  const activeLessons = getActiveLessons();
  const active = activeLessons[state.lessonIndex];
  if (!active || !active.complete(state) || state.lessonIndex >= activeLessons.length - 1) {
    return;
  }

  const next = activeLessons[state.lessonIndex + 1];
  state.lessonIndex += 1;
  state.expandedLessonIndex = state.lessonIndex;
  appendTerminal("note", `Lesson complete. Next: ${next.title}.`);
}

function render() {
  updateThemeButton();
  renderPortal();

  const portalView = document.getElementById("portalView");
  const statusStrip = document.getElementById("statusStrip");
  const labView = document.getElementById("labView");
  const practiceMode = isPracticeMode();
  const codexMode = isCodexMode();
  const capstoneMode = isCapstoneMode();
  const vscodeMode = isVSCodeMode();
  portalView.hidden = Boolean(state.inLesson);
  statusStrip.hidden = !state.inLesson || practiceMode || codexMode || capstoneMode || vscodeMode;
  labView.hidden = !state.inLesson;
  labView.classList.toggle("practice-workspace", practiceMode);
  labView.classList.toggle("codex-workspace", codexMode);
  labView.classList.toggle("capstone-workspace", capstoneMode);
  labView.classList.toggle("vscode-workspace", vscodeMode);
  labView.classList.toggle("git-workspace", !practiceMode && !codexMode && !capstoneMode && !vscodeMode);
  updateTopbarContextActions(practiceMode);

  if (!state.inLesson) {
    return;
  }

  if (codexMode) {
    renderCodexWorkspace();
    return;
  }

  if (capstoneMode) {
    renderCapstoneWorkspace();
    return;
  }

  if (vscodeMode) {
    renderVSCodeWorkspace();
    return;
  }

  renderRepositoryDirectory();

  if (practiceMode) {
    renderPracticeWorkspace();
    return;
  }

  renderStatusStrip();
  renderLessons();
  renderGuidedCommands();
  renderTerminal();
  renderQuiz();
}

function updateTopbarContextActions(practiceMode) {
  const conflictButton = document.querySelector('[data-action="start-conflict"]');
  const conflictRow = conflictButton?.closest(".topbar-action-secondary");
  if (conflictButton) {
    conflictButton.hidden = !practiceMode;
  }
  if (conflictRow) {
    conflictRow.hidden = !practiceMode;
  }
}

function loadTheme() {
  try {
    return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  } catch (error) {
    return "light";
  }
}

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  try {
    localStorage.setItem(THEME_KEY, nextTheme);
  } catch (error) {
    // Theme still applies for this session if storage is unavailable.
  }
  updateThemeButton();
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
}

function updateThemeButton() {
  const button = document.getElementById("themeToggle");
  const label = document.getElementById("themeLabel");
  if (!button || !label) {
    return;
  }

  const isDark = document.documentElement.dataset.theme === "dark";
  const targetTheme = isDark ? "light" : "dark";
  const targetLabel = targetTheme === "dark" ? "Dark" : "Light";
  button.setAttribute("aria-pressed", String(isDark));
  button.setAttribute("aria-label", `Switch to ${targetTheme} mode`);
  button.setAttribute("title", `Switch to ${targetTheme} mode`);
  label.textContent = targetLabel;
}

function renderPortal() {
  const gitModule = modules[0];
  const projectModule = modules.find((module) => module.id === "project-work");
  document.getElementById("portalView").innerHTML = `
    <div class="course-stack">
      ${renderCodexCourseCard()}
      ${renderVSCodeCourseCard()}
      ${renderCourseCard(gitModule)}
      ${projectModule ? renderCourseCard(projectModule) : ""}
      ${renderCapstoneCourseCard()}
    </div>
    <aside class="course-side">
      <section class="course-section">
        <h3>Learning paths</h3>
        <ol class="lab-steps">
          <li><strong>${escapeHtml(codexLab.title)}</strong><span>Separate Codex lesson and official setup link.</span></li>
          <li><strong>${escapeHtml(vscodeLab.title)}</strong><span>Brief editor orientation: Explorer, search, terminal, and Source Control.</span></li>
          <li><strong>${escapeHtml(gitModule.title)}</strong><span>Interactive Git mechanics, ADO context, branches, commits, and merge readiness.</span></li>
          <li><strong>${escapeHtml(projectModule?.title || "GIT Lab 2: Projects")}</strong><span>Project capsule methodology: README, decision-index, workstreams, then branch-based execution.</span></li>
          <li><strong>${escapeHtml(capstoneLab.title)}</strong><span>Codex-assisted repo review kit with durable notes, lineage, quality checks, and final diff review.</span></li>
        </ol>
      </section>
      <section class="course-section">
        <h3>Git + ADO steps</h3>
        <ol class="lab-steps">
          ${gitModule.labSteps.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ol>
      </section>
      ${
        projectModule
          ? `<section class="course-section">
              <h3>Longer project steps</h3>
              <ol class="lab-steps">
                ${projectModule.labSteps.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ol>
            </section>`
          : ""
      }
      <section class="course-section">
        <h3>ADO methodologies</h3>
        <ul class="context-list">
          <li><strong>Use case 1:</strong> everyday work starts from an ADO ticket and happens on a focused branch.</li>
          <li><strong>Use case 2:</strong> longer project work starts with a README and decision-index on main, then branches into workstreams.</li>
          <li><strong>When needed:</strong> add <code>workstreams.md</code> for collaborators or parallel tracks.</li>
        </ul>
      </section>
      <section class="course-section">
        <h3>Repo review kit</h3>
        <ul class="context-list">
          ${capstoneLab.deliverables.map((item) => `<li><code>${escapeHtml(item)}</code></li>`).join("")}
        </ul>
      </section>
      <section class="course-section">
        <h3>VS Code basics</h3>
        <ul class="context-list">
          ${vscodeLab.shortcuts
            .map(([label, value]) => `<li>${escapeHtml(label)}: <code>${escapeHtml(value)}</code></li>`)
            .join("")}
        </ul>
      </section>
      <section class="course-section">
        <h3>Codex access</h3>
        <ul class="context-list">
          <li>Official setup page: <a href="${escapeAttribute(codexLab.setupUrl)}" target="_blank" rel="noreferrer">Get started with Codex</a></li>
          <li>CLI install command: <code>${escapeHtml(codexLab.cliCommand)}</code></li>
        </ul>
      </section>
      <section class="course-section">
        <h3>Git glossary</h3>
        ${renderGlossary()}
      </section>
      <section class="course-section">
        <h3>Meeting context</h3>
        <ul class="context-list">
          ${(gitModule.meetingContext || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>
      <section class="course-section">
        <h3>Resources</h3>
        <ul class="resource-list">
          ${gitModule.resources
            .map(([label, href]) => `<li><a href="${escapeAttribute(href)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a></li>`)
            .join("")}
        </ul>
      </section>
    </aside>
  `;
}

function renderCourseCard(module) {
  return `
    <article class="course-card">
      <span class="section-kicker">Training module</span>
      <h2>${escapeHtml(module.title)}</h2>
      <p>${escapeHtml(module.description)}</p>
      <div class="course-meta">
        <span class="pill blue">${escapeHtml(module.level)}</span>
        <span class="pill green">${escapeHtml(module.time)}</span>
        <span class="pill gray">${escapeHtml(module.labTitle)}</span>
      </div>
      <div class="portal-actions">
        <button class="icon-button primary-button" type="button" data-action="start-lesson" data-module-id="${escapeAttribute(module.id)}">
          <span aria-hidden="true">S</span>
          <span>${escapeHtml(module.startLabel || "Start Lesson")}</span>
        </button>
        ${
          module.id === "git-basics"
            ? `<button class="icon-button secondary" type="button" data-action="open-simulator">
                <span aria-hidden="true">L</span>
                <span>Open Git practice lab</span>
              </button>`
            : ""
        }
      </div>
    </article>
  `;
}

function renderCapstoneCourseCard() {
  return `
    <article class="course-card capstone-course-card">
      <span class="section-kicker">Capstone lab</span>
      <h2>${escapeHtml(capstoneLab.title)}</h2>
      <p>${escapeHtml(capstoneLab.description)}</p>
      <div class="course-meta">
        <span class="pill blue">${escapeHtml(capstoneLab.level)}</span>
        <span class="pill green">${escapeHtml(capstoneLab.time)}</span>
        <span class="pill gray">${escapeHtml(capstoneLab.labTitle)}</span>
      </div>
      <div class="portal-actions">
        <button class="icon-button primary-button" type="button" data-action="open-capstone-lab">
          <span aria-hidden="true">3</span>
          <span>Open repo review kit</span>
        </button>
      </div>
    </article>
  `;
}

function renderVSCodeCourseCard() {
  return `
    <article class="course-card vscode-course-card">
      <span class="section-kicker">Brief lab</span>
      <h2>${escapeHtml(vscodeLab.title)}</h2>
      <p>${escapeHtml(vscodeLab.description)}</p>
      <div class="course-meta">
        <span class="pill blue">${escapeHtml(vscodeLab.level)}</span>
        <span class="pill green">${escapeHtml(vscodeLab.time)}</span>
        <span class="pill gray">${escapeHtml(vscodeLab.labTitle)}</span>
      </div>
      <div class="portal-actions">
        <button class="icon-button primary-button" type="button" data-action="open-vscode-lab">
          <span aria-hidden="true">V</span>
          <span>Open VS Code lab</span>
        </button>
        <a class="icon-button secondary" href="${escapeAttribute(vscodeLab.setupUrl)}" target="_blank" rel="noreferrer">
          <span aria-hidden="true">D</span>
          <span>Get VS Code</span>
        </a>
      </div>
    </article>
  `;
}

function renderCodexCourseCard() {
  return `
    <article class="course-card codex-course-card">
      <span class="section-kicker">Separate tool</span>
      <h2>${escapeHtml(codexLab.title)}</h2>
      <p>${escapeHtml(codexLab.description)}</p>
      <div class="course-meta">
        <span class="pill blue">${escapeHtml(codexLab.level)}</span>
        <span class="pill green">${escapeHtml(codexLab.time)}</span>
        <span class="pill gray">${escapeHtml(codexLab.labTitle)}</span>
      </div>
      <div class="portal-actions">
        <button class="icon-button primary-button" type="button" data-action="open-codex-lesson">
          <span aria-hidden="true">R</span>
          <span>Open Codex lesson</span>
        </button>
        <a class="icon-button secondary" href="${escapeAttribute(codexLab.setupUrl)}" target="_blank" rel="noreferrer">
          <span aria-hidden="true">C</span>
          <span>Get Codex</span>
        </a>
      </div>
    </article>
  `;
}

function renderStatusStrip() {
  const status = getStatus();
  const headLabel = currentHeadLabel();
  const remote = state.remoteBranches[`origin/${state.currentBranch}`];
  const remoteText = remote ? (remote === headId() ? "synced" : "not pushed") : "not published";
  const initializedText = state.initialized ? state.currentBranch : "not initialized";

  document.getElementById("statusStrip").innerHTML = [
    metric("Branch", initializedText),
    metric("HEAD", headLabel),
    metric("Working tree", status.clean ? "clean" : "changes open", status.clean ? "good" : "warn"),
    metric("Staged", String(status.staged.length), status.staged.length ? "good" : ""),
    metric("Remote", remoteText, remoteText === "synced" ? "good" : "warn")
  ].join("");
}

function metric(label, value, tone = "") {
  return `<div class="metric ${tone}"><b>${escapeHtml(label)}</b><span>${escapeHtml(value)}</span></div>`;
}

function renderLessons() {
  const activeLessons = getActiveLessons();
  const completed = activeLessons.filter((lesson) => lesson.complete(state)).length;
  const currentLessonIndex = getCurrentLessonIndex();
  const expandedLessonIndex = getExpandedLessonIndex();
  document.getElementById("lessonProgress").textContent = `${completed} of ${activeLessons.length} complete`;

  document.getElementById("lessonList").innerHTML = activeLessons
    .map((lesson, index) => {
      const complete = lesson.complete(state);
      const active = index === currentLessonIndex;
      const expanded = index === expandedLessonIndex;
      return `
        <article class="lesson-button ${active ? "active" : ""} ${complete ? "complete" : ""}" role="button" tabindex="0" data-lesson="${index}" data-lesson-toggle="true" aria-expanded="${expanded}">
          <span>${complete ? "Complete" : `Step ${index + 1}`}</span>
          <strong>${escapeHtml(lesson.title)}</strong>
          ${renderLessonCommandSummary(index, expanded)}
        </article>
      `;
    })
    .join("");

  const visibleLessonIndex = Math.min(state.lessonIndex, activeLessons.length - 1);
  const lesson = activeLessons[visibleLessonIndex] || activeLessons[0];
  document.getElementById("lessonDetail").innerHTML = `
    <span class="section-kicker">Current concept</span>
    <h2>${escapeHtml(lesson.title)}</h2>
    <p>${escapeHtml(lesson.concept)}</p>
    <div class="lesson-task">
      <strong>Task</strong>
      <span>${escapeHtml(lesson.task)}</span>
      <code>${escapeHtml(lesson.hint)}</code>
    </div>
    <section class="lesson-glossary" aria-label="Git glossary">
      <div class="lesson-glossary-header">
        <span class="section-kicker">Glossary</span>
        <strong>Plain-English Git terms</strong>
      </div>
      ${renderGlossary()}
    </section>
    <div class="lesson-controls">
      <button class="text-button" type="button" data-action="lesson-prev" ${visibleLessonIndex === 0 ? "disabled" : ""}>Previous</button>
      <button class="text-button" type="button" data-action="lesson-next" ${visibleLessonIndex === activeLessons.length - 1 ? "disabled" : ""}>Next</button>
    </div>
  `;

  updateCommandPlaceholder();
}

function renderGlossary() {
  return `
    <div class="glossary-table" role="table" aria-label="Git glossary">
      <div class="glossary-row glossary-head" role="row">
        <span role="columnheader">Term</span>
        <span role="columnheader">Plain-English meaning</span>
      </div>
      ${glossaryTerms
        .map(
          (item) => `
            <div class="glossary-row" role="row">
              <strong role="cell">${escapeHtml(item.term)}</strong>
              <span role="cell">${escapeHtml(item.meaning)}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function getCurrentLessonIndex() {
  const active = getActiveModule();
  const activeLessons = getActiveLessons();
  const commandGroups = getActiveLessonCommandGroups();

  if (state.guidedStep >= active.commands.length) {
    return activeLessons.length - 1;
  }

  const lessonIndex = commandGroups.findIndex((indexes) => indexes.includes(state.guidedStep));
  return lessonIndex === -1 ? Math.min(state.lessonIndex, activeLessons.length - 1) : lessonIndex;
}

function getExpandedLessonIndex() {
  if (Number.isInteger(state.expandedLessonIndex) && state.expandedLessonIndex < getActiveLessons().length) {
    return state.expandedLessonIndex;
  }

  return getCurrentLessonIndex();
}

function renderLessonCommandSummary(lessonIndex, expanded) {
  const active = getActiveModule();
  const indexes = getActiveLessonCommandGroups()[lessonIndex] || [];
  const done = indexes.filter((index) => index < state.guidedStep).length;
  const total = indexes.length;

  if (!expanded) {
    return `<em class="lesson-command-count">${done}/${total} commands</em>`;
  }

  return `
    <div class="lesson-command-stack">
      ${indexes
        .map((commandIndex) => {
          const command = active.commands[commandIndex];
          if (!command) {
            return "";
          }
          const status =
            commandIndex < state.guidedStep ? "done" : commandIndex === state.guidedStep ? "now" : "next";
          const label = status === "done" ? "Back" : status === "now" ? "Now" : "Next";
          const tooltip =
            status === "done"
              ? `Rewind to this command and rebuild the lab state:\n${command.cmd}`
              : `Type this command into the PowerShell IDE:\n${command.cmd}`;
          return `
            <button class="mini-command ${status}" type="button" data-command-index="${commandIndex}" data-command-fill="${escapeAttribute(command.cmd)}"${titleAttribute(tooltip)}>
              <b>${label}</b>
              <code>${escapeHtml(command.cmd)}</code>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderRepositoryDirectory() {
  const panel = document.getElementById("repoDirectoryPanel");
  if (!panel) {
    return;
  }

  const open = state.repoExplorerTouched ? Boolean(state.repoExplorerOpen) : true;
  panel.innerHTML = `
    <button class="repo-explorer-toggle" type="button" data-action="toggle-repo-explorer" aria-expanded="${open}"${titleAttribute("Show or hide the Oracle repository explorer")}>
      <span aria-hidden="true">${open ? "v" : ">"}</span>
      <strong>Repository Explorer</strong>
      <code>${escapeHtml(ORACLE_REPO_ROOT)}</code>
      <em>${open ? "Hide" : "Show"}</em>
    </button>
    <div class="repo-explorer-window ${open ? "open" : "collapsed"}">
      <div class="repo-explorer-titlebar">
        <span>EXPLORER</span>
        <strong aria-hidden="true">...</strong>
      </div>
      ${renderLabCreatedFilesSection()}
      <div class="repo-explorer-section">
        <div class="repo-explorer-section-title">
          <span aria-hidden="true">v</span>
          <strong>ORACLE REPOSITORY</strong>
          <small>main</small>
        </div>
        ${renderRepoMapItems(oracleRepoMap)}
      </div>
      <div class="repo-explorer-footer">
        <span>Simulator workspace</span>
        <code>${escapeHtml(state.cwd || `${PS_ROOT}\\${getModuleFolderDisplay()}`)}</code>
      </div>
    </div>
  `;
}

function renderLabCreatedFilesSection() {
  const paths = getActiveRepoPaths();
  if (!paths.length) {
    return "";
  }

  const createdCount = paths.filter((path) => labPathStatus(path).label !== "planned").length;
  return `
    <div class="repo-explorer-section lab-created-section">
      <div class="repo-explorer-section-title">
        <span aria-hidden="true">v</span>
        <strong>FILES CREATED IN THIS LAB</strong>
        <small>${createdCount}/${paths.length}</small>
      </div>
      ${paths.map((path) => renderLabCreatedFileRow(path)).join("")}
    </div>
  `;
}

function renderLabCreatedFileRow(path) {
  const status = labPathStatus(path);
  const fileName = path.split(/[\\/]/).filter(Boolean).pop() || path;
  const fullPath = `${ORACLE_REPO_ROOT}\\${path.replaceAll("/", "\\")}`;
  const rowTitle = `${fullPath}\n${status.label}\nThis file appears here as the learner creates, stages, and commits it.`;
  return `
    <div class="repo-map-row repo-explorer-item file ${escapeAttribute(status.tone)} selected lab-target lab-created-file" style="--depth: 0"${titleAttribute(rowTitle)}>
      <span class="repo-explorer-chevron" aria-hidden="true"></span>
      <span class="repo-map-kind file">${escapeHtml(fileKind(fileName))}</span>
      <div>
        <strong>${escapeHtml(fileName)}</strong>
        <code>${escapeHtml(path)}</code>
      </div>
      <span class="repo-map-status">${escapeHtml(status.label)}</span>
    </div>
  `;
}

function renderRepoMapItems(items, depth = 0, parentPath = "") {
  return items
    .map((item) => {
      const itemPath = item.path || [parentPath, item.name].filter(Boolean).join("/");
      const status = repoMapItemStatus(item, itemPath);
      const fullPath = `${ORACLE_REPO_ROOT}\\${itemPath.replaceAll("/", "\\")}`;
      const hasChildren = Boolean(item.children?.length);
      const expanded = hasChildren && isRepoMapExpanded(item, itemPath);
      const children = expanded ? renderRepoMapItems(item.children, depth + 1, itemPath) : "";
      const selected = getActiveRepoContainerPaths().includes(itemPath) || Boolean(item.path && isActiveLabPath(item.path));
      const rowTag = hasChildren ? "button" : "div";
      const rowAttributes = hasChildren
        ? ` type="button" data-action="toggle-explorer-folder" data-scope="repo" data-path="${escapeAttribute(itemPath)}" aria-expanded="${expanded}"`
        : "";
      return `
        <${rowTag} class="repo-map-row repo-explorer-item ${escapeAttribute(item.type)} ${escapeAttribute(status.tone)} ${selected ? "selected" : ""} ${item.labTarget ? "lab-target" : ""}" style="--depth: ${depth}"${rowAttributes}${titleAttribute(`${fullPath}\n${status.label}\n${item.note || ""}`)}>
          <span class="repo-explorer-chevron" aria-hidden="true">${hasChildren ? (expanded ? "v" : ">") : ""}</span>
          <span class="repo-map-kind ${escapeAttribute(item.type)}">${item.type === "folder" ? "" : fileKind(item.name)}</span>
          <div>
            <strong>${escapeHtml(item.name)}</strong>
          </div>
          <span class="repo-map-status">${escapeHtml(status.label)}</span>
        </${rowTag}>
        ${children}
      `;
    })
    .join("");
}

function isRepoMapExpanded(item, itemPath) {
  const activeRepoPaths = getActiveRepoPaths();
  const activeContainers = getActiveRepoContainerPaths();
  const defaultExpanded = (
    itemPath === ".azuredevops" ||
    activeContainers.includes(itemPath) ||
    activeRepoPaths.some((path) => path.startsWith(`${itemPath}/`)) ||
    item.labTarget === "container"
  );

  return isExplorerFolderExpanded("repo", itemPath, defaultExpanded);
}

function ensureExplorerState() {
  state.explorerCollapsedFolders = Array.isArray(state.explorerCollapsedFolders) ? state.explorerCollapsedFolders : [];
  state.explorerExpandedFolders = Array.isArray(state.explorerExpandedFolders) ? state.explorerExpandedFolders : [];
  state.explorerExpandedFiles = Array.isArray(state.explorerExpandedFiles) ? state.explorerExpandedFiles : [];
}

function explorerKey(scope, path) {
  return `${scope}:${path}`;
}

function isExplorerFolderExpanded(scope, path, defaultExpanded) {
  ensureExplorerState();
  const key = explorerKey(scope, path);
  if (state.explorerCollapsedFolders.includes(key)) {
    return false;
  }
  if (state.explorerExpandedFolders.includes(key)) {
    return true;
  }
  return Boolean(defaultExpanded);
}

function setExplorerFolderExpanded(scope, path, expanded) {
  ensureExplorerState();
  const key = explorerKey(scope, path);
  state.explorerCollapsedFolders = state.explorerCollapsedFolders.filter((item) => item !== key);
  state.explorerExpandedFolders = state.explorerExpandedFolders.filter((item) => item !== key);

  if (expanded) {
    state.explorerExpandedFolders.push(key);
  } else {
    state.explorerCollapsedFolders.push(key);
  }
}

function isExplorerFileExpanded(scope, path) {
  ensureExplorerState();
  return state.explorerExpandedFiles.includes(explorerKey(scope, path));
}

function ensureFlowFileState() {
  state.flowCollapsedFiles = Array.isArray(state.flowCollapsedFiles) ? state.flowCollapsedFiles : [];
}

function isFlowFileExpanded(key) {
  ensureFlowFileState();
  return !state.flowCollapsedFiles.includes(key);
}

function repoMapItemStatus(item, itemPath) {
  if (item.path) {
    return labPathStatus(item.path);
  }

  if (
    item.labTarget === "container" ||
    getActiveRepoContainerPaths().includes(itemPath) ||
    getActiveRepoPaths().some((path) => path.startsWith(`${itemPath}/`))
  ) {
    return { label: "target path", tone: "green" };
  }

  return { label: item.type === "folder" ? "repo area" : "reference", tone: "gray" };
}

function labPathStatus(path) {
  if (!state.initialized) {
    return { label: "planned", tone: "amber" };
  }

  const entry = getStatus().entries.find((item) => item.name === path);
  if (entry?.conflicted) {
    return { label: "conflict", tone: "red" };
  }
  if (entry?.stagedType) {
    return { label: "staged", tone: "blue" };
  }
  if (entry?.untracked || entry?.unstagedType) {
    return { label: "open change", tone: "amber" };
  }
  if (entry?.working !== undefined) {
    return { label: "in tree", tone: "green" };
  }
  if (state.commits.some((commit) => Object.prototype.hasOwnProperty.call(commit.files, path))) {
    return { label: "committed", tone: "green" };
  }

  return { label: "planned", tone: "amber" };
}

function renderPathFocusCard(label, path, description, status) {
  return `
    <div class="repo-focus-card ${escapeAttribute(status.tone)}"${titleAttribute(`${label}\n${path}\n${description}`)}>
      <div>
        <strong>${escapeHtml(label)}</strong>
        <span class="repo-map-status">${escapeHtml(status.label)}</span>
      </div>
      <code>${escapeHtml(path)}</code>
      <p>${escapeHtml(description)}</p>
    </div>
  `;
}

function fileKind(name) {
  const extension = String(name).split(".").pop()?.toLowerCase();
  if (extension === "sql") {
    return "sql";
  }
  if (extension === "md") {
    return "md";
  }
  return "file";
}

function renderPracticeWorkspace() {
  renderPracticeGraph();
  renderPowerShellReferencePanel();
  renderTerminal();
}

function renderCodexWorkspace() {
  const sectionIndex = clampIndex(state.codexSection, codexLab.sections.length);
  const section = codexLab.sections[sectionIndex];
  document.getElementById("lessonProgress").textContent = `${codexLab.sections.length} lesson sections`;
  document.getElementById("lessonList").innerHTML = codexLab.sections
    .map(
      (section, index) => `
        <article class="lesson-button ${index === sectionIndex ? "active" : ""} ${index < sectionIndex ? "complete" : ""}" role="button" tabindex="0" data-action="codex-section" data-codex-section="${index}" aria-expanded="${index === sectionIndex}">
          <span>Section ${index + 1}</span>
          <strong>${escapeHtml(section.title)}</strong>
          <em class="lesson-command-count">${escapeHtml(section.kicker)}</em>
        </article>
      `
    )
    .join("");
  document.getElementById("lessonDetail").innerHTML = `
    <span class="section-kicker">Codex lesson</span>
    <h2>${escapeHtml(section.title)}</h2>
    <p>${escapeHtml(section.intro)}</p>
    <div class="lesson-task">
      <strong>${escapeHtml(section.kicker)}</strong>
      <span>${escapeHtml(codexLessonTaskText(section))}</span>
      <code>${escapeHtml(section.type === "install" ? codexLab.cliCommand : codexLessonReference(section))}</code>
    </div>
    <div class="lesson-controls">
      <button class="text-button" type="button" data-action="codex-prev" ${sectionIndex === 0 ? "disabled" : ""}>Previous</button>
      <button class="text-button" type="button" data-action="codex-next" ${sectionIndex === codexLab.sections.length - 1 ? "disabled" : ""}>Next</button>
    </div>
  `;

  document.querySelector(".repo-flow").className = "repo-flow";
  document.getElementById("workingZone").innerHTML = "";
  document.getElementById("stagingZone").innerHTML = "";
  document.getElementById("repositoryZone").innerHTML = "";
  document.getElementById("guidedTitle").textContent = "Codex Lesson";
  document.getElementById("guidedProgress").textContent = `Section ${sectionIndex + 1} of ${codexLab.sections.length}`;
  document.querySelector(".guided-panel .section-kicker").textContent = "Separate lesson";
  document.getElementById("processMap").innerHTML = renderCodexLessonContent(sectionIndex);
  document.getElementById("guidedCommands").innerHTML = "";

  renderCodexTerminal(section);

  renderQuiz();
  prependCodexPromptLibraryToQuizPanel();

  const directoryPanel = document.getElementById("repoDirectoryPanel");
  if (directoryPanel) {
    directoryPanel.innerHTML = "";
  }
}

function renderCodexTerminal(section) {
  ensureCodexCliState();
  const form = document.getElementById("commandForm");
  const output = document.getElementById("terminalOutput");
  const history = document.getElementById("terminalHistory");
  const input = document.getElementById("commandInput");
  if (form) {
    form.hidden = false;
  }

  document.querySelector(".terminal-panel .section-kicker").textContent = "Codex setup";
  document.querySelector(".terminal-panel h2").textContent = "Mock Codex CLI";
  document.querySelector(".terminal-note").innerHTML = `
    <a href="${escapeAttribute(codexLab.setupUrl)}" target="_blank" rel="noreferrer">Official setup page</a>
    <span class="codex-cli-state">${renderCodexCliStateText()}</span>
  `;
  document.getElementById("promptLabel").textContent = getCodexPrompt();
  if (input) {
    input.placeholder = codexCliPlaceholder(section);
  }
  history.innerHTML = state.terminal
    .map((line) => `<div class="terminal-line ${line.type}">${escapeHtml(line.text)}</div>`)
    .join("");
  output.scrollTop = output.scrollHeight;
}

function renderCodexCliStateText() {
  ensureCodexCliState();
  const parts = [
    state.codexCli.installed ? "installed" : "not installed",
    state.codexCli.loggedIn ? "logged in" : "not logged in",
    isCodexRepoRoot() ? "repo root" : "outside repo"
  ];
  if (state.codexCli.sessionOpen) {
    parts.push("session open");
  }
  return parts.join(" | ");
}

function codexCliPlaceholder(section) {
  ensureCodexCliState();
  if (!state.codexCli.installed) {
    return codexLab.cliCommand;
  }
  if (!state.codexCli.loggedIn) {
    return "codex login";
  }
  if (!isCodexRepoRoot()) {
    return `cd ${ORACLE_REPO_ROOT}`;
  }
  if (!state.codexCli.sessionOpen && section?.prompt) {
    return "codex";
  }
  if (state.codexCli.sessionOpen) {
    return "Paste a prompt, or type exit";
  }
  return "codex";
}

function renderCapstoneWorkspace() {
  const section = capstoneLab.section;
  document.getElementById("lessonProgress").textContent = `${capstoneLab.deliverables.length} deliverables`;
  document.getElementById("lessonList").innerHTML = capstoneLab.deliverables
    .map(
      (item, index) => `
        <article class="lesson-button complete" aria-label="Deliverable ${index + 1}">
          <span>Deliverable ${index + 1}</span>
          <strong>${escapeHtml(item)}</strong>
          <em class="lesson-command-count">${index === 0 ? "repo map" : index === 1 ? "lineage" : index === 2 ? "quality" : "review"}</em>
        </article>
      `
    )
    .join("");
  document.getElementById("lessonDetail").innerHTML = `
    <span class="section-kicker">GIT Lab 3</span>
    <h2>${escapeHtml(section.title)}</h2>
    <p>${escapeHtml(section.intro)}</p>
    <div class="lesson-task">
      <strong>${escapeHtml(section.kicker)}</strong>
      <span>${escapeHtml(section.task)}</span>
      <code>${escapeHtml(section.reference)}</code>
    </div>
    <section class="lesson-glossary" aria-label="Capstone workflow">
      <div class="lesson-glossary-header">
        <span class="section-kicker">Lab shape</span>
        <strong>Reviewable artifact chain</strong>
      </div>
      <ol class="capstone-side-list">
        <li>Inspect the repo before writing.</li>
        <li>Create one file per milestone.</li>
        <li>Review the generated files before staging.</li>
        <li>Use Git to commit only the validated artifact set.</li>
      </ol>
    </section>
  `;

  document.querySelector(".repo-flow").className = "repo-flow";
  document.getElementById("workingZone").innerHTML = "";
  document.getElementById("stagingZone").innerHTML = "";
  document.getElementById("repositoryZone").innerHTML = "";
  document.getElementById("guidedTitle").textContent = capstoneLab.title;
  document.getElementById("guidedProgress").textContent = "Capstone";
  document.querySelector(".guided-panel .section-kicker").textContent = "Repo review kit";
  document.getElementById("processMap").innerHTML = renderCodexWorkflowSection(section);
  document.getElementById("guidedCommands").innerHTML = "";

  const form = document.getElementById("commandForm");
  if (form) {
    form.hidden = true;
  }
  document.querySelector(".terminal-panel .section-kicker").textContent = "Git checkpoint";
  document.querySelector(".terminal-panel h2").textContent = "Commands to recognize";
  document.querySelector(".terminal-note").innerHTML = "Use these after the artifacts are reviewed.";
  document.getElementById("terminalHistory").innerHTML = `
    <div class="terminal-line note">This capstone is a simulated workflow. The copy buttons put prompts on your clipboard.</div>
    <div class="terminal-line prompt">PS ${escapeHtml(ORACLE_REPO_ROOT)}> git status</div>
    <div class="terminal-line prompt">PS ${escapeHtml(ORACLE_REPO_ROOT)}> git diff --stat</div>
    <div class="terminal-line prompt">PS ${escapeHtml(ORACLE_REPO_ROOT)}> git add REPO_NOTES.md SQL_LINEAGE.md DATA_QUALITY_REPORT.md CODEX_REVIEW.md</div>
    <div class="terminal-line prompt">PS ${escapeHtml(ORACLE_REPO_ROOT)}> git commit -m "Add repo review kit"</div>
  `;

  document.getElementById("quizScore").textContent = "Capstone reference";
  document.querySelector(".quiz-panel .section-kicker").textContent = "Prompt library";
  document.getElementById("quizList").innerHTML = `
    ${renderCodexPromptLibraryPanel(true)}
    ${renderCapstoneDeliverablesPanel()}
  `;

  const directoryPanel = document.getElementById("repoDirectoryPanel");
  if (directoryPanel) {
    directoryPanel.innerHTML = "";
  }
}

function codexLessonTaskText(section) {
  if (section.type === "install") {
    return "Install once, authenticate, then launch Codex from the repo root.";
  }
  if (section.type === "prompting") {
    return "Build a PACT prompt: Purpose, Authority, Context, Task.";
  }
  if (section.type === "orientation") {
    return "Use Codex to clarify the request before asking it to edit files.";
  }
  if (section.type === "workflow") {
    return section.task || "Practice a repeatable Codex workflow with a review checkpoint.";
  }
  return "Keep Git branch safety, review, and validation visible.";
}

function codexLessonReference(section) {
  if (section.reference) {
    return section.reference;
  }
  if (section.type === "prompting") {
    return "Purpose + Authority + Context + Task";
  }
  if (section.type === "orientation") {
    return "Before suggesting code changes, help me orient.";
  }
  return "git status";
}

function renderVSCodeWorkspace() {
  const sectionIndex = clampIndex(state.vscodeSection, vscodeLab.sections.length);
  const section = vscodeLab.sections[sectionIndex];
  document.getElementById("lessonProgress").textContent = `${vscodeLab.sections.length} lab sections`;
  document.getElementById("lessonList").innerHTML = vscodeLab.sections
    .map(
      (item, index) => `
        <article class="lesson-button ${index === sectionIndex ? "active" : ""} ${index < sectionIndex ? "complete" : ""}" role="button" tabindex="0" data-action="vscode-section" data-vscode-section="${index}" aria-expanded="${index === sectionIndex}">
          <span>Section ${index + 1}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <em class="lesson-command-count">${escapeHtml(item.kicker)}</em>
        </article>
      `
    )
    .join("");
  document.getElementById("lessonDetail").innerHTML = `
    <span class="section-kicker">VS Code lab</span>
    <h2>${escapeHtml(section.title)}</h2>
    <p>${escapeHtml(section.intro)}</p>
    <div class="lesson-task">
      <strong>${escapeHtml(section.kicker)}</strong>
      <span>${escapeHtml(section.callout)}</span>
      <code>${escapeHtml(sectionIndex === 0 ? ORACLE_REPO_ROOT : sectionIndex === 1 ? "ccs/sql/meters" : "git status")}</code>
    </div>
    <div class="lesson-controls">
      <button class="text-button" type="button" data-action="vscode-prev" ${sectionIndex === 0 ? "disabled" : ""}>Previous</button>
      <button class="text-button" type="button" data-action="vscode-next" ${sectionIndex === vscodeLab.sections.length - 1 ? "disabled" : ""}>Next</button>
    </div>
  `;

  document.querySelector(".repo-flow").className = "repo-flow";
  document.getElementById("workingZone").innerHTML = "";
  document.getElementById("stagingZone").innerHTML = "";
  document.getElementById("repositoryZone").innerHTML = "";
  document.getElementById("guidedTitle").textContent = "VS Code Lab";
  document.getElementById("guidedProgress").textContent = `Section ${sectionIndex + 1} of ${vscodeLab.sections.length}`;
  document.querySelector(".guided-panel .section-kicker").textContent = "Editor orientation";
  document.getElementById("processMap").innerHTML = renderVSCodeLessonContent(sectionIndex);
  document.getElementById("guidedCommands").innerHTML = "";

  const form = document.getElementById("commandForm");
  if (form) {
    form.hidden = true;
  }
  document.querySelector(".terminal-panel .section-kicker").textContent = "VS Code terminal";
  document.querySelector(".terminal-panel h2").textContent = "Commands to recognize";
  document.querySelector(".terminal-note").innerHTML = "These are examples learners should recognize in the integrated terminal.";
  document.getElementById("terminalHistory").innerHTML = `
    <div class="terminal-line note">Open the repo folder first: ${escapeHtml(ORACLE_REPO_ROOT)}</div>
    <div class="terminal-line prompt">PS ${escapeHtml(ORACLE_REPO_ROOT)}> git status</div>
    <div class="terminal-line prompt">PS ${escapeHtml(ORACLE_REPO_ROOT)}> git switch -c ${escapeHtml(oracleLab.branchName)}</div>
    <div class="terminal-line prompt">PS ${escapeHtml(ORACLE_REPO_ROOT)}> git add ${escapeHtml(oracleLab.featureFile)}</div>
    <div class="terminal-line success">Goal: know where branch, file changes, terminal output, and staged files appear in VS Code.</div>
  `;

  document.getElementById("quizScore").textContent = "VS Code checklist";
  document.querySelector(".quiz-panel .section-kicker").textContent = "Quick checks";
  document.getElementById("quizList").innerHTML = `
    <article class="quiz-card codex-check-card">
      <strong>Before editing</strong>
      <p>Confirm the opened folder is the repo root and confirm the branch shown in the status bar.</p>
    </article>
    <article class="quiz-card codex-check-card">
      <strong>Before committing</strong>
      <p>Review the Source Control panel so only intended files are staged.</p>
    </article>
    <article class="quiz-card codex-check-card">
      <strong>When lost</strong>
      <p>Use <code>git status</code>, Explorer, and repo search. Those three usually tell you where you are.</p>
    </article>
  `;

  const directoryPanel = document.getElementById("repoDirectoryPanel");
  if (directoryPanel) {
    directoryPanel.innerHTML = "";
  }
}

function renderVSCodeLessonContent(sectionIndex) {
  const section = vscodeLab.sections[sectionIndex] || vscodeLab.sections[0];
  return `
    <div class="codex-lesson-content vscode-lesson-content">
      <section class="codex-lesson-section two-column vscode-lesson-section">
        <div>
          <span class="section-kicker">${escapeHtml(section.kicker)}</span>
          <h3>${escapeHtml(section.title)}</h3>
          <p>${escapeHtml(section.intro)}</p>
          <ul>
            ${section.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
          <div class="codex-formula">${escapeHtml(section.callout)}</div>
        </div>
        ${renderVSCodeMock(sectionIndex)}
      </section>
      ${renderVSCodeShortcutGrid()}
    </div>
  `;
}

function renderVSCodeMock(sectionIndex) {
  const openFiles = [
    "README.md",
    "ccs_emergency_response_activity_extract.sql",
    "ccs_emergency_response_activity_by_zip_prior_week.sql"
  ];
  return `
    <div class="vscode-mock" aria-label="Mock VS Code workspace">
      <div class="vscode-titlebar">Visual Studio Code - Oracle</div>
      <div class="vscode-body">
        <div class="vscode-activity" aria-hidden="true">
          <span class="${sectionIndex === 0 || sectionIndex === 1 ? "active" : ""}">E</span>
          <span class="${sectionIndex === 1 ? "active" : ""}">S</span>
          <span class="${sectionIndex === 2 ? "active" : ""}">G</span>
        </div>
        <div class="vscode-explorer">
          <strong>EXPLORER</strong>
          <span>ORACLE</span>
          <code>ccs/sql/meters</code>
          ${openFiles
            .map((file, index) => `<p class="${sectionIndex === 1 && index === 2 ? "active" : ""}">${escapeHtml(file)}</p>`)
            .join("")}
        </div>
        <div class="vscode-editor">
          <div class="vscode-tabs">
            <span>README.md</span>
            <span class="active">${escapeHtml(openFiles[sectionIndex === 1 ? 2 : 1])}</span>
          </div>
          <pre><code>${escapeHtml(vscodeEditorSnippet(sectionIndex))}</code></pre>
        </div>
      </div>
      <div class="vscode-status">
        <span>main</span>
        <span>${sectionIndex === 2 ? "1 change" : "Oracle repo"}</span>
        <span>PowerShell</span>
      </div>
    </div>
  `;
}

function vscodeEditorSnippet(sectionIndex) {
  if (sectionIndex === 0) {
    return [
      "Open Folder",
      ORACLE_REPO_ROOT,
      "",
      "Confirm:",
      "- Explorer shows repo folders",
      "- Status bar shows branch"
    ].join("\n");
  }
  if (sectionIndex === 1) {
    return [
      "-- Compare with nearby SQL before editing",
      "select activity_id, premise_id, meter_id",
      "from ccs_meter.emergency_response_activity;",
      "",
      "-- New file belongs under ccs/sql/meters"
    ].join("\n");
  }
  return [
    "PS C:\\Repositories\\Oracle> git status",
    "On branch feature/ccs-emergency-orders...",
    "Changes not staged for commit:",
    "  modified: ccs/sql/meters/...",
    "",
    "Use Source Control to stage intentionally."
  ].join("\n");
}

function renderVSCodeShortcutGrid() {
  return `
    <section class="vscode-shortcuts" aria-label="VS Code shortcuts">
      ${vscodeLab.shortcuts
        .map(
          ([label, value]) => `
            <article>
              <strong>${escapeHtml(label)}</strong>
              <code>${escapeHtml(value)}</code>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderCodexLessonContent(sectionIndex = null) {
  const [install, prompting, orientation, safety] = codexLab.sections;
  if (sectionIndex !== null) {
    const section = codexLab.sections[sectionIndex] || install;
    if (section.type === "install") {
      return renderCodexInstallSection(section);
    }
    if (section.type === "prompting") {
      return renderCodexPromptingSection(section);
    }
    if (section.type === "orientation") {
      return renderCodexOrientationSection(section);
    }
    if (section.type === "safety") {
      return renderCodexSafetySection(section);
    }
    if (section.type === "workflow") {
      return renderCodexWorkflowSection(section);
    }
  }

  return `
    <div class="codex-lesson-content">
      ${codexLab.sections.map((section) => renderCodexLessonContent(codexLab.sections.indexOf(section))).join("")}
    </div>
  `;
}

function renderCodexInstallSection(install) {
  return `
    <div class="codex-lesson-content">
      <section class="codex-lesson-section">
        <span class="section-kicker">${escapeHtml(install.kicker)}</span>
        <h3>${escapeHtml(install.title)}</h3>
        <p>${escapeHtml(install.intro)}</p>
        <div class="codex-install-grid">
          ${install.steps
            .map(
              (step, index) => `
                <article class="codex-install-step">
                  <span>${index + 1}</span>
                  <div>
                    <h4>${escapeHtml(step.label)}</h4>
                    ${renderCliFillButton(step.command, "Type command")}
                    <p>${escapeHtml(step.detail)}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="codex-cli-note">
          <strong>Update command</strong>
          ${renderCliFillButton(install.updateCommand, "Type update command")}
        </div>
        <ul class="codex-note-list">
          ${install.notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}
        </ul>
        ${renderCodexReadyChecklist(install)}
      </section>
    </div>
  `;
}

function renderCodexPromptingSection(prompting) {
  return `
    <div class="codex-lesson-content">
      <section class="codex-lesson-section">
        <span class="section-kicker">${escapeHtml(prompting.kicker)}</span>
        <h3>${escapeHtml(prompting.title)}</h3>
        <p>${escapeHtml(prompting.intro)}</p>
        <div class="prompt-grid">
          ${prompting.items
            .map(
              ([letter, meaning]) => `
                <article class="prompt-card">
                  <strong>${escapeHtml(letter.slice(0, 1))}</strong>
                  <div>
                    <h4>${escapeHtml(letter)}</h4>
                    <p>${escapeHtml(meaning)}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="codex-formula">${escapeHtml(prompting.formula)}</div>
        ${renderCodexReadyChecklist(prompting)}
      </section>
    </div>
  `;
}

function renderCodexOrientationSection(orientation) {
  return `
    <div class="codex-lesson-content">
      <section class="codex-lesson-section two-column">
        <div>
          <span class="section-kicker">${escapeHtml(orientation.kicker)}</span>
          <h3>${escapeHtml(orientation.title)}</h3>
          <p>${escapeHtml(orientation.intro)}</p>
          <ul>
            ${orientation.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}
          </ul>
        </div>
        ${renderCopyablePrompt(orientation.prompt, true)}
        ${renderCodexReadyChecklist(orientation)}
      </section>
    </div>
  `;
}

function renderCodexSafetySection(safety) {
  return `
    <div class="codex-lesson-content">
      <section class="codex-lesson-section two-column">
        <div>
          <span class="section-kicker">${escapeHtml(safety.kicker)}</span>
          <h3>${escapeHtml(safety.title)}</h3>
          <p>${escapeHtml(safety.intro)}</p>
          <h4>Before editing</h4>
          <ul>
            ${safety.beforeEditing.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <div class="codex-safety-panel">
          <h4>If work takes more than one day</h4>
          <ul>
            ${safety.longerWork.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <div class="codex-formula wide">${escapeHtml(safety.footer)}</div>
        ${renderCodexReadyChecklist(safety)}
      </section>
    </div>
  `;
}

function renderCodexWorkflowSection(section) {
  return `
    <div class="codex-lesson-content">
      <section class="codex-lesson-section">
        <span class="section-kicker">${escapeHtml(section.kicker)}</span>
        <h3>${escapeHtml(section.title)}</h3>
        <p>${escapeHtml(section.intro)}</p>
        <div class="codex-install-grid">
          ${section.cards
            .map(
              (card, index) => `
                <article class="codex-install-step codex-workflow-card">
                  <span>${index + 1}</span>
                  <div>
                    <h4>${escapeHtml(card.label)}</h4>
                    ${card.command ? renderCliFillButton(card.command, "Type command") : ""}
                    ${card.prompt ? renderCopyablePrompt(card.prompt, isCodexMode()) : ""}
                    ${card.detail ? `<p>${escapeHtml(card.detail)}</p>` : ""}
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
        ${section.formula ? `<div class="codex-formula">${escapeHtml(section.formula)}</div>` : ""}
        ${renderCodexReadyChecklist(section)}
      </section>
    </div>
  `;
}

function renderCodexReadyChecklist(section) {
  if (!Array.isArray(section.readyChecklist) || !section.readyChecklist.length) {
    return "";
  }

  const completeCount = section.readyChecklist.filter((_, index) => isReadyCheckComplete(codexReadyCheckKey(section, index))).length;
  return `
    <div class="codex-ready-list">
      <div class="codex-ready-header">
        <h4>Ready to move on</h4>
        <span>${completeCount} of ${section.readyChecklist.length}</span>
      </div>
      ${section.readyChecklist
        .map((item, index) => {
          const key = codexReadyCheckKey(section, index);
          const done = isReadyCheckComplete(key);
          return `
            <button class="codex-ready-item ${done ? "done" : ""}" type="button" data-action="toggle-ready-check" data-ready-key="${escapeAttribute(key)}" aria-pressed="${done}">
              <span class="codex-ready-box">${done ? "OK" : ""}</span>
              <span>${escapeHtml(item)}</span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function prependCodexPromptLibraryToQuizPanel() {
  const quizList = document.getElementById("quizList");
  if (!quizList) {
    return;
  }
  quizList.innerHTML = `${renderCodexPromptLibraryPanel()}${quizList.innerHTML}`;
}

function renderCodexPromptLibraryPanel(open = false) {
  return `
    <details class="codex-reference-panel" ${open ? "open" : ""}>
      <summary>
        <span>
          <strong>Prompt library</strong>
          <em>Copy-ready Codex prompts</em>
        </span>
      </summary>
      <div class="codex-reference-body">
        ${codexPromptLibrary
          .map(
            (group, index) => `
              <details class="codex-reference-group" ${index === 0 ? "open" : ""}>
                <summary>${escapeHtml(group.group)}</summary>
                <div class="codex-reference-items">
                  ${group.prompts.map(renderPromptLibraryItem).join("")}
                </div>
              </details>
            `
          )
          .join("")}
      </div>
    </details>
  `;
}

function renderPromptLibraryItem(item) {
  return `
    <article class="codex-reference-item">
      <div>
        <strong>${escapeHtml(item.label)}</strong>
        ${renderCopyButton(item.text, "Copy prompt")}
        ${renderCliFillButton(singleLinePrompt(item.text), "Type prompt")}
      </div>
      <pre><code>${escapeHtml(item.text)}</code></pre>
    </article>
  `;
}

function renderCapstoneDeliverablesPanel() {
  return `
    <section class="capstone-deliverables" aria-label="Capstone deliverables">
      <h3>What the lab produces</h3>
      ${capstoneLab.deliverables
        .map(
          (item) => `
            <article>
              <strong>${escapeHtml(item)}</strong>
              <span>${escapeHtml(capstoneDeliverableMeaning(item))}</span>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function capstoneDeliverableMeaning(name) {
  if (name === "REPO_NOTES.md") {
    return "Purpose, folders, commands, assumptions, risks, and open questions.";
  }
  if (name === "SQL_LINEAGE.md") {
    return "Sources, grain, joins, filters, grouping, and logic risks.";
  }
  if (name === "DATA_QUALITY_REPORT.md") {
    return "Missing values, duplicate risks, categories, dates, and follow-ups.";
  }
  return "Final file review, missing validation, risky assumptions, and cleanup before commit.";
}

function renderCopyablePrompt(text, includeCliButton = false) {
  return `
    <div class="copyable-prompt">
      ${renderCopyButton(text)}
      ${includeCliButton ? renderCliFillButton(singleLinePrompt(text), "Type prompt") : ""}
      <pre class="codex-prompt-example"><code>${escapeHtml(text)}</code></pre>
    </div>
  `;
}

function renderCopyButton(text, label = "Copy") {
  return `<button class="copy-prompt-button" type="button" data-copy-text="${escapeAttribute(text)}">${escapeHtml(label)}</button>`;
}

function renderCliFillButton(command, label = "Type in CLI") {
  return `
    <button class="cli-fill-button" type="button" data-command-fill="${escapeAttribute(command)}"${titleAttribute(`Type into the mock CLI:\n${command}`)}>
      <code>${escapeHtml(command)}</code>
      <span>${escapeHtml(label)}</span>
    </button>
  `;
}

function singleLinePrompt(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

async function copyTextToClipboard(button) {
  const text = button.dataset.copyText || "";
  const originalLabel = button.dataset.copyLabel || button.textContent || "Copy";
  button.dataset.copyLabel = originalLabel;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      copyTextFallback(text);
    }
    button.textContent = "Copied";
  } catch (error) {
    button.textContent = "Copy failed";
  }

  window.setTimeout(() => {
    button.textContent = originalLabel;
  }, 1400);
}

function copyTextFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function codexReadyCheckKey(section, itemIndex) {
  return `codex:${slugify(section.title)}:${itemIndex}`;
}

function ensureReadyChecks() {
  if (!state.readyChecks || typeof state.readyChecks !== "object" || Array.isArray(state.readyChecks)) {
    state.readyChecks = {};
  }
  return state.readyChecks;
}

function isReadyCheckComplete(key) {
  return Boolean(ensureReadyChecks()[key]);
}

function toggleReadyCheck(key) {
  if (!key) {
    return;
  }
  const checks = ensureReadyChecks();
  if (checks[key]) {
    delete checks[key];
  } else {
    checks[key] = true;
  }
}

function renderPracticeGraph() {
  document.getElementById("guidedTitle").textContent = "Dynamic branching graph";
  document.getElementById("guidedProgress").textContent = state.initialized
    ? `${state.currentBranch} @ ${currentHeadLabel()}`
    : "Not initialized";
  document.getElementById("processMap").innerHTML = renderDynamicBranchGraph();
  document.getElementById("guidedCommands").innerHTML = "";
  document.querySelector(".guided-panel .section-kicker").textContent = "Repository graph";
}

function renderPowerShellReferencePanel() {
  const repoFlow = document.querySelector(".repo-flow");
  const workingZone = document.getElementById("workingZone");
  const stagingZone = document.getElementById("stagingZone");
  const repositoryZone = document.getElementById("repositoryZone");
  if (!repoFlow || !workingZone || !stagingZone || !repositoryZone) {
    return;
  }

  repoFlow.className = "repo-flow practice-reference-panel";
  repoFlow.setAttribute("aria-label", "PowerShell and Git reference");
  workingZone.className = "flow-zone powershell-reference-zone";
  stagingZone.className = "flow-zone";
  repositoryZone.className = "flow-zone";
  stagingZone.innerHTML = "";
  repositoryZone.innerHTML = "";

  workingZone.innerHTML = `
    <div class="powershell-reference">
      <div class="reference-heading">
        <div>
          <span class="section-kicker">PowerShell reference</span>
          <h3>Terms and command options</h3>
        </div>
        <strong>Click a command to type it</strong>
      </div>
      <section class="reference-block" aria-label="Key Git and PowerShell terms">
        <h4>Plain-English terms</h4>
        <div class="reference-term-list">
          ${powershellReferenceTerms
            .map(
              (item) => `
                <article>
                  <strong>${escapeHtml(item.term)}</strong>
                  <span>${escapeHtml(item.meaning)}</span>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
      <section class="reference-block" aria-label="PowerShell command options">
        <h4>Commands to try</h4>
        <div class="reference-command-groups">
          ${powershellReferenceCommands.map(renderPowerShellCommandGroup).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderPowerShellCommandGroup(group) {
  return `
    <div class="reference-command-group">
      <strong>${escapeHtml(group.group)}</strong>
      <div class="reference-command-list">
        ${group.commands
          .map(
            (item) => `
              <button class="reference-command" type="button" data-command-fill="${escapeAttribute(item.cmd)}"${titleAttribute(`Type this command into the PowerShell prompt:\n${item.cmd}`)}>
                <code>${escapeHtml(item.cmd)}</code>
                <span>${escapeHtml(item.desc)}</span>
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderRepositoryTree() {
  const status = getStatus();
  const workingZone = document.getElementById("workingZone");
  const stagingZone = document.getElementById("stagingZone");
  const repositoryZone = document.getElementById("repositoryZone");
  const files = status.entries.filter((entry) => entry.working !== undefined);

  workingZone.className = "flow-zone repo-tree-panel";
  stagingZone.className = "flow-zone";
  repositoryZone.className = "flow-zone";
  stagingZone.innerHTML = "";
  repositoryZone.innerHTML = "";

  workingZone.innerHTML = `
    <div class="repo-explorer-window repo-explorer-embedded open">
      <div class="repo-explorer-titlebar">
        <span>EXPLORER</span>
        <strong aria-hidden="true">...</strong>
      </div>
      <div class="repo-explorer-section">
        <div class="repo-explorer-section-title">
          <span aria-hidden="true">v</span>
          <strong>ORACLE WORKING TREE</strong>
          <small>${files.length} file${files.length === 1 ? "" : "s"}</small>
        </div>
        <div class="repo-tree">
          ${files.length ? renderFileTree(files) : `<div class="repo-explorer-empty"${titleAttribute("No files are visible yet. Try edit README.md or create a file with Out-File.")}>No files are visible yet. Try <code>edit README.md</code>.</div>`}
        </div>
      </div>
    </div>
  `;
}

function renderDynamicBranchGraph() {
  if (!state.initialized) {
    return `<div class="empty-state"${titleAttribute("Run git init to create repository history.")}>Run <code>git init</code> to start the repository graph.</div>`;
  }

  const commits = [...state.commits].sort((a, b) => a.order - b.order);
  if (!commits.length) {
    return `<div class="empty-state"${titleAttribute("No commits yet. Stage a file and commit it to create the first graph node.")}>No commits yet. Stage a file and commit it to create the first graph node.</div>`;
  }

  const maxLane = Math.max(0, ...commits.map((commit) => commit.lane || 0), ...Object.values(state.branchLanes || {}));
  const graphStartX = 140;
  const graphGap = 180;
  const laneLineStart = 72;
  const laneGap = 96;
  const laneTop = 88;
  const width = Math.max(760, graphStartX + (commits.length - 1) * graphGap + 180);
  const height = Math.max(220, laneTop + maxLane * laneGap + 88);
  const positions = new Map(
    commits.map((commit, index) => [
      commit.id,
      {
        x: graphStartX + index * graphGap,
        y: laneTop + (commit.lane || 0) * laneGap
      }
    ])
  );

  const laneY = (lane) => laneTop + lane * laneGap;

  const laneLines = Array.from({ length: maxLane + 1 }, (_, lane) => {
    const y = laneY(lane);
    const label = laneLabel(lane);
    return `
      <line x1="${laneLineStart}" y1="${y}" x2="${width - 70}" y2="${y}" class="repo-graph-lane">
        <title>${escapeSvg(label)}</title>
      </line>
    `;
  }).join("");

  const parentPaths = commits
    .flatMap((commit) =>
      commit.parents.map((parentId, parentIndex) => {
        const from = positions.get(parentId);
        const to = positions.get(commit.id);
        if (!from || !to) {
          return "";
        }
        const midX = from.x + (to.x - from.x) / 2;
        const edgeClass = parentIndex > 0 ? "repo-graph-edge merge-parent" : "repo-graph-edge";
        if (Math.abs(from.y - to.y) < 4) {
          return `<line x1="${from.x + 21}" y1="${from.y}" x2="${to.x - 21}" y2="${to.y}" class="${edgeClass}"></line>`;
        }
        return `<path d="M ${from.x + 21} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x - 21} ${to.y}" class="${edgeClass}"></path>`;
      })
    )
    .join("");

  const branchStubs = Object.entries(state.branchLanes || {})
    .map(([branch, lane]) => {
      if (lane === 0 || commits.some((commit) => commit.lane === lane)) {
        return "";
      }

      const headPosition = positions.get(state.branches?.[branch]);
      if (!headPosition) {
        return "";
      }

      const y = laneY(lane);
      const endX = Math.min(width - 80, headPosition.x + 110);
      return `<path d="M ${headPosition.x + 21} ${headPosition.y} C ${headPosition.x + 72} ${headPosition.y}, ${headPosition.x + 72} ${y}, ${endX} ${y}" class="repo-graph-edge branch-stub"><title>${escapeSvg(`${branch} starts from ${state.branches?.[branch]}`)}</title></path>`;
    })
    .join("");

  const nodes = commits
    .map((commit) => {
      const position = positions.get(commit.id);
      const labels = branchLabelsForCommit(commit.id);
      return `
        <g class="repo-graph-node">
          <circle cx="${position.x}" cy="${position.y}" r="18" class="${commit.id === headId() ? "repo-graph-commit head" : "repo-graph-commit"}">
            <title>${escapeSvg(`${commit.id}: ${commit.message}${labels.length ? ` (${labels.join(", ")})` : ""}`)}</title>
          </circle>
        </g>
      `;
    })
    .join("");

  return `
    <div class="repo-graph-card">
      <svg class="repo-graph-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Dynamic Git branch graph">
        <title>${escapeSvg(`Current branch ${state.currentBranch}, HEAD ${currentHeadLabel()}`)}</title>
        ${laneLines}
        ${parentPaths}
        ${branchStubs}
        ${nodes}
      </svg>
    </div>
  `;
}

function laneLabel(lane) {
  const labels = Object.entries(state.branchLanes || {})
    .filter(([, branchLane]) => branchLane === lane)
    .map(([branch]) => branch);
  return labels.length ? labels.join(", ") : `lane ${lane + 1}`;
}

function renderFileTree(entries) {
  const root = { folders: new Map(), files: [] };

  entries.forEach((entry) => {
    const parts = entry.name.split(/[\\/]/).filter(Boolean);
    let node = root;
    parts.slice(0, -1).forEach((part) => {
      if (!node.folders.has(part)) {
        node.folders.set(part, { folders: new Map(), files: [] });
      }
      node = node.folders.get(part);
    });
    node.files.push({ ...entry, displayName: parts[parts.length - 1] || entry.name });
  });

  return renderFileTreeNode(root, 0);
}

function renderFileTreeNode(node, depth, parentPath = "") {
  const folders = [...node.folders.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, child]) => {
      const folderPath = [parentPath, name].filter(Boolean).join("/");
      const count = countTreeFiles(child);
      const expanded = isExplorerFolderExpanded("work", folderPath, true);
      return `
        <button class="repo-tree-folder" type="button" data-action="toggle-explorer-folder" data-scope="work" data-path="${escapeAttribute(folderPath)}" aria-expanded="${expanded}" style="--depth: ${depth}"${titleAttribute(`${folderPath}\n${expanded ? "Collapse" : "Expand"} folder`)}>
          <span class="repo-explorer-chevron" aria-hidden="true">${expanded ? "v" : ">"}</span>
          <span class="repo-map-kind folder" aria-hidden="true"></span>
          <strong${titleAttribute(name)}>${escapeHtml(name)}</strong>
          <small>${count}</small>
        </button>
        ${expanded ? renderFileTreeNode(child, depth + 1, folderPath) : ""}
      `;
    })
    .join("");

  const files = node.files
    .sort((a, b) => a.displayName.localeCompare(b.displayName))
    .map((entry) => {
      const status = workingStatus(entry);
      const selected = isActiveLabPath(entry.name) ? " selected" : "";
      const expanded = isExplorerFileExpanded("work", entry.name);
      const preview = expanded
        ? `
          <pre class="repo-tree-preview" style="--depth: ${depth + 1}"${titleAttribute(entry.working || "")}>${escapeHtml(firstLines(entry.working, 8))}</pre>
        `
        : "";
      return `
        <button class="repo-tree-file${selected} ${expanded ? "open" : ""}" type="button" data-action="toggle-explorer-file" data-scope="work" data-path="${escapeAttribute(entry.name)}" aria-expanded="${expanded}" style="--depth: ${depth}"${titleAttribute(`${entry.name}\n${status.label}${entry.working ? `\n\n${entry.working}` : ""}`)}>
          <span class="repo-explorer-chevron" aria-hidden="true">${expanded ? "v" : ">"}</span>
          <span class="repo-map-kind file" aria-hidden="true">${escapeHtml(fileKind(entry.displayName))}</span>
          <strong>${escapeHtml(entry.displayName)}</strong>
          <span class="pill ${status.tone}">${escapeHtml(status.label)}</span>
        </button>
        ${preview}
      `;
    })
    .join("");

  return `${folders}${files}`;
}

function countTreeFiles(node) {
  return node.files.length + [...node.folders.values()].reduce((total, child) => total + countTreeFiles(child), 0);
}

function truncateLabel(value, maxLength) {
  const text = String(value || "");
  return text.length > maxLength ? `${text.slice(0, Math.max(0, maxLength - 3))}...` : text;
}

function renderZones() {
  const status = getStatus();
  const head = hasHeadCommit() ? getCommit(headId()) : null;
  const activeArea = getCurrentProcessArea();
  document.querySelector(".repo-flow").className = "repo-flow";
  const workingZone = document.getElementById("workingZone");
  const stagingZone = document.getElementById("stagingZone");
  const repositoryZone = document.getElementById("repositoryZone");

  delete workingZone.dataset.dropTarget;
  stagingZone.dataset.dropTarget = "staging";
  repositoryZone.dataset.dropTarget = "repository";
  workingZone.className = `flow-zone ${["working", "status", "branch"].includes(activeArea) ? "active-zone" : ""}`;
  stagingZone.className = `flow-zone ${activeArea === "staging" ? "active-zone" : ""}`;
  repositoryZone.className = `flow-zone ${["repository", "history", "merge"].includes(activeArea) ? "active-zone" : ""}`;

  workingZone.innerHTML = `
    <div class="zone-title">
      <div>
        <span class="section-kicker">Step 1</span>
        <h3>Files being edited</h3>
        <p>Your current files on disk. These are not saved to Git history until staged and committed.</p>
      </div>
      <small>${status.unstaged.length + status.untracked.length} open</small>
    </div>
    <div class="file-list">
      ${renderWorkingFiles(status.entries)}
    </div>
  `;

  stagingZone.innerHTML = `
    <div class="zone-title">
      <div>
        <span class="section-kicker">Step 2</span>
        <h3>Selected for next commit</h3>
        <p>Files moved here with git add. This is the exact snapshot the next commit will save.</p>
      </div>
      <small>${status.staged.length} staged</small>
    </div>
    <div class="file-list">
      ${
        status.staged.length
          ? status.staged.map((entry) => renderStagedFile(entry)).join("")
          : `<div class="empty-state"${titleAttribute("Nothing selected yet. Run git add <file> or git add . to choose what the next commit will include.")}>Nothing selected yet. Run <code>git add</code> to choose what the next commit will include.</div>`
      }
    </div>
  `;

  repositoryZone.innerHTML = `
    <div class="zone-title">
      <div>
        <span class="section-kicker">Step 3</span>
        <h3>Saved commit history</h3>
        <p>Commits are permanent checkpoints. Branches point to these saved snapshots.</p>
      </div>
      <small>${head ? head.id : state.initialized ? "no commits" : "not initialized"}</small>
    </div>
    ${head ? renderCommitSnapshot(head) : renderEmptyRepository()}
  `;
}

function renderEmptyRepository() {
  const text = state.initialized
    ? "No commits saved yet. After git commit, the saved snapshot will appear here."
    : "No Git repository yet. Run git init during the guided lab.";
  return `<div class="empty-state"${titleAttribute(text)}>${escapeHtml(text)}</div>`;
}

function renderWorkingFiles(entries) {
  const workingEntries = entries.filter((entry) => entry.working !== undefined);
  if (!workingEntries.length) {
    return `<div class="empty-state"${titleAttribute("No files in the working tree.")}>No files in the working tree.</div>`;
  }

  return workingEntries
    .map((entry) => {
      const status = workingStatus(entry);
      return renderFileRow(entry.name, status.label, status.tone, entry.working, "", {
        zone: "working",
        draggable: true,
        dragLocation: "working"
      });
    })
    .join("");
}

function renderStagedFile(entry) {
  const content = state.indexFiles[entry.name] || "";
  return renderFileRow(
    entry.name,
    entry.stagedType,
    entry.stagedType === "new file" ? "green" : "blue",
    content,
    "",
    {
      zone: "staged",
      draggable: true,
      dragLocation: "staged"
    }
  );
}

function renderCommitSnapshot(commit) {
  const files = Object.keys(commit.files)
    .sort()
    .map((name) => renderFileRow(name, "committed", "green", commit.files[name], "", { zone: "repository" }))
    .join("");

  return `
    <div class="file-row">
      <div class="file-main">
        <span class="file-name"${titleAttribute(commit.message)}>${escapeHtml(commit.message)}</span>
        <span class="pill blue"${titleAttribute(commit.parents.length ? `${commit.parents.length} parent${commit.parents.length > 1 ? "s" : ""}` : "root")}>${commit.parents.length ? `${commit.parents.length} parent${commit.parents.length > 1 ? "s" : ""}` : "root"}</span>
      </div>
      <div class="file-preview"${titleAttribute(`Commit ${commit.id} on ${commit.branch}. This card is the latest saved checkpoint.`)}>Latest saved checkpoint: commit ${escapeHtml(commit.id)} on ${escapeHtml(commit.branch)}</div>
    </div>
    <div class="file-list">${files}</div>
  `;
}

function workingStatus(entry) {
  if (entry.conflicted) {
    return { label: "conflict", tone: "red" };
  }
  if (entry.untracked) {
    return { label: "untracked", tone: "amber" };
  }
  if (entry.unstagedType) {
    return { label: entry.unstagedType, tone: "amber" };
  }
  if (entry.stagedType) {
    return { label: "staged", tone: "blue" };
  }
  return { label: "clean", tone: "gray" };
}

function renderFileRow(name, label, tone, content, actions, options = {}) {
  const preview = firstLines(content, 3);
  const rowTitle = `${name}\n${label}${content ? `\n\n${content}` : ""}`;
  const zone = options.zone || "flow";
  const flowKey = `${zone}:${name}`;
  const expanded = isFlowFileExpanded(flowKey);
  const draggable = Boolean(options.draggable);
  const dragAttributes = draggable
    ? ` draggable="true" data-flow-file="${escapeAttribute(name)}" data-flow-location="${escapeAttribute(options.dragLocation || zone)}"`
    : "";
  return `
    <article class="file-row ${expanded ? "open" : "collapsed"} ${draggable ? "draggable" : ""}"${dragAttributes}${titleAttribute(rowTitle)}>
      <button class="file-main file-card-toggle" type="button" data-action="toggle-flow-file" data-flow-key="${escapeAttribute(flowKey)}" aria-expanded="${expanded}"${dragAttributes}>
        <span class="file-title-wrap">
          <span class="file-chevron" aria-hidden="true">${expanded ? "v" : ">"}</span>
          <span class="file-name"${titleAttribute(name)}>${escapeHtml(name)}</span>
        </span>
        <span class="pill ${tone}"${titleAttribute(label)}>${escapeHtml(label)}</span>
      </button>
      ${expanded ? `<div class="file-preview"${titleAttribute(content || preview)}>${escapeHtml(preview)}</div>` : ""}
      ${actions ? `<div class="file-actions">${actions}</div>` : ""}
    </article>
  `;
}

function renderGuidedCommands() {
  const active = getActiveModule();
  const total = active.commands.length;
  const current = active.commands[state.guidedStep];
  const activeLessons = getActiveLessons();
  const currentLesson = activeLessons[getCurrentLessonIndex()] || activeLessons[0];
  document.querySelector(".guided-panel .section-kicker").textContent = "Guided lab";
  document.getElementById("guidedTitle").textContent = active.labTitle;
  document.getElementById("guidedProgress").textContent =
    state.guidedStep >= total ? "Complete" : `Step ${state.guidedStep + 1} of ${total}`;
  renderProcessMap(active);

  document.getElementById("guidedCommands").innerHTML = current
    ? `
      <article class="current-command-card">
        <span class="pill amber"${titleAttribute("Type next")}>Type next</span>
        <div>
          <strong${titleAttribute(currentLesson.title)}>${escapeHtml(currentLesson.title)}</strong>
          <p${titleAttribute(current.desc)}>${escapeHtml(current.desc)}</p>
        </div>
        <code${titleAttribute(current.cmd)}>${escapeHtml(current.cmd)}</code>
      </article>
    `
    : `
      <article class="current-command-card complete">
        <span class="pill green"${titleAttribute("Complete")}>Complete</span>
        <div>
          <strong${titleAttribute("Guided command path complete")}>Guided command path complete</strong>
          <p${titleAttribute("The branch has been merged back into main. The terminal history is the learner's audit trail.")}>The branch has been merged back into main. The terminal history is the learner's audit trail.</p>
        </div>
        <code${titleAttribute("git log --oneline")}>git log --oneline</code>
      </article>
    `;
}

function renderProcessMap(active) {
  const total = active.commands.length;
  const selectedIndex = Math.min(state.guidedStep, total - 1);
  const processSteps = getProcessStepsForModule(active.id);
  const selected = processSteps[selectedIndex] || processSteps[0];
  const selectedCommand = active.commands[selectedIndex];
  const isComplete = state.guidedStep >= total;

  document.getElementById("processMap").innerHTML = `
    <div class="process-summary ${isComplete ? "complete" : ""}">
      <div>
        <span class="section-kicker"${titleAttribute(isComplete ? "Process complete" : "Current location")}>${isComplete ? "Process complete" : "Current location"}</span>
        <h3${titleAttribute(isComplete ? "Branch merged into main" : selected.title)}>${escapeHtml(isComplete ? "Branch merged into main" : selected.title)}</h3>
      </div>
      <p${titleAttribute(
        isComplete
          ? "The repository now has main, a feature branch, and a commit that main reached through a fast-forward merge."
          : selected.detail
      )}>${escapeHtml(
        isComplete
          ? "The repository now has main, a feature branch, and a commit that main reached through a fast-forward merge."
          : selected.detail
      )}</p>
      <code${titleAttribute(isComplete ? "git log --oneline" : selectedCommand.cmd)}>${escapeHtml(isComplete ? "git log --oneline" : selectedCommand.cmd)}</code>
    </div>
    ${renderBranchBuilder(active)}
    <div class="process-rail" style="--step-count: ${total}">
      ${active.commands
        .map((command, index) => {
          const process = processSteps[index] || {
            area: "workspace",
            label: "Command",
            title: command.desc,
            detail: ""
          };
          const statusClass =
            index < state.guidedStep ? "complete" : index === state.guidedStep ? "active" : "";
          return `
            <article class="process-step ${statusClass}" aria-label="Step ${index + 1}: ${escapeAttribute(process.label)}">
              <div class="process-dot"><span>${index + 1}</span></div>
              <div class="process-card">
                <span${titleAttribute(process.label)}>${escapeHtml(process.label)}</span>
                <strong${titleAttribute(process.title)}>${escapeHtml(process.title)}</strong>
                <code${titleAttribute(command.cmd)}>${escapeHtml(command.cmd)}</code>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderBranchBuilder(active) {
  const step = state.guidedStep;
  const total = active.commands.length;
  const hasRepo = state.initialized || step >= 3;
  const headLabel = hasRepo ? `HEAD -> ${state.currentBranch}` : "HEAD unavailable";
  const currentCommand = active.commands[Math.min(step, total - 1)]?.cmd || "git log --oneline";
  const graph = builderGraphLayout();

  return `
    <div class="branch-builder">
      <div class="branch-builder-header">
        <div>
          <span class="section-kicker">Branch builder</span>
          <h3>${escapeHtml(branchBuilderTitle(step, total, active))}</h3>
        </div>
        <span class="pill ${hasRepo ? "blue" : "gray"}">${escapeHtml(headLabel)}</span>
      </div>
      <svg class="branch-builder-svg" viewBox="0 0 ${graph.width} ${graph.height}" style="min-height: ${graph.height}px" role="img" aria-label="Live branch diagram">
        <title>${escapeSvg(`Live branch diagram. Current branch ${state.currentBranch}. Current command: ${currentCommand}`)}</title>
        <defs>
          <marker id="arrowHead" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
            <polygon points="0 0, 9 3.5, 0 7" class="branch-arrow-head"></polygon>
          </marker>
        </defs>
        ${renderBuilderGraph(graph, hasRepo)}
      </svg>
    </div>
  `;
}

function builderGraphLayout() {
  const commits = [...state.commits].sort((a, b) => a.order - b.order);
  const lanes = Object.values(state.branchLanes || { main: 0 });
  const maxLane = Math.max(0, ...commits.map((commit) => commit.lane || 0), ...lanes);
  const graphLeft = 128;
  const graphGap = 185;
  const graphTop = 72;
  const laneGap = 96;
  const width = Math.max(860, graphLeft + Math.max(1, commits.length - 1) * graphGap + 220);
  const height = Math.max(230, graphTop + maxLane * laneGap + 96);
  const positions = new Map(
    commits.map((commit, index) => [
      commit.id,
      {
        x: graphLeft + index * graphGap,
        y: graphTop + (commit.lane || 0) * laneGap
      }
    ])
  );

  return { commits, maxLane, width, height, graphLeft, graphGap, graphTop, laneGap, positions };
}

function renderBuilderGraph(graph, hasRepo) {
  return `
    ${renderBuilderLanes(graph, hasRepo)}
    ${renderBuilderParentEdges(graph)}
    ${renderBuilderBranchStubs(graph)}
    ${renderBuilderFastForward(graph)}
    ${renderBuilderEmptyCommitHint(graph, hasRepo)}
    ${renderBuilderNodes(graph)}
  `;
}

function renderBuilderLanes(graph, hasRepo) {
  return Array.from({ length: graph.maxLane + 1 }, (_, lane) => {
    const y = builderLaneY(graph, lane);
    const label = builderLaneLabel(lane);
    const laneClass = hasRepo ? builderLaneClass(lane) : "muted";
    const laneStartX = lane === 0 ? 70 : graph.graphLeft + 60;
    return `
      <line x1="${laneStartX}" y1="${y}" x2="${graph.width - 96}" y2="${y}" class="branch-lane ${laneClass}">
        <title>${escapeSvg(label)}</title>
      </line>
    `;
  }).join("");
}

function renderBuilderParentEdges(graph) {
  return graph.commits
    .flatMap((commit) =>
      commit.parents.map((parentId, parentIndex) => {
        const from = graph.positions.get(parentId);
        const to = graph.positions.get(commit.id);
        if (!from || !to) {
          return "";
        }
        const midX = from.x + (to.x - from.x) / 2;
        const edgeClass = parentIndex > 0 ? "builder-edge merge-parent" : "builder-edge";
        return `<path d="M ${from.x + 18} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x - 18} ${to.y}" class="${edgeClass}"><title>${escapeSvg(parentIndex > 0 ? `merge parent ${parentId} into ${commit.id}` : `${parentId} to ${commit.id}`)}</title></path>`;
      })
    )
    .join("");
}

function renderBuilderBranchStubs(graph) {
  return Object.entries(state.branchLanes || {})
    .map(([branch, lane]) => {
      if (lane === 0 || graph.commits.some((commit) => commit.lane === lane)) {
        return "";
      }

      const head = state.branches?.[branch];
      const headPosition = graph.positions.get(head);
      if (!headPosition) {
        return "";
      }

      const y = builderLaneY(graph, lane);
      const endX = Math.min(graph.width - 120, headPosition.x + 110);
      return `<path d="M ${headPosition.x + 18} ${headPosition.y} C ${headPosition.x + 62} ${headPosition.y}, ${headPosition.x + 62} ${y}, ${endX} ${y}" class="builder-branch-stub"><title>${escapeSvg(`${branch} starts from ${head}`)}</title></path>`;
    })
    .join("");
}

function renderBuilderFastForward(graph) {
  const mainHead = state.branches?.main;
  const commit = graph.commits.find((item) => item.id === mainHead);
  const position = graph.positions.get(mainHead);

  if (!commit || !position || (commit.lane || 0) === 0) {
    return "";
  }

  const mainY = builderLaneY(graph, 0);
  const projectedX = Math.min(graph.width - 120, position.x + 132);
  const curveMidX = position.x + (projectedX - position.x) * 0.65;

  return `
    <path d="M ${position.x + 18} ${position.y} C ${curveMidX} ${position.y}, ${curveMidX} ${mainY}, ${projectedX - 18} ${mainY}" class="builder-fast-forward">
      <title>${escapeSvg(`main fast-forwarded to ${mainHead}`)}</title>
    </path>
    <circle cx="${projectedX}" cy="${mainY}" r="15" class="builder-commit head ghost">
      <title>${escapeSvg(`main now includes ${mainHead}`)}</title>
    </circle>
  `;
}

function renderBuilderEmptyCommitHint(graph, hasRepo) {
  if (!hasRepo || graph.commits.length) {
    return "";
  }

  const y = builderLaneY(graph, 0);
  return `
    <circle cx="300" cy="${y}" r="12" class="builder-empty-node">
      <title>${escapeSvg("main has no commits yet")}</title>
    </circle>
  `;
}

function renderBuilderNodes(graph) {
  return graph.commits
    .map((commit) => {
      const position = graph.positions.get(commit.id);
      const labels = branchLabelsForCommit(commit.id);
      return `
        <g class="builder-node">
          <circle cx="${position.x}" cy="${position.y}" r="16" class="${commit.id === headId() ? "builder-commit head" : "builder-commit"}">
            <title>${escapeSvg(`${commit.id}: ${commit.message}${labels.length ? ` (${labels.join(", ")})` : ""}`)}</title>
          </circle>
        </g>
      `;
    })
    .join("");
}

function builderLaneY(graph, lane) {
  return graph.graphTop + lane * graph.laneGap;
}

function builderLaneLabel(lane) {
  const labels = Object.entries(state.branchLanes || {})
    .filter(([, branchLane]) => branchLane === lane)
    .map(([branch]) => branch);
  return labels.length ? labels.join(", ") : `lane ${lane + 1}`;
}

function builderLaneClass(lane) {
  return lane === 0 ? "main" : "feature";
}

function branchBuilderTitle(step, total, active = getActiveModule()) {
  if (step >= total) {
    return "main now includes the branch work";
  }
  if (active.id === "project-work") {
    if (step < 3) {
      return "Build the project workspace";
    }
    if (step < 9) {
      return "Commit the project capsule on main";
    }
    if (step < 14) {
      return "Branch a workstream from the capsule";
    }
    return "Bring the workstream update back to main";
  }
  if (step < 3) {
    return "Build the project before Git can track it";
  }
  if (step < 7) {
    return "Create the first main branch commit";
  }
  if (step < 12) {
    return "Branch away from main and make feature work";
  }
  return "Bring the feature branch back to main";
}

function renderTerminal() {
  const output = document.getElementById("terminalOutput");
  const history = document.getElementById("terminalHistory");
  const form = document.getElementById("commandForm");
  if (form) {
    form.hidden = false;
  }
  renderTerminalHeader();
  document.getElementById("promptLabel").textContent = getPrompt();
  history.innerHTML = state.terminal
    .map((line) => `<div class="terminal-line ${line.type}">${escapeHtml(line.text)}</div>`)
    .join("");
  output.scrollTop = output.scrollHeight;
  updateCommandPlaceholder();
}

function renderTerminalHeader() {
  const panel = document.querySelector(".terminal-panel");
  if (!panel) {
    return;
  }

  const kicker = panel.querySelector(".section-kicker");
  const heading = panel.querySelector("h2");
  const note = panel.querySelector(".terminal-note");
  if (!kicker || !heading || !note) {
    return;
  }

  if (isPracticeMode()) {
    kicker.textContent = "PowerShell IDE";
    heading.textContent = "Practice against the simulated repository";
    note.innerHTML = 'Try <code>git status</code>, <code>git branch</code>, or <code>git log --oneline</code>';
    return;
  }

  kicker.textContent = "PowerShell terminal";
  heading.textContent = "Type commands into the prompt";
  note.innerHTML = 'Type <code>help</code> for supported commands';
}

function updateCommandPlaceholder() {
  const input = document.getElementById("commandInput");
  if (!input) {
    return;
  }

  const expected = getActiveModule().commands[state.guidedStep];
  input.placeholder = expected ? `Type exactly: ${expected.cmd}` : "Type a command such as git status";
}

function renderQuiz() {
  document.querySelector(".quiz-panel .section-kicker").textContent = "Knowledge checks";
  const session = ensureQuizSession();
  const round = clampQuizRound(session.round);
  const quizBank = getQuizBank(state?.activeModuleId, round);
  const quizById = new Map(quizBank.map((quiz) => [quiz.id, quiz]));
  const correctCount = session.correctIds.filter((id) => quizById.has(id)).length;
  const missedCount = session.missedIds.filter((id) => quizById.has(id)).length;

  document.getElementById("quizScore").innerHTML = `
    <span>${escapeHtml(getQuizRoundName(round))}</span>
    <span>Correct ${correctCount}</span>
    <span>Missed ${missedCount}</span>
  `;

  const activeQuizIds = session.activeIds.filter((id) => quizById.has(id));
  if (!activeQuizIds.length) {
    document.getElementById("quizList").innerHTML = renderQuizEmptyState(round, correctCount, missedCount);
    return;
  }

  document.getElementById("quizList").innerHTML = activeQuizIds
    .map((quizId) => {
      const quiz = quizById.get(quizId);
      const attempt = session.attempts[quizId] || {};
      const selected = attempt.selected;
      const isExiting = attempt.status === "exiting";
      const isMissed = attempt.status === "missed";
      return `
        <article class="quiz-card ${isExiting ? "is-exiting" : ""} ${isMissed ? "is-missed" : ""}">
          <h3>${escapeHtml(quiz.question)}</h3>
          ${renderQuizAnswerControl(quiz, session, attempt, selected, isExiting)}
          ${
            isExiting
              ? `<p class="quiz-feedback">${escapeHtml(quiz.feedback)}</p>`
              : isMissed
                ? renderQuizRecoveryPanel(quiz, round, attempt)
              : ""
          }
        </article>
      `;
    })
    .join("");
}

function renderQuizEmptyState(round, correctCount, missedCount) {
  const canAdvance = correctCount >= QUIZ_ROUND_UNLOCK_SCORE && round < QUIZ_ROUND_COUNT;
  const nextRound = clampQuizRound(round + 1);
  return `
    <div class="quiz-empty">
      <strong>${canAdvance ? `${escapeHtml(getQuizRoundName(round))} complete` : "Knowledge checks complete"}</strong>
      <span>${correctCount} correct, ${missedCount} missed</span>
      ${
        canAdvance
          ? `<button class="quiz-round-button" type="button" data-action="start-quiz-round" data-round="${nextRound}">
              Start ${escapeHtml(getQuizRoundName(nextRound))}
            </button>`
          : round >= QUIZ_ROUND_COUNT
            ? `<span>All rounds complete. You are ready for the lab flow.</span>`
            : ""
      }
    </div>
  `;
}

function renderQuizAnswerControl(quiz, session, attempt, selected, isExiting) {
  if (quiz.type !== "choice") {
    const typedValue = attempt.typed || "";
    const round = clampQuizRound(session.round);
    const showGhostAnswer = Boolean(
      (attempt.showHint || shouldRevealQuizAnswer(attempt)) &&
        round === 2 &&
        quiz.type === "fill" &&
        quiz.answerLabel
    );
    const placeholder = showGhostAnswer ? quiz.answerLabel : quiz.placeholder || "Type your answer";
    return `
      <form class="quiz-text-form" data-quiz-form="${escapeAttribute(quiz.id)}">
        <input
          class="${showGhostAnswer ? "quiz-ghost-answer" : ""}"
          type="text"
          name="quiz-answer"
          value="${escapeAttribute(typedValue)}"
          placeholder="${escapeAttribute(placeholder)}"
          autocomplete="off"
          ${isExiting ? "disabled" : ""}
        />
        <button class="quiz-text-submit" type="submit" ${isExiting ? "disabled" : ""}>Check</button>
      </form>
    `;
  }

  const optionOrder = getQuizOptionOrder(session, quiz);
  return `
    <div class="quiz-options">
      ${optionOrder
        .map((optionIndex) => {
          const option = quiz.options[optionIndex];
          const answered = selected !== undefined;
          const isSelected = selected === optionIndex;
          const isRevealed = shouldRevealQuizAnswer(attempt) && optionIndex === quiz.answerIndex;
          const className = [
            answered && isSelected ? (optionIndex === quiz.answerIndex ? "correct" : "wrong") : "",
            isRevealed ? "revealed" : ""
          ]
            .filter(Boolean)
            .join(" ");
          return `
            <button class="quiz-option ${className}" type="button" data-quiz="${escapeAttribute(quiz.id)}" data-option="${optionIndex}" ${isExiting ? "disabled" : ""}>
              ${escapeHtml(option)}
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderQuizRecoveryPanel(quiz, round, attempt) {
  if (attempt.status !== "missed") {
    return "";
  }

  const revealAnswer = shouldRevealQuizAnswer(attempt);
  const wrongCount = getQuizWrongCount(attempt);
  const answerLabel = getQuizAnswerLabel(quiz);

  if (!attempt.showHint && !revealAnswer) {
    return `
      <button class="quiz-hint-button" type="button" data-action="show-quiz-hint" data-quiz-id="${escapeAttribute(quiz.id)}">
        Show hint
      </button>
    `;
  }

  const isRoundTwoFill = round === 2 && quiz.type === "fill";
  const hintText = isRoundTwoFill
    ? "Retype the grey command shown in the answer box."
    : getQuizHintText(quiz);
  const hintMarkup = attempt.showHint || revealAnswer
    ? `
      <div class="quiz-hint-panel">
        <strong>${revealAnswer ? `Hint after ${wrongCount} misses` : "Hint"}</strong>
        <span>${escapeHtml(hintText)}</span>
        ${isRoundTwoFill && answerLabel ? `<code>${escapeHtml(answerLabel)}</code>` : ""}
      </div>
    `
    : "";

  return `
    ${hintMarkup}
    ${revealAnswer ? renderQuizAnswerReveal(quiz, answerLabel) : ""}
  `;
}

function getQuizHintText(quiz) {
  if (quiz.hint) {
    return quiz.hint;
  }

  if (quiz.type === "choice" && quiz.feedback) {
    return quiz.feedback;
  }

  const label = getQuizAnswerLabel(quiz);
  if (!label) {
    return "Review the question wording, then try the safest Git or PowerShell inspection command first.";
  }

  const normalized = String(label).trim();
  const firstWord = normalized.split(/\s+/)[0] || "";
  if (firstWord) {
    return `Start with ${firstWord}; use the full command or prompt that fits the scenario.`;
  }

  return "Use the command or prompt that directly answers the scenario.";
}

function renderQuizAnswerReveal(quiz, answerLabel) {
  if (!answerLabel) {
    return "";
  }

  const label = quiz.type === "choice" ? "Correct answer" : "Answer";
  return `
    <div class="quiz-answer-panel">
      <strong>${escapeHtml(label)}</strong>
      <code>${escapeHtml(answerLabel)}</code>
    </div>
  `;
}

function getQuizAnswerLabel(quiz) {
  if (quiz.type === "choice") {
    return quiz.options?.[quiz.answerIndex] || "";
  }
  return quiz.answerLabel || quiz.acceptedAnswers?.[0] || "";
}

function getQuizWrongCount(attempt) {
  const count = Number(attempt?.wrongCount);
  return Number.isFinite(count) ? Math.max(0, count) : attempt?.status === "missed" ? 1 : 0;
}

function shouldRevealQuizAnswer(attempt) {
  return Boolean(attempt?.revealAnswer || getQuizWrongCount(attempt) >= 2);
}

function getQuizBank(moduleId = state?.activeModuleId || "git-basics", round = state?.quizSession?.round || 1) {
  const quizRound = clampQuizRound(round);
  if (moduleId === codexLab.id) {
    const codexRoundItems =
      quizRound === 1
        ? codexChoiceQuizzes
        : quizRound === 2
          ? codexRoundTwoQuizzes.map((quiz) => ({ type: "fill", ...quiz }))
          : codexRoundThreeQuizzes.map((quiz) => ({ type: "freeform", ...quiz }));
    return normalizeQuizItems(codexRoundItems, quizRound);
  }

  const active = modules.find((module) => module.id === moduleId) || modules[0];
  const primaryItems = active.quiz || [];
  const roundItems =
    quizRound === 1
      ? primaryItems.length
        ? [...primaryItems, ...quizzes]
        : quizzes
      : quizRound === 2
        ? roundTwoQuizzes.map((quiz) => ({ type: "fill", ...quiz }))
        : roundThreeQuizzes.map((quiz) => ({ type: "freeform", ...quiz }));
  return normalizeQuizItems(roundItems, quizRound);
}

function normalizeQuizItems(roundItems, quizRound) {
  const seenQuestions = new Set();
  return roundItems
    .map((quiz, index) => {
      const questionKey = slugify(quiz.question);
      if (seenQuestions.has(questionKey)) {
        return null;
      }
      seenQuestions.add(questionKey);

      const type = quiz.type || "choice";
      const id = `r${quizRound}-q-${index}-${questionKey}`;

      if (type === "choice") {
        const answerIndex =
          typeof quiz.answer === "number"
            ? quiz.answer
            : quiz.options.findIndex((option) => option === quiz.answer);

        if (answerIndex < 0) {
          return null;
        }

        return {
          id,
          type,
          question: quiz.question,
          options: quiz.options,
          answerIndex,
          hint: quiz.hint || "",
          feedback: quiz.feedback || "Correct. Keep going."
        };
      }

      return {
        id,
        type,
        question: quiz.question,
        acceptedAnswers: quiz.acceptedAnswers || [quiz.answer].filter(Boolean),
        answerLabel: quiz.answerLabel || quiz.answer || quiz.acceptedAnswers?.[0] || "",
        placeholder: quiz.placeholder || "Type your answer",
        hint: quiz.hint || "",
        feedback: quiz.feedback || "Correct. Keep going."
      };
    })
    .filter(Boolean);
}

function createQuizSession(moduleId = "git-basics", round = 1) {
  const quizRound = clampQuizRound(round);
  const quizBank = getQuizBank(moduleId, quizRound);
  const order = shuffleArray(quizBank.map((quiz) => quiz.id));
  return {
    version: QUIZ_SESSION_VERSION,
    round: quizRound,
    activeIds: order.slice(0, QUIZ_VISIBLE_COUNT),
    queueIds: order.slice(QUIZ_VISIBLE_COUNT),
    correctIds: [],
    missedIds: [],
    attempts: {},
    optionOrderVersion: QUIZ_OPTION_ORDER_VERSION,
    optionOrders: Object.fromEntries(
      quizBank.filter((quiz) => quiz.type === "choice").map((quiz) => [quiz.id, shuffledOptionIndexes(quiz)])
    )
  };
}

function ensureQuizSession() {
  if (!state.quizSession) {
    state.quizSession = createQuizSession(state.activeModuleId);
  }

  const session = state.quizSession;
  session.version = QUIZ_SESSION_VERSION;
  session.round = clampQuizRound(session.round);

  const quizBank = getQuizBank(state.activeModuleId, session.round);
  const bankIds = quizBank.map((quiz) => quiz.id);
  const bankSet = new Set(bankIds);

  session.activeIds = sanitizeQuizIds(session.activeIds, bankSet);
  session.queueIds = sanitizeQuizIds(session.queueIds, bankSet);
  session.correctIds = sanitizeQuizIds(session.correctIds, bankSet);
  session.missedIds = sanitizeQuizIds(session.missedIds, bankSet);
  session.attempts = session.attempts && typeof session.attempts === "object" ? session.attempts : {};
  session.optionOrders = session.optionOrders && typeof session.optionOrders === "object" ? session.optionOrders : {};
  if (session.optionOrderVersion !== QUIZ_OPTION_ORDER_VERSION) {
    session.optionOrders = {};
    session.optionOrderVersion = QUIZ_OPTION_ORDER_VERSION;
  }

  Object.keys(session.attempts).forEach((id) => {
    if (!bankSet.has(id)) {
      delete session.attempts[id];
    }
  });

  Object.keys(session.optionOrders).forEach((id) => {
    if (!bankSet.has(id)) {
      delete session.optionOrders[id];
    }
  });

  quizBank.forEach((quiz) => {
    if (quiz.type === "choice") {
      getQuizOptionOrder(session, quiz);
    }
  });

  const tracked = new Set([...session.activeIds, ...session.queueIds, ...session.correctIds]);
  const untracked = bankIds.filter((id) => !tracked.has(id));
  session.queueIds.push(...shuffleArray(untracked));
  fillQuizSlots(session);
  return session;
}

function handleQuizAnswer(quizId, optionIndex) {
  const quiz = getQuizBank().find((item) => item.id === quizId);
  const session = ensureQuizSession();
  if (!quiz || quiz.type !== "choice" || Number.isNaN(optionIndex)) {
    return;
  }

  const existingAttempt = session.attempts[quizId] || {};
  if (existingAttempt.status === "exiting" || session.correctIds.includes(quizId)) {
    return;
  }

  const isCorrect = optionIndex === quiz.answerIndex;
  const wrongCount = isCorrect ? 0 : getQuizWrongCount(existingAttempt) + 1;
  session.attempts[quizId] = {
    selected: optionIndex,
    status: isCorrect ? "exiting" : "missed",
    wrongCount,
    showHint: !isCorrect && (Boolean(existingAttempt.showHint) || wrongCount >= 2),
    revealAnswer: !isCorrect && wrongCount >= 2
  };

  if (isCorrect) {
    addUnique(session.correctIds, quizId);
  } else {
    addUnique(session.missedIds, quizId);
  }

  saveState();
  render();

  if (!isCorrect) {
    return;
  }

  scheduleQuizCompletion(quizId);
}

function showQuizHint(quizId) {
  const quiz = getQuizBank().find((item) => item.id === quizId);
  const session = ensureQuizSession();
  if (!quiz) {
    return;
  }

  const attempt = session.attempts[quizId] || {};
  if (attempt.status !== "missed") {
    return;
  }

  const round = clampQuizRound(session.round);
  session.attempts[quizId] = {
    ...attempt,
    typed: quiz.type !== "choice" && round === 2 && quiz.type === "fill" ? "" : attempt.typed || "",
    showHint: true
  };
}

function handleQuizTextAnswer(quizId, value) {
  const quiz = getQuizBank().find((item) => item.id === quizId);
  const session = ensureQuizSession();
  const typed = String(value || "").trim();
  if (!quiz || quiz.type === "choice" || !typed) {
    return;
  }

  const existingAttempt = session.attempts[quizId] || {};
  if (existingAttempt.status === "exiting" || session.correctIds.includes(quizId)) {
    return;
  }

  const isCorrect = isQuizTextCorrect(quiz, typed);
  const wrongCount = isCorrect ? 0 : getQuizWrongCount(existingAttempt) + 1;
  session.attempts[quizId] = {
    typed,
    status: isCorrect ? "exiting" : "missed",
    wrongCount,
    showHint: !isCorrect && (Boolean(existingAttempt.showHint) || wrongCount >= 2),
    revealAnswer: !isCorrect && wrongCount >= 2
  };

  if (isCorrect) {
    addUnique(session.correctIds, quizId);
  } else {
    addUnique(session.missedIds, quizId);
  }

  saveState();
  render();

  if (isCorrect) {
    scheduleQuizCompletion(quizId);
  }
}

function isQuizTextCorrect(quiz, value) {
  const normalized = normalizeQuizText(value);
  if (!normalized) {
    return false;
  }

  if (Array.isArray(quiz.requiredTerms) && quiz.requiredTerms.length) {
    return quiz.requiredTerms.every((term) => normalized.includes(normalizeQuizText(term)));
  }

  return (quiz.acceptedAnswers || [])
    .filter(Boolean)
    .some((answer) => normalizeQuizText(answer) === normalized);
}

function normalizeQuizText(value) {
  return normalizeCommand(value).replace(/\s+/g, " ").trim();
}

function scheduleQuizCompletion(quizId) {
  const schedule =
    typeof window !== "undefined" && typeof window.setTimeout === "function"
      ? window.setTimeout.bind(window)
      : typeof setTimeout === "function"
        ? setTimeout
        : null;

  if (!schedule) {
    completeQuizQuestion(quizId);
    saveState();
    render();
    return;
  }

  schedule(() => {
    const currentAttempt = state.quizSession?.attempts?.[quizId];
    if (currentAttempt?.status !== "exiting") {
      return;
    }
    completeQuizQuestion(quizId);
    saveState();
    render();
  }, QUIZ_EXIT_DELAY_MS);
}

function completeQuizQuestion(quizId) {
  const session = ensureQuizSession();
  session.activeIds = session.activeIds.filter((id) => id !== quizId);
  delete session.attempts[quizId];
  fillQuizSlots(session);
}

function fillQuizSlots(session) {
  while (session.activeIds.length < QUIZ_VISIBLE_COUNT && session.queueIds.length) {
    const nextId = session.queueIds.shift();
    if (!session.correctIds.includes(nextId) && !session.activeIds.includes(nextId)) {
      session.activeIds.push(nextId);
    }
  }
}

function sanitizeQuizIds(ids, bankSet) {
  const seen = new Set();
  return (Array.isArray(ids) ? ids : []).filter((id) => {
    if (!bankSet.has(id) || seen.has(id)) {
      return false;
    }
    seen.add(id);
    return true;
  });
}

function clampQuizRound(round) {
  const numericRound = Number(round);
  if (!Number.isInteger(numericRound)) {
    return 1;
  }
  return Math.min(QUIZ_ROUND_COUNT, Math.max(1, numericRound));
}

function getQuizRoundName(round) {
  const labels = {
    1: "Round 1",
    2: "Round 2: command fill-ins",
    3: "Round 3: scenario mode"
  };
  return labels[clampQuizRound(round)] || labels[1];
}

function getQuizOptionOrder(session, quiz) {
  if (!Array.isArray(quiz.options) || !quiz.options.length) {
    return [];
  }

  const order = session.optionOrders?.[quiz.id];
  const valid =
    Array.isArray(order) &&
    order.length === quiz.options.length &&
    new Set(order).size === quiz.options.length &&
    order.every((index) => Number.isInteger(index) && index >= 0 && index < quiz.options.length);

  if (valid) {
    return order;
  }

  session.optionOrders = session.optionOrders && typeof session.optionOrders === "object" ? session.optionOrders : {};
  session.optionOrders[quiz.id] = shuffledOptionIndexes(quiz);
  return session.optionOrders[quiz.id];
}

function shuffledOptionIndexes(quiz) {
  if (!Array.isArray(quiz.options) || !quiz.options.length) {
    return [];
  }

  const order = shuffleArray(quiz.options.map((_, index) => index));
  if (order.length > 1 && order[0] === quiz.answerIndex) {
    const swapIndex = 1 + Math.floor(Math.random() * (order.length - 1));
    [order[0], order[swapIndex]] = [order[swapIndex], order[0]];
  }
  return order;
}

function addUnique(items, item) {
  if (!items.includes(item)) {
    items.push(item);
  }
}

function shuffleArray(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function clampIndex(value, length) {
  const last = Math.max(0, length - 1);
  return Math.max(0, Math.min(last, Number.isFinite(value) ? value : 0));
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getActiveModule() {
  return modules.find((module) => module.id === state.activeModuleId) || modules[0];
}

function getLessonsForModule(moduleId) {
  return moduleId === "project-work" ? projectLessons : lessons;
}

function getActiveLessons() {
  return getLessonsForModule(state?.activeModuleId || "git-basics");
}

function getLessonCommandGroupsForModule(moduleId) {
  return moduleId === "project-work" ? projectLessonCommandGroups : lessonCommandGroups;
}

function getActiveLessonCommandGroups() {
  return getLessonCommandGroupsForModule(state?.activeModuleId || "git-basics");
}

function getProcessStepsForModule(moduleId) {
  return moduleId === "project-work" ? projectProcessSteps : commandProcessSteps;
}

function getModuleFolder(module = getActiveModule()) {
  return module.folder || oracleLab.folder;
}

function getModuleFolderDisplay(module = getActiveModule()) {
  return module.folderDisplay || oracleLab.folderDisplay;
}

function getActiveRepoPaths() {
  const active = getActiveModule();
  return active.repoPaths || [oracleLab.firstFile, oracleLab.featureFile];
}

function getActiveRepoContainerPaths() {
  const active = getActiveModule();
  return active.repoContainerPaths || ["ccs/sql/meters"];
}

function isActiveLabPath(path) {
  return getActiveRepoPaths().includes(path);
}

function isPracticeMode() {
  return Boolean(state?.inLesson && state.viewMode === "practice");
}

function isCodexMode() {
  return Boolean(state?.inLesson && state.viewMode === "codex");
}

function isCapstoneMode() {
  return Boolean(state?.inLesson && state.viewMode === "capstone");
}

function isVSCodeMode() {
  return Boolean(state?.inLesson && state.viewMode === "vscode");
}

function getPrompt() {
  return state.cwd ? `PS ${state.cwd}>` : PS_PROMPT;
}

function getCurrentProcessArea() {
  const active = getActiveModule();
  if (!active || state.guidedStep >= active.commands.length) {
    return "history";
  }
  return (commandProcessSteps[state.guidedStep] || commandProcessSteps[0]).area;
}

function normalizeCommand(command) {
  return tokenize(String(command).trim()).join(" ").replace(/\s+/g, " ").toLowerCase();
}

function isGuidedUtilityCommand(command) {
  const normalized = normalizeCommand(command);
  return normalized === "help" || normalized === "git help";
}

function hasHeadCommit() {
  const id = headId();
  return Boolean(id && state.commits.some((commit) => commit.id === id));
}

function currentHeadFiles() {
  return hasHeadCommit() ? getCommit(headId()).files : {};
}

function currentHeadLabel() {
  return hasHeadCommit() ? headId() : "no commits";
}

function parseOutFile(command) {
  const match = String(command).match(/^"([^"]*)"\s*\|\s*Out-File\s+(.+)$/i);
  if (!match) {
    return null;
  }

  return {
    content: match[1],
    file: match[2].trim()
  };
}

function toTitleFolder(folder) {
  return String(folder)
    .split("-")
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join("");
}

function branchLabelsForCommit(commitId) {
  const local = Object.entries(state.branches)
    .filter(([, id]) => id === commitId)
    .map(([name]) => (name === state.currentBranch ? `HEAD -> ${name}` : name));
  const remote = Object.entries(state.remoteBranches)
    .filter(([, id]) => id === commitId)
    .map(([name]) => name);
  return [...local, ...remote];
}

function appendTerminal(type, text) {
  state.terminal.push({ type, text });
  if (state.terminal.length > 80) {
    state.terminal = state.terminal.slice(-80);
  }
}

function headId() {
  return state.branches[state.currentBranch];
}

function getCommit(id) {
  const commit = state.commits.find((item) => item.id === id);
  if (!commit) {
    throw new Error(`Commit not found: ${id}`);
  }
  return commit;
}

function nextLane() {
  return Math.max(0, ...Object.values(state.branchLanes)) + 1;
}

function isValidBranchName(name) {
  return /^[A-Za-z0-9._/-]+$/.test(name);
}

function firstLines(content, count) {
  return String(content || "")
    .split(/\r?\n/)
    .slice(0, count)
    .join("\n");
}

function truncate(value, length) {
  const text = String(value);
  return text.length > length ? `${text.slice(0, length - 3)}...` : text;
}

function tokenize(input) {
  const matches = String(input).match(/"([^"]*)"|'([^']*)'|[^\s]+/g) || [];
  return matches.map((token) => {
    if (
      (token.startsWith('"') && token.endsWith('"')) ||
      (token.startsWith("'") && token.endsWith("'"))
    ) {
      return token.slice(1, -1);
    }
    return token;
  });
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function titleAttribute(value) {
  const text = String(value ?? "").trim();
  if (!text) {
    return "";
  }
  return ` title="${escapeAttribute(text).replaceAll("\r\n", "&#10;").replaceAll("\n", "&#10;")}"`;
}

function escapeSvg(value) {
  return escapeHtml(value);
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Unable to save lab state", error);
  }
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.schemaVersion === 5 && parsed.commits && parsed.branches) {
        parsed.taskFlags = parsed.taskFlags || createTaskFlags();
        parsed.cwd = parsed.cwd || PS_ROOT;
        parsed.folders = parsed.folders || [];
        parsed.initialized = Boolean(parsed.initialized);
        parsed.activeModuleId = parsed.activeModuleId || "git-basics";
        parsed.guidedStep = parsed.guidedStep || 0;
        parsed.inLesson = Boolean(parsed.inLesson);
        parsed.viewMode = ["practice", "codex", "capstone", "vscode"].includes(parsed.viewMode) ? parsed.viewMode : "guided";
        parsed.codexSection = clampIndex(parsed.codexSection, codexLab.sections.length);
        parsed.codexCli = {
          ...createCodexCliState(),
          ...(parsed.codexCli && typeof parsed.codexCli === "object" ? parsed.codexCli : {})
        };
        parsed.codexCli.promptRuns = Array.isArray(parsed.codexCli.promptRuns) ? parsed.codexCli.promptRuns : [];
        if (parsed.viewMode === "codex" && (!parsed.cwd || parsed.cwd === PS_ROOT)) {
          parsed.cwd = CODEX_DEFAULT_CWD;
        }
        parsed.vscodeSection = clampIndex(parsed.vscodeSection, vscodeLab.sections.length);
        parsed.repoExplorerOpen = Boolean(parsed.repoExplorerOpen);
        parsed.repoExplorerTouched = Boolean(parsed.repoExplorerTouched);
        if (parsed.viewMode === "guided" && !parsed.repoExplorerTouched) {
          parsed.repoExplorerOpen = true;
        }
        parsed.explorerCollapsedFolders = Array.isArray(parsed.explorerCollapsedFolders) ? parsed.explorerCollapsedFolders : [];
        parsed.explorerExpandedFolders = Array.isArray(parsed.explorerExpandedFolders) ? parsed.explorerExpandedFolders : [];
        parsed.explorerExpandedFiles = Array.isArray(parsed.explorerExpandedFiles) ? parsed.explorerExpandedFiles : [];
        parsed.flowCollapsedFiles = Array.isArray(parsed.flowCollapsedFiles) ? parsed.flowCollapsedFiles : [];
        parsed.readyChecks =
          parsed.readyChecks && typeof parsed.readyChecks === "object" && !Array.isArray(parsed.readyChecks)
            ? parsed.readyChecks
            : {};
        parsed.expandedLessonIndex = Number.isInteger(parsed.expandedLessonIndex) ? parsed.expandedLessonIndex : null;
        if (parsed.expandedLessonIndex < -1 || parsed.expandedLessonIndex >= getLessonsForModule(parsed.activeModuleId).length) {
          parsed.expandedLessonIndex = null;
        }
        parsed.quizSession = parsed.quizSession || createQuizSession(parsed.activeModuleId);
        return parsed;
      }
    }
  } catch (error) {
    console.warn("Unable to load lab state", error);
  }
  return createInitialState();
}
