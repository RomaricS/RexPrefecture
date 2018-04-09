
export interface Rex {
  readonly name: string,
  readonly createdAt: Date,
  readonly typeCDS: string,
  readonly sentAt: Date,
  readonly inLocal: boolean,
  readonly fingerprintAt: Date,
  readonly smsAt: Date,
  readonly takenAt: Date,
  readonly processDuration: number,
  readonly prefecture: number,
  readonly comment: string
}