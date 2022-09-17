import { EventType, RecommendationType } from './TradeEvent';

export class TradeEventDTO {
    public ID: number;
    public ID_CLIENT: number;
    public ID_EVENT_TYPE: EventType;
    public ID_REC_TYPE: RecommendationType;
    public ASSET: string;
    public INITIAL_PRICE: number;
    public FINAL_PRICE: number;
    public QUANTITY: number;
    public VALORIZATION: number;
    public INFO: string;
    public MOMENT: Date;

    constructor() {
    }
}