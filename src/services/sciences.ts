import {
  Group,
  Science,
  Branch,
  BranchObject,
  ScienceObject,
  SubjectObject,
} from '@/types/sciences'

import GroupModel from '@/database/models/sciences/group'
import ScienceModel from '@/database/models/sciences/science'
import BranchModel from '@/database/models/sciences/branch'
import SubjectModel from '@/database/models/sciences/subject'
import FormulaModel from '@/database/models/sciences/formula'

class SciencesService {
  getGroups = async (filter?: string, target?: string): Promise<Group[]> => {
    if (filter && target) {
      const response = await GroupModel.find().where(target).equals(filter)
      return response
    } else {
      const response = await GroupModel.find()
      return response
    }
  }
  getSciences = async (
    filter?: string,
    target?: string
  ): Promise<Science[]> => {
    if (filter && target) {
      const response = await ScienceModel.find({}).where(target).equals(filter)
      return response
    } else {
      const response = await ScienceModel.find()
      return response
    }
  }
  getBranches = async (
    filter?: string,
    target?: string
  ): Promise<(Branch & { _id: string })[]> => {
    if (filter && target) {
      const response = await BranchModel.find({}).where(target).equals(filter)
      return response
    } else {
      const response = await BranchModel.find({})
      return response
    }
  }
  // getSubjects(filter?: string, target?: string) {
  //   if (filter && target) {
  //     const response = await SubjectModel.find({}).where(target).equals(filter)
  //     return response
  //   } else {
  //     const response = await SubjectModel.find({})
  //     return response
  //   }
  // }
  // getFormulas(filter?: string, target?: string) {
  //   if (filter && target) {
  //     const response = await FormulaModel.find({}).where(target).equals(filter)
  //     return response
  //   } else {
  //     const response = await FormulaModel.find({})
  //     return response
  //   }
  // }

  getScienceObject = async (
    filter?: string,
    target?: string
  ): Promise<ScienceObject[]> => {
    let sciences

    if (filter && target) {
      sciences = await ScienceModel.find({}).where(target).equals(filter)
    } else {
      sciences = await ScienceModel.find({})
    }

    const scienceObjArray: ScienceObject[] = []

    for (const science of sciences) {
      const group = await GroupModel.findOne({})
        .where('GroupID')
        .equals(science.Group)

      const o: ScienceObject = {
        ScienceID: science.ScienceID,
        ScienceName: science.ScienceName,
        Group: group,
      }
      scienceObjArray.push(o)
    }

    return scienceObjArray
  }

  getBranchesObject = async (
    filter?: string,
    target?: string
  ): Promise<BranchObject[]> => {
    let branches

    if (filter && target) {
      branches = await BranchModel.find({}).where(target).equals(filter)
    } else {
      branches = await BranchModel.find({})
    }

    const branchesObjArray: BranchObject[] = []

    for (const branch of branches) {
      const prescience = await ScienceModel.findOne({})
        .where('ScienceID')
        .equals(branch.Science)

      const science: ScienceObject = {
        ScienceID: prescience.ScienceID,
        ScienceName: prescience.ScienceName,
        Group: await GroupModel.findOne({
          GroupID: prescience.Group,
        }),
      }

      const o: BranchObject = {
        BranchID: branch.BranchID,
        BranchName: branch.BranchName,
        Science: science,
      }
      branchesObjArray.push(o)
    }

    return branchesObjArray
  }

  fetchSciences = async (
    science: string,
    branch: string
  ): Promise<BranchObject | null> => {
    // DB Queries
    const scienceObj = await ScienceModel.findOne({
      ScienceName: science,
    })
    const branchObj = await BranchModel.findOne({
      BranchName: branch,
    })
    const subjects = await SubjectModel.find({
      Branch: branchObj.BranchID,
    })

    // Creating subjects object
    const SubjectObjArray: SubjectObject[] = []

    for (const subject of subjects) {
      const formulas = await FormulaModel.find({
        Subject: subject.SubjectID,
      })

      const o: SubjectObject = {
        Branch: subject.Branch,
        SubjectID: subject.SubjectID,
        SubjectName: subject.SubjectName,
        Formulas: formulas,
      }
      SubjectObjArray.push(o)
    }

    // Creating response from objects
    if (scienceObj && branchObj) {
      return {
        BranchID: branchObj.BranchID,
        BranchName: branchObj.BranchName,
        Science: {
          ScienceID: scienceObj.ScienceID,
          ScienceName: scienceObj.ScienceName,
          Group: await GroupModel.findOne({
            GroupID: scienceObj.Group,
          }),
        },
        Subjects: SubjectObjArray,
      }
    } else {
      return null
    }
  }
}

export default SciencesService
