type TestDialogId_One = typeof TestDialogId_One;
const TestDialogId_One = "one" as const;

type TestDialogId_Two = typeof TestDialogId_Two;
const TestDialogId_Two = "two" as const;

export type DialogId = TestDialogId_One | TestDialogId_Two;
