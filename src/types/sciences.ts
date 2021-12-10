export interface Group {
  GroupID: number
  GroupName: string
}

export interface Science {
  Group: number
  ScienceID: number
  ScienceName: string
}

export interface Branch {
  Science: number
  BranchID: number
  BranchName: string
  Desc: string
}

export interface Subject {
  Science: number
  Branch: number
  SubjectID: number
  SubjectName: string
}

export interface Formula {
  Subject: number
  ID: number
  Name: string
  Content: string
  Difficulty: number
  Unit?: string
  Quantities?: Quantity | Quantity[]
}

export interface ScienceObject {
  ScienceName: string
  ScienceID: number
  Group: {
    _id?: string
    GroupID: number
    GroupName: string
  }
}

export interface BranchObject {
  BranchName: string
  BranchID: number
  Science: ScienceObject
  Subjects?: SubjectObject[] | (Subject & { _id: string })[]
}

export interface SubjectObject {
  Branch: number
  SubjectName: string
  SubjectID: number
  Formulas?: FormulaObject[]
}

export interface FormulaObject {
  Subject: number
  ID: number
  Name: string
  Content: string
  Difficulty: number
  Unit?: string
  Quantities?: Quantity | Quantity[]
}

interface Quantity {
  Symbol: string
  Content: string
}
