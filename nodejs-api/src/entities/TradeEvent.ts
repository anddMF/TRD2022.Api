export class TradeEvent {
    public eventType: EventType;
    public recType: RecommendationType;
    public asset: string;
    public initialPrice: number;
    public finalPrice: number;
    public quantity: number;
    public valorization: number;
    public timestamp: Date;
    public clientId: number;
    public message: string;

    constructor() {}

}

export enum EventType {
    BUY = 1,
    SELL = 2,
    INFO = 3,
    ERROR = 4,
    START = 5,
    FINISH = 6
}

export enum RecommendationType {
    DAY = 1,
    HOUR = 2,
    MINUTE = 3
}