import { prop, getModelForClass } from '@typegoose/typegoose'

class Formula {
  @prop()
  public Subject?: number

  @prop()
  public ID?: number

  @prop()
  public Name?: string

  @prop()
  public Content?: string

  @prop()
  public Difficulty?: number

  @prop()
  public Unit?: string

  @prop()
  public Quantities?: Quantity | Quantity[]
}

interface Quantity {
  Symbol: string
  Content: string
}

const FormulaModel = getModelForClass(Formula)

export default FormulaModel
