import { Document } from 'mongoose'

export interface Group extends Document {
  GroupID: number
  GroupName: string
}

export interface Science extends Document {
  Group: number
  ScienceID: number
  ScienceName: string
}

export interface Branch extends Document {
  Science: number
  BranchID: number
  BranchName: string
  Desc: string
}

export interface Subject extends Document {
  Science: number
  Branch: number
  SubjectID: number
  SubjectName: string
}

export type Formula = Document & FormulaObject

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
  Branch: string
  SubjectName: string
  SubjectID: string
  Formulas?: FormulaObject[]
}

export interface FormulaObject {
  Subject: string
  ID: number
  Name: string
  Content: string
  Difficulty: number
  Signs: string
  Unit?: Unit
  Quantities?: Unit | Unit[]
}

interface Unit {
  Symbol: string
  Content: string
}
