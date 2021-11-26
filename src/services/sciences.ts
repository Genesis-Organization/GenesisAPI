import GroupModel from '@/database/models/group'
import ScienceModel from '@/database/models/science'
import BranchModel from '@/database/models/branch'
import SubjectModel from '@/database/models/subject'
import FormulaModel from '@/database/models/formula'

class SciencesServices {
  async getGroups(filter?: string, target?: string) {
    if (filter && target) {
      const response = await GroupModel.find({}).where(target).equals(filter)
      return response
    } else {
      const response = await GroupModel.find({})
      return response
    }
  }
  async getSciences(filter?: string, target?: string) {
    if (filter && target) {
      const response = await ScienceModel.find({}).where(target).equals(filter)
      return response
    } else {
      const response = await ScienceModel.find({})
      return response
    }
  }
  async getBranches(filter?: string, target?: string) {
    if (filter && target) {
      const response = await BranchModel.find({}).where(target).equals(filter)
      return response
    } else {
      const response = await BranchModel.find({})
      return response
    }
  }
  async getSubjects(filter?: string, target?: string) {
    if (filter && target) {
      const response = await SubjectModel.find({}).where(target).equals(filter)
      return response
    } else {
      const response = await SubjectModel.find({})
      return response
    }
  }
  async getFormulas(filter?: string, target?: string) {
    if (filter && target) {
      const response = await FormulaModel.find({}).where(target).equals(filter)
      return response
    } else {
      const response = await FormulaModel.find({})
      return response
    }
  }
}

export default new SciencesServices()
