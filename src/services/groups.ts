import GroupModel from '../database/models/group'
import {Request, Response} from 'express'

class GroupActions {
    async getGroups(req: Request, res: Response) {
        const group = await GroupModel.find({})
        res.status(200).json(group)
    }
}

export default new GroupActions()