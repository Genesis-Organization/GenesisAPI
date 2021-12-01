import {
  Group,
  Science,
  Branch,
  BranchObject,
  ScienceObject,
} from '@/types/sciences'

import GroupModel from '@/database/models/group'
import ScienceModel from '@/database/models/science'
import BranchModel from '@/database/models/branch'
import SubjectModel from '@/database/models/subject'
// import FormulaModel from '@/database/models/formula'

class SciencesServices {
  async getGroups(
    filter?: string,
    target?: string
  ): Promise<(Group & { _id: string })[]> {
    if (filter && target) {
      const response = await GroupModel.find({}).where(target).equals(filter)
      return response
    } else {
      const response = await GroupModel.find({})
      return response
    }
  }
  async getSciences(
    filter?: string,
    target?: string
  ): Promise<(Science & { _id: string })[]> {
    if (filter && target) {
      const response = await ScienceModel.find({}).where(target).equals(filter)
      return response
    } else {
      const response = await ScienceModel.find({})
      return response
    }
  }
  async getBranches(
    filter?: string,
    target?: string
  ): Promise<(Branch & { _id: string })[]> {
    if (filter && target) {
      const response = await BranchModel.find({}).where(target).equals(filter)
      return response
    } else {
      const response = await BranchModel.find({})
      return response
    }
  }
  // async getSubjects(filter?: string, target?: string) {
  //   if (filter && target) {
  //     const response = await SubjectModel.find({}).where(target).equals(filter)
  //     return response
  //   } else {
  //     const response = await SubjectModel.find({})
  //     return response
  //   }
  // }
  // async getFormulas(filter?: string, target?: string) {
  //   if (filter && target) {
  //     const response = await FormulaModel.find({}).where(target).equals(filter)
  //     return response
  //   } else {
  //     const response = await FormulaModel.find({})
  //     return response
  //   }
  // }

  async getScienceObject(
    filter?: string,
    target?: string
  ): Promise<ScienceObject[]> {
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

  async getBranchesObject(
    filter?: string,
    target?: string
  ): Promise<BranchObject[]> {
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

  async fetchSciences(
    science: string,
    branch: string
  ): Promise<BranchObject | null> {
    const scienceObj = await ScienceModel.findOne({
      ScienceName: science,
    })
    const branchObj = await BranchModel.findOne({
      BranchName: branch,
    })
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
        Subjects: await SubjectModel.find({
          Branch: branchObj.BranchID,
        }),
      }
    } else {
      return null
    }
  }
}

export default new SciencesServices()
