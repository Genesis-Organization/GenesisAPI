import { Document } from 'mongoose'

export interface Group extends Document {
  GroupID: number
  GroupName: string
}

export interface Science extends Document {
  Group: any
//   number | {
//     _id: any
//     GroupID: number
//     GroupName: string
//   } | object
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

export interface Formula extends Document {
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
